/* eslint-disable no-param-reassign */
import Vue from 'vue';

export default {
  state: {
    mqttConfig: {
      host: 'mqtt.cmmc.io',
      port: 9001,
      clientId: '',
      username: '',
      password: '',
      topic: '',
    },
    mqttConnected: false,
    devices: [],
    deviceInfo: {},
  },
  mutations: {
    mqttConfig(state, data) {
      state.mqttConfig = data;
    },
    mqttConnected(state, data) {
      state.mqttConnected = data;
    },
    devices(state, data) {
      const lists = state.devices;
      const clientId = data.info.client_id;

      if (lists.length < 1) {
        lists.push(data);
      } else {
        let duplicate = false;
        let indexDuplicate = 0;

        lists.forEach((device, index) => {
          if (device.info.client_id === clientId) {
            duplicate = true;
            indexDuplicate = index;
          }
        });

        if (duplicate) {
          Vue.set(state.devices, indexDuplicate, data);
        } else {
          lists.push(data);
        }
      }

      state.devices = lists;
    },
    deviceInfo(state, data) {
      state.deviceInfo = data;
    },
  },
  actions: {
    mqttConfig(context, data) {
      context.commit('mqttConfig', data);
    },
    mqttConnected(context, data) {
      context.commit('mqttConnected', data);
    },
    devices(context, data) {
      context.commit('devices', data);
    },
    deviceInfo(context, data) {
      context.commit('deviceInfo', data);
    },
  },
};
