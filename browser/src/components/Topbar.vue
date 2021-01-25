<template>
  <div id="topbar">
    {{message}}
    <hr>
  </div>
</template>

<script>
export default {
  name: 'Topbar',
  data: function () {
    return {
      message: 'Hello Topbar'
    }
  }
}
</script>
