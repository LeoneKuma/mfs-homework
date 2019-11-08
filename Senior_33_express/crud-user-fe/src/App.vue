<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="stylus">
body{
  margin 0
}
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  display flex
  height  100vh
  justify-content  center
  align-items center
  background-color rgba(0,0,0,0.1)
</style>
