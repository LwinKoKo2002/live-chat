<template>
  <h1>Signup Form</h1>
  <form @submit.prevent="signUp">
    <input
      type="text"
      placeholder="Your Display Name"
      v-model="displayName"
      required
    />
    <input type="email" placeholder="Your Email" v-model="email" required />
    <input
      type="password"
      placeholder="Your Password"
      v-model="password"
      required
    />
    <div v-if="error" class="error">{{ error }}</div>
    <button>SignUp</button>
  </form>
</template>

<script>
import { ref } from "@vue/reactivity";
import useSignUp from "../composables/useSignUp";
export default {
  setup(props, context) {
    let displayName = ref("");
    let email = ref("");
    let password = ref("");
    let { error, createAccount } = useSignUp();
    let signUp = async () => {
      let res = await createAccount(
        email.value,
        password.value,
        displayName.value
      );
      if (res) {
        context.emit("enterChatRoom");
      }
    };
    return { displayName, email, password, error, signUp };
  },
};
</script>

<style>
</style>