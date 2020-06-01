<template>
  <div>
    <div class="columns">
      <div
        v-if="($store.state.devices).length < 1 && $store.state.mqttConnected === true"
        class="column has-text-centered"
      >
        <img
          src="@/assets/loading.gif"
          alt=""
          width="64"
          height="64"
        >
        <p class="bold">
          Please wait a few minute.
        </p>
      </div>
    </div>
    <DeviceLists />
  </div>
</template>

<script>
import DeviceLists from './DeviceLists.vue';

export default {
  name: 'Content',
  components: {
    DeviceLists,
  },
};

</script>
