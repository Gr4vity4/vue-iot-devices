<template>
  <div>
    <p class="title is-4">
      Device Control
    </p>
    <!-- Destination Topic -->
    <div class="group">
      <div class="field">
        <label for="">Destination Topic</label>
        <input
          :value="prefix"
          class="input"
          type="text"
          placeholder="Destination Topic"
        >
      </div>
    </div>
    <!-- Switch Control -->
    <div class="group">
      <div class="field">
        <label for="">Switch Control</label>
      </div>
      <div class="field">
        <button
          type="button"
          class="button is-success btn-switch"
          v-text="`ON`"
        />
        <button
          type="button"
          class="button is-danger btn-switch"
          v-text="`OFF`"
        />
      </div>
    </div>
    <!-- Slide Control -->
    <div class="group">
      <div class="field">
        <label for="">Slider Control</label>
      </div>
      <div class="field">
        <vue-slider
          v-model="sliderValue"
          max="255"
        />
      </div>
      <div class="field">
        <button
          type="button"
          class="button is-success"
          v-text="`Send`"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
  input {
    margin-top: 6px !important;
  }

  .group {
    margin-top: 20px;
  }

  .btn-switch {
    margin-right: 10px;
  }
</style>

<script>
import { mapState } from 'vuex';
import VueSlider from 'vue-slider-component';
import 'vue-slider-component/theme/antd.css';

export default {
  name: 'DeviceControl',
  components: {
    'vue-slider': VueSlider,
  },
  data() {
    return {
      data: {},
      prefix: '',
      sliderValue: 0,
    };
  },
  computed: { ...mapState(['deviceInfo']) },
  watch: {
    deviceInfo(newValue) {
      this.data = newValue;
      this.prefix = `${newValue.info.prefix}$/command`;
    },
  },
};
</script>
