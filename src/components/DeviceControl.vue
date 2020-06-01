<template>
  <div>
    <p class="title is-4">
      Device Info
    </p>
    <table class="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
      <thead>
        <tr>
          <th>key</th>
          <th>value</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(value, propertyName, index) in data['info']"
          :key="index"
        >
          <td v-text="propertyName" />
          <td v-text="value" />
        </tr>

        <tr
          v-for="(value, propertyName, index) in data['d']"
          :key="index"
        >
          <td v-text="propertyName" />
          <td v-text="value" />
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import { mapState } from 'vuex';

export default {
  name: 'DeviceControl',
  data() {
    return {
      data: {},
    };
  },
  computed: { ...mapState(['deviceInfo']) },
  watch: {
    deviceInfo(newValue) {
      this.data = newValue;
    },
  },
};
</script>
