<template>
  <h2>My Course Goal</h2>
  <h3 v-if="showGoal">{{ reactiveGoal.goal }}</h3>
  <button @click="toggleGoal">Toggle Goal</button>
</template>

<script>
import { ref, reactive } from 'vue';
export default {
  setup() {
    // const refGoal = ref('Finish vue Study with ref');
    const reactiveGoal = reactive({
      goal: 'Finish Vue Study! with reactive'
    });

    const showGoal = ref(true);

    function toggleGoal() {
      showGoal.value = !showGoal.value;
    }

    return { reactiveGoal, toggleGoal, showGoal };
  },
};
</script>

<style>
html {
  font-family: sans-serif;
}
body {
  margin: 3rem;
  text-align: center;
}
</style>