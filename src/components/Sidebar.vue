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
              <label for="">Topic</label>
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
  export default {
    name: 'Sidebar',
    data() {},
    methods: {
      mqttConnect() {
        console.log('mqttConnect clicked')
        this.$store.dispatch('mqttConfig', {
          host: this.$refs.hostInput.value,
          port: this.$refs.portInput.value,
          clientId: this.$refs.clientIdInput.value,
          username: this.$refs.usernameInput.value,
          password: this.$refs.passwordInput.value,
          topic: this.$refs.topicInput.value
        });
      }
    },
    mounted() {
      this.$refs.clientIdInput.value = `CMMC_${Math.random().toString(36).slice(-8)}`
    }
  }

</script>
