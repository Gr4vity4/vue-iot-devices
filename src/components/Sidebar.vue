<template>
  <div>
    <div class="card">
      <div class="card-content">
        <div class="content">
          <p class="bold has-text-danger">Waiting for connection</p>
          <div>
            <div class="field">
              <label for="">Host</label>
              <input type="text" class="input" ref="hostInput" value="mqtt.cmmc.io">
            </div>
            <div class="field">
              <label for="">Port</label>
              <input type="text" class="input" ref="portInput" value="9001">
            </div>
            <div class="field">
              <label for="">ClientID</label>
              <input type="text" class="input" ref="clientIdInput">
            </div>
            <div class="field">
              <label for="">Username</label>
              <input type="text" class="input" ref="usernameInput">
            </div>
            <div class="field">
              <label for="">Password</label>
              <input type="text" class="input" ref="passwordInput">
            </div>
            <div class="field">
              <label for="">Subscribe Topic</label>
              <input type="text" class="input" ref="topicInput" value="CMMC/#">
            </div>
            <div class="field" style="padding-top: 10px">
              <button type="button" class="button is-success w-full" @click="mqttConnect">Connect</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {
    mapState
  } from 'vuex'
  import Paho from 'paho-mqtt/mqttws31'

  export default {
    name: 'Sidebar',
    methods: {
      mqttConnect() {
        console.log('mqttConnect clicked')

        this.$store.dispatch('mqttConfig', {
          host: this.$refs.hostInput.value,
          port: parseInt(this.$refs.portInput.value),
          clientId: this.$refs.clientIdInput.value,
          username: this.$refs.usernameInput.value,
          password: this.$refs.passwordInput.value,
          topic: this.$refs.topicInput.value
        });

      }
    },
    mounted() {
      this.$refs.clientIdInput.value = `CMMC_${Math.random().toString(36).slice(-8)}`
    },
    computed: {
      ...mapState(['mqttConfig'])
    },
    watch: {
      mqttConfig: function (newValue) {
        const client = new Paho.MQTT.Client(newValue.host, newValue.port, '', newValue.clientId)

        client.onConnectionLost = onConnectionLost
        client.onMessageArrived = onMessageArrived
        client.connect({
          onSuccess: onConnect
        })

        function onConnect() {
          client.subscribe(newValue.topic)
        }

        function onConnectionLost(responseObject) {
          if (responseObject.errorCode !== 0) {
            console.log('onConnectionLost:' + responseObject.errorMessage)
          }
        }

        function onMessageArrived(message) {
          const data = JSON.parse(message.payloadString)

          if (data.info !== undefined) {
            console.log(data.info)
          }
        }
      }
    }
  }

</script>
