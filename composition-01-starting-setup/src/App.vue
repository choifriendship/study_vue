<template>
  <section class="container">
    <h2>{{ userName }}</h2>
    <h3>{{ uAge }}</h3>
    <button @click="setAge">Change Age</button>
    <div>
      <!-- <input type="text" placeholder="First Name" @input="setFirstName" />
      <input type="text" placeholder="Last Name" @input="setLastName" /> -->
      <input type="text" placeholder="First Name" v-model="firstName" />
      <input type="text" placeholder="Last Name" v-model="lastName" />
    </div>
  </section>
</template>

<script>
// 반응형 데이터 reactive
// ref: 객체를 포함해 다양한 값을 가질 수 있음
import { ref, computed, watch } from 'vue';

export default {
  setup() {
    const firstName = ref('');
    const lastName = ref('');
    const uAge = ref(28);
    // const user = reactive({
    //   name: 'woojeongchoi',
    //   age: 28,
    // });

    const uName = computed(function () {
      return firstName.value + ' ' + lastName.value;
    });

    // 감시 함수
    watch([uAge, uName], function (newValues, oldValues) {
      console.log('Old age: ' + oldValues[0]);
      console.log('New age: ' + newValues[0]);
      console.log('Old name: ' + oldValues[1]);
      console.log('New name: ' + newValues[1]);
    });

    function setNewAge() {
      uAge.value = 21;
    }

    // function setFirstName(event) {
    //   firstName.value = event.target.value;
    // }
    // function setLastName(event) {
    //   lastName.value = event.target.value;
    // }

    return { uAge, userName: uName, setAge: setNewAge, firstName, lastName };
  },
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