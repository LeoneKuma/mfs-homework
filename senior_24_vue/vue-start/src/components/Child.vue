<template>
  <span>
    <button @click="inc">{{sum}}</button>
  </span>
</template>

<script>
export default {
  name: 'Child',
  props: [
    'psum'
  ],
  data () {
    return {
      sum: 0
    }
  },
  methods: {
    inc () {
      this.sum++
      this.$emit('inc')
      console.log(this.psum)
    }
  }
}
</script>
