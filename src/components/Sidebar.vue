<template>
  <div>
    <div class="card">
      <div class="card-content">
        <div class="content">
          <p
            :class="['bold', mqttStatus ? 'has-text-success' : 'has-text-danger']"
            v-text="mqttTextStatus"
          />
          <div>
            <div class="field">
              <label for="">Host</label>
              <input
                ref="hostInput"
                type="text"
                class="input"
                value="mqtt.cmmc.io"
              >
            </div>
            <div class="field">
              <label for="">Port</label>
              <input
                ref="portInput"
                type="text"
                class="input"
                value="9001"
              >
            </div>
            <div class="field">
              <label for="">ClientID</label>
              <input
                ref="clientIdInput"
                type="text"
                class="input"
              >
            </div>
            <div class="field">
              <label for="">Username</label>
              <input
                ref="usernameInput"
                type="text"
                class="input"
              >
            </div>
            <div class="field">
              <label for="">Password</label>
              <input
                ref="passwordInput"
                type="text"
                class="input"
              >
            </div>
            <div class="field">
              <label for="">Subscribe Topic</label>
              <input
                ref="topicInput"
                type="text"
                class="input"
                value="CMMC/#"
              >
            </div>
            <div
              class="field"
              style="padding-top: 10px"
            >
              <button
                type="button"
                :class="['button w-full', mqttStatus ? 'is-danger' : 'is-success']"
                @click="mqttConnect"
                v-text="buttonText"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  mapState,
} from 'vuex';
import Paho from 'paho-mqtt/mqttws31';

export default {
  name: 'Sidebar',
  data() {
    return {
      mqttTextStatus: 'Waiting for connection',
      mqttStatus: false,
      buttonText: 'Connect',
    };
  },
  mounted() {
    this.$refs.clientIdInput.value = `CMMC_${Math.random().toString(36).slice(-8)}`;
  },
  methods: {
    mqttConnect() {
      if (this.mqttStatus) {
        window.location.reload();
      } else {
        this.$store.dispatch('mqttConfig', {
          host: this.$refs.hostInput.value,
          port: parseInt(this.$refs.portInput.value),
          clientId: this.$refs.clientIdInput.value,
          username: this.$refs.usernameInput.value,
          password: this.$refs.passwordInput.value,
          topic: this.$refs.topicInput.value,
        });
      }
    },
  },
  computed: {
    ...mapState(['mqttConfig', 'mqttConnected']),
  },
  watch: {
    mqttConfig(newValue) {
      const then = this;
      window.client = new Paho.MQTT.Client(newValue.host, newValue.port, '', newValue.clientId);

      window.client.onConnectionLost = onConnectionLost;
      window.client.onMessageArrived = onMessageArrived;
      window.client.connect({
        onSuccess: onConnect,
      });

      function onConnect() {
        then.$store.dispatch('mqttConnected', true);
        window.client.subscribe(newValue.topic);
      }

      function onConnectionLost(responseObject) {
        if (responseObject.errorCode !== 0) {
          console.log(`onConnectionLost:${responseObject.errorMessage}`);
        }
      }

      function onMessageArrived(message) {
        const data = JSON.parse(message.payloadString);

        if (data.info !== undefined) {
          console.log(data.info);
        }
      }
    },
    mqttConnected(newValue) {
      if (newValue) {
        this.mqttStatus = true;
        this.mqttTextStatus = 'Connected';
        this.buttonText = 'Disconnect';
      }
    },
  },
};

</script>
