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
        <label for="">Slider Control <span class="has-text-success">(Degree)</span></label>
      </div>
      <div class="field">
        <input
          :value="servoPrefix"
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
          :value="neopixelPrefix"
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
          style="width: 100% !important; margin-top: 20px"
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
      data: {
        info: {
          prefix: '',
        },
      },
      prefix: '',
      servoPrefix: '',
      neopixelPrefix: '',
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
      this.prefix = `${newValue.info.prefix}${newValue.d.myName}/$/command`;
      this.servoPrefix = `${newValue.info.prefix}${newValue.d.myName}$/servo`;
      this.neopixelPrefix = `${newValue.info.prefix}${newValue.d.myName}$/neopixel`;
    },
  },
  methods: {
    switchControl(value) {
      window.client.publish(this.prefix, value);
    },
    sliderControl() {
      const { info } = this.data;
      window.client.publish(`${info.prefix}$/servo`, String(this.sliderValue));
    },
    colorPicker() {
      const { info } = this.data;
      window.client.publish(`${info.prefix}$/neopixel`, String(JSON.stringify(this.colors.rgba)));
    },
  },
};
</script>
