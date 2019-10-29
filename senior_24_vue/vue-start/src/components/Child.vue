<template>
  <span>
    <button @click="inc">{{sum}}</button>
  </span>
</template>

<script>
export default {
  name: 'Child',
  data () {
    return {
      sum: 0
    }
  },
  methods: {
    inc () {
      this.sum++
      this.$emit('inc')
    }
  }
}
</script>
