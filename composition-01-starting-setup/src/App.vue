<template>
  <section class="container">
    <h2>{{ user.name }}</h2>
    <h3>{{ user.age }}</h3>
    <button @click="setAge">Change Age</button>
  </section>
</template>

<script>
// 반응형 데이터 reactive
// ref: 객체를 포함해 다양한 값을 가질 수 있음
import { reactive } from 'vue';

export default {
  setup() {
    // const uName = ref('woojeongchoi');
    // const uAge = ref(31);
    const user = reactive({
      name: 'woojeongchoi',
      age: 28,
    });

    function setNewAge() {
      user.age = 21;
    }

    // setTimeout(function () {
    //   // uName.value = 'friendship';
    //   // uAge.value = 21;
    //   // user.value.name = 'friendship';
    //   // user.value.age = 21;
    //   user.name = 'friendship';
    //   user.age = 21;
    // }, 2000);

    return { user: user, setAge: setNewAge };
  },
  // data() {
  //   return {
  //     userName: 'Maximilian',
  //   };
  // },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}

.container {
  margin: 3rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  text-align: center;
}
</style>