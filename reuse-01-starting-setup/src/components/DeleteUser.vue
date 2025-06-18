<template>
  <user-alert v-if="alertIsVisible" :title="alertTitle" @close="hideAlert">
    <p>Do you want to continue with deleting a user?</p>
  </user-alert>
  <section>
    <h2>Delete a User</h2>
    <button @click="showAlert">Delete User</button>
  </section>
</template>

<script>
import UserAlert from './UserAlert.vue';
import alertMixin from '../mixins/alert.js';

export default {
  components: {
    UserAlert,
  },
  data() {
    return {
      // 믹스인과 내부 컴포넌트 중 내부 컴포넌트를 우선으로 병합함
      alertTitle: 'Delete User?',
      alertIsVisible: true
    }
  },
  mixins: [alertMixin],
};
</script>