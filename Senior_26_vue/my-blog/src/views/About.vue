<template>
  <div class="about">
    <h1>About Me</h1>
    <img alt="Vue logo" src="../assets/logo.png" />
    <p>Responsive web design offers us a way forward, finally allowing us to design for the ebb and flow of things. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly.</p>
    <p>Responsive web design offers us a way forward, finally allowing us to design for the ebb and flow of things. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly.</p>
  </div>
</template>
<script>
export default {};
</script>
<style lang="stylus" scoped>
div.about {
  max-width 80%
  margin 0 auto
  text-align: center;
  h1{
    font-size 36px
  }
  p{
    font-size 20px
    text-align start
    &:before{
      content ""
      display inline-block
      width 30px
    }
  }
}

</style>
