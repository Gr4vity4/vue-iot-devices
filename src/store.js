/* eslint-disable no-param-reassign */
import _ from 'lodash';

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
      let lists = state.devices;
      lists.push(data);
      lists = _.uniqBy(lists, (device) => device.info.client_id);
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
