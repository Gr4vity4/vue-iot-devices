<template>
  <div>
    <div class="card">
      <div class="card-content">
        <div class="content">
          <p class="bold has-text-danger">Waiting for connection</p>
          <div>
            <div class="field">
              <label for="">Host</label>
              <input type="text" class="input">
            </div>
            <div class="field">
              <label for="">Port</label>
              <input type="text" class="input">
            </div>
            <div class="field">
              <label for="">ClientID</label>
              <input type="text" class="input">
            </div>
            <div class="field">
              <label for="">Username</label>
              <input type="text" class="input">
            </div>
            <div class="field">
              <label for="">Password</label>
              <input type="text" class="input">
            </div>
            <div class="field">
              <label for="">Topic</label>
              <input type="text" class="input">
            </div>
            <div class="field" style="padding-top: 10px">
              <button class="button is-success w-full">Connect</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Sidebar'
  }

</script>
