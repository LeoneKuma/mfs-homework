<template>
  <div id="app">
    <navigator></navigator>
    <router-view/>
  </div>
</template>
<script>
import Navigator from './components/Nav.vue'
export default {
  components:{
    Navigator
  }
}
</script>
<style lang="stylus">

</style>
