<template>
  <div>
    <!-- Device Control -->
    <div
      :class="['modal', showControlModal && 'is-active']"
    >
      <div class="modal-background" />
      <div class="modal-content">
        <div class="card">
          <div class="card-content">
            <device-control />
            <div class="has-text-right">
              <button
                type="button"
                class="button is-danger is-light"
                style="margin-top: 20px"
                @click="showControlModal = false"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      <button
        class="modal-close is-large"
        aria-label="close"
        @click="showControlModal = false"
      />
    </div>

    <!-- Device Info -->
    <div
      :class="['modal', showInfoModal && 'is-active']"
    >
      <div class="modal-background" />
      <div class="modal-content">
        <div class="card">
          <div class="card-content">
            <device-info />
            <div class="has-text-right">
              <button
                type="button"
                class="button is-danger is-light"
                style="margin-top: 20px"
                @click="showInfoModal = false"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      <button
        class="modal-close is-large"
        aria-label="close"
        @click="showInfoModal = false"
      />
    </div>
    <div
      v-for="(devices, index) in lists"
      :key="index"
    >
      <div class="columns">
        <div
          v-for="device in devices"
          :key="device.info.client_id"
          class="column"
        >
          <div class="card">
            <header class="card-header has-background-info">
              <p
                class="card-header-title has-text-white"
                v-text="device.d.myName"
              />
            </header>
            <div class="card-content">
              <div class="content">
                <p v-text="`ip : ${device.info.ip}`" />
                <p v-text="`heap : ${device.d.heap}`" />
                <p v-text="`millis : ${device.d.millis}`" />
                <p v-text="`prefix : ${device.info.prefix}`" />
                <p v-text="`runtime : ${runtime(device.d.millis)}`" />
              </div>
            </div>
            <footer
              class="card-footer is-flex"
              style="justify-content: space-between; border: 0"
            >
              <button
                type="button"
                class="button is-success no-radius"
                @click="fetchDeviceControl(device)"
              >
                <i
                  class="fas fa-cogs"
                  style="margin-right: 5px"
                />
                Control
              </button>
              <button
                type="button"
                class="button is-info no-radius"
                @click="fetchDeviceInfo(device)"
              >
                <i
                  class="fas fa-info-circle"
                  style="margin-right: 5px"
                />
                More Info
              </button>
            </footer>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import _ from 'lodash';
import { mapState } from 'vuex';
import DeviceInfo from './DeviceInfo.vue';
import DeivceControl from './DeviceControl.vue';

// const moment = require('moment');

export default {
  name: 'DeviceLists',
  components: {
    'device-info': DeviceInfo,
    'device-control': DeivceControl,
  },
  data() {
    return {
      lists: [],
      showControlModal: false,
      showInfoModal: false,
    };
  },
  computed: {
    ...mapState(['devices']),
  },
  watch: {
    devices(newValue) {
      this.lists = _.chunk(newValue, 3);
    },
  },
  methods: {
    fetchDeviceInfo(device) {
      this.$store.dispatch('deviceInfo', device);
      this.showInfoModal = true;
    },
    fetchDeviceControl(device) {
      this.$store.dispatch('deviceInfo', device);
      this.showControlModal = true;
    },
    runtime(millis) {
      const runtime = Number.parseFloat(((millis / 1000) / 60) / 60).toFixed(2);
      const runtimeSplit = runtime.split('.');
      console.log(runtimeSplit);

      if (Number(runtimeSplit[1]) >= 60) {
        runtimeSplit[0] = Number(runtimeSplit[0]) + 1;
        runtimeSplit[1] = Number(runtimeSplit[1] - 60);
      }

      // const format = moment(`${runtimeSplit[0]}${runtimeSplit[1]}`, 'Hmm').format('HH:mm');

      return `${runtimeSplit[0]}:${runtimeSplit[1]}`;
    },
  },
};
</script>
