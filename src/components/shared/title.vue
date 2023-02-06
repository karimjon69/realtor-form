<template>
  <div :class="[size, 'shadow']" :style="{color : isDark ? 'black' : 'white'}">{{titleName}}</div>
</template>

<script>
export default {
  props: {
    titleName: { type: String, required: true },
    size: { type: String, required: true }, 
    isDark: { type: Boolean, default: false, required: false }
  },
}
</script>

<style scoped>
.large {
  font-size: 4em;
}

.medium { 
  font-size: 3em;
}

.small { 
  font-size: 1.25em;
}

.shadow {
  text-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
</style>
