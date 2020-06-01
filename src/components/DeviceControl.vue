<template>
  <div>
    <p class="title is-4">
      Device Control
    </p>
    <!-- Switch Control -->
    <div class="group">
      <div class="field">
        <label for="">Switch Control</label>
      </div>
      <div class="field">
        <input
          :value="prefix"
          class="input"
          type="text"
          placeholder="Destination Topic"
          readonly
        >
      </div>
      <div class="field">
        <button
          type="button"
          class="button is-success btn-switch"
          @click="switchControl(`ON`)"
          v-text="`ON`"
        />
        <button
          type="button"
          class="button is-danger btn-switch"
          @click="switchControl(`OFF`)"
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
        <input
          :value="`${data.info.prefix}$/servo`"
          class="input"
          type="text"
          placeholder="Destination Topic"
          readonly
        >
      </div>
      <div class="field">
        <vue-slider
          v-model="sliderValue"
          v-bind="sliderOptions"
        />
      </div>
      <div class="field">
        <button
          type="button"
          class="button is-success"
          @click="sliderControl()"
          v-text="`Send`"
        />
      </div>
    </div>
    <!-- Color Picker -->
    <div class="group">
      <div class="field">
        <label for="">Color Picker</label>
      </div>
      <div class="field">
        <input
          :value="`${data.info.prefix}$/neopixel`"
          class="input"
          type="text"
          placeholder="Destination Topic"
          readonly
        >
      </div>
      <div class="field">
        <photoshop-picker
          v-model="colors"
          value="#3299DC"
        />
      </div>
      <div class="field">
        <button
          type="button"
          class="button is-success"
          @click="colorPicker()"
          v-text="`Send`"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
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
import { Photoshop } from 'vue-color';

export default {
  name: 'DeviceControl',
  components: {
    'vue-slider': VueSlider,
    'photoshop-picker': Photoshop,
  },
  data() {
    return {
      data: {},
      prefix: '',
      sliderValue: 0,
      sliderOptions: {
        max: 180,
      },
      colors: {
        hex: '#3299DC',
        hsl: {
          h: 150, s: 0.5, l: 0.2, a: 1,
        },
        hsv: {
          h: 150, s: 0.66, v: 0.30, a: 1,
        },
        rgba: {
          r: 25, g: 77, b: 51, a: 1,
        },
        a: 1,
      },
    };
  },
  computed: { ...mapState(['deviceInfo']) },
  watch: {
    deviceInfo(newValue) {
      this.data = newValue;
      this.prefix = `${newValue.info.prefix}$/command`;
    },
  },
  methods: {
    switchControl(value) {
      window.client.publish(this.prefix, value);
    },
    sliderControl() {
      window.client.publish(`${this.data.info.prefix}$/servo`, String(this.sliderValue));
    },
    colorPicker() {
      window.client.publish(`${this.data.info.prefix}$/neopixel`, String(JSON.stringify(this.colors.rgba)));
    },
  },
};
</script>
