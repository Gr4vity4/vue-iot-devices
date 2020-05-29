<template>
  <div>
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
              <a
                href="#"
                class="card-header-icon"
                aria-label="more options"
              >
                <span class="icon">
                  <i
                    class="fas fa-angle-down"
                    aria-hidden="true"
                  />
                </span>
              </a>
            </header>
            <div class="card-content">
              <div class="content">
                <p v-text="`ip : ${device.info.ip}`" />
                <p v-text="`heap : ${device.d.heap}`" />
                <p v-text="`millis : ${device.d.millis}`" />
                <p v-text="`prefix : ${device.info.prefix}`" />
                <!-- <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time> -->
              </div>
            </div>
            <footer
              class="card-footer is-flex"
              style="justify-content: flex-end"
            >
              <button
                type="button"
                class="button is-info no-radius"
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

export default {
  name: 'DeviceLists',
  data() {
    return {
      lists: [],
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
};
</script>
