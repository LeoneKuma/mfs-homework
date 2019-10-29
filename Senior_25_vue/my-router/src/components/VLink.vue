<template>
  <div>
    <a :href="href" @click="onClick">
      <slot></slot>
    </a>
  </div>
</template>
<script>
export default {
  name: "v-link",
  props: {
    href: {
      type: String,
      required: true
    }
  },
  methods: {
    onClick(e) {
      e.preventDefault();
      let path = this.href;
      this.$root.currentRoute = path;
      window.history.pushState(null, null, path);
    }
  }
};
</script>
