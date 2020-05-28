<template>
  <div id="app">
    <div class="container" style="padding: 10px 0 60px 0">
      <Navbar />
      <div class="columns" style="padding-top: 10px">
        <div class="column is-one-quarter">
          <Sidebar />
        </div>
        <div class="column">
          <Content />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Navbar from './components/Navbar'
  import Sidebar from './components/Sidebar'
  import Content from './components/Content'

  export default {
    name: 'App',
    components: {
      Navbar,
      Sidebar,
      Content
    }
  }

</script>

<style>
  @import '~bulma/css/bulma.css';

  .bold, label, button {
    font-weight: bold;
  }

  .w-full {
    width: 100%;
  }

</style>
