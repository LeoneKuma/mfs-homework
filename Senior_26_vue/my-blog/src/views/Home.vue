<template>
  <div class="home">
    <div class="content">
      <router-view></router-view>
    </div>
    <div class="right-side">
      <right-side></right-side>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import RightSide from "@/components/RightSide.vue";

export default {
  name: "home",
  components: {
    RightSide
  }
};
</script>
<style lang="stylus" scoped>
div.home {
  display: flex;
  width: 80%;
  margin: 0 auto;

  div.content {
    margin-left: 50px;
    max-width: 60%;
  }

  div.right-side {
    margin-left: 30px;
    margin-top: 20px;
    max-width: 30%;
    display: flex;
    justify-content: center;
  }
}

@media screen and (max-width: 700px) {
  div.home {
    display flex
    flex-direction: column;
    align-items center
    div.content{
      margin-left 0
      max-width 100%
    }
    div.right-side{
      margin-left 0
      max-width 100%
    }
  }
  
}
</style>
