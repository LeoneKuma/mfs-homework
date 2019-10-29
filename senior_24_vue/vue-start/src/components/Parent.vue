
<template>
  <div>
    <div>{{sum}}</div>
    <child @inc="inc"></child>
    <child @inc="inc"></child>
    <child @inc="inc"></child>
  </div>
</template>

<script>
/* eslint-disable */
import Child from "./Child.vue";
export default {
  name: "Parent",
  data() {
    return {
      sum: 0
    };
  },
  methods: {
    inc() {
      this.sum++;
    }
  },
  components: {
    Child
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus"></style>
