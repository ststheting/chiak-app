<template>
  <button class="btn flex p-2 px-6 bg-red-600 rounded-full text-white" @click="onClick()">
    {{ text }}
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    text: String,
  },
  methods: {
    onClick() {
      this.$emit('btn-click')
    },
  },
}
</script>
