<template>
  <div>
    <div class="group">
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
            :key="`${propertyName}-${index}`"
          >
            <td v-text="propertyName" />
            <td v-text="value" />
          </tr>
        </tbody>
      </table>
    </div>
    <div class="group">
      <p class="title is-4">
        Device Data
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
            v-for="(value, propertyName, index) in data['d']"
            :key="`${propertyName}-${index}`"
          >
            <td v-text="propertyName" />
            <td v-text="value" />
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<style scoped>
.group {
  margin-bottom: 20px;
}
</style>
<script>
import { mapState } from 'vuex';

export default {
  name: 'DeviceInfo',
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
