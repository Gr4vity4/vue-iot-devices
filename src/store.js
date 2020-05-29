export default {
  state: {
    mqttConfig: {
      host: 'mqtt.cmmc.io',
      port: 9001,
      clientId: '',
      username: '',
      password: '',
      topic: ''
    },
    mqttConnected: false
  },
  mutations: {
    mqttConfig(state, data) {
      state.mqttConfig = data;
    },
    mqttConnected(state, data) {
      state.mqttConnected = data
    }
  },
  actions: {
    mqttConfig(context, data) {
      console.log('Incoming data', data);
      context.commit('mqttConfig', data);
    },
    mqttConnected(context, data) {
      context.commit('mqttConnected', data);
    }
  },
};
