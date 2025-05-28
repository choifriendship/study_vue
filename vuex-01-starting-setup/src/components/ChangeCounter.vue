<template>
  <button @click="addOne">Add 1</button>
</template>

<script>
export default {
  methods: {
    addOne() {
      // main.js에 있는 mutations에 있는 이름을 가져와야 함
      this.$store.commit('increment');
    },
  },
};
</script>