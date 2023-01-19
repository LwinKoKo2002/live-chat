<template>
  <h1>Login Form</h1>
  <form @submit.prevent="login">
    <input type="email" placeholder="Your Email" v-model="email" required />
    <input
      type="password"
      placeholder="Your Password"
      v-model="password"
      required
    />
    <div v-if="error" class="error">{{ error }}</div>
    <button>Login</button>
  </form>
</template>

<script>
import { ref } from "@vue/reactivity";
import useLogin from "../composables/useLogin";
export default {
  setup(props, context) {
    let email = ref("");
    let password = ref("");
    let { error, loginAccount } = useLogin();
    let login = async () => {
      let res = await loginAccount(email.value, password.value);
      if (res) {
        context.emit("enterChatRoom");
      }
    };
    return { email, password, error, login };
  },
};
</script>

<style>
</style>