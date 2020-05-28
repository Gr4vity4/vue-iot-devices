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
  },
  mutations: {
    mqttConfig(state, data) {
      state.mqttConfig = data;
    },
  },
  actions: {
    mqttConfig(context, data) {
      console.log('Incoming data', data);
      context.commit('mqttConfig', data);
    },
  },
};
