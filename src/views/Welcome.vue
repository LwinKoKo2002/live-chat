<template>
  <div class="welcome container">
    <div v-if="showLoginForm">
      <Login @enterChatRoom="enterChatRoom"></Login>
      <p>
        Not a member? Please
        <span @click="showLoginForm = !showLoginForm">register</span>
      </p>
    </div>
    <div v-else>
      <SignUp @enterChatRoom="enterChatRoom"></SignUp>
      <p>
        Already member? Please
        <span @click="showLoginForm = !showLoginForm">login</span>
      </p>
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import Login from "../components/Login";
import SignUp from "../components/SignUp";
import { useRouter } from "vue-router";
export default {
  components: {
    Login,
    SignUp,
  },
  setup() {
    let showLoginForm = ref(true);
    let router = useRouter();
    let enterChatRoom = () => {
      router.push({ name: "ChatRoom" });
    };
    return { showLoginForm, enterChatRoom };
  },
};
</script>

<style>
.welcome {
  padding: 20px;
  text-align: center;
}

.welcome form {
  width: 400px;
  max-width: 400px;
  margin: 20px auto;
}

.welcome h1 {
  margin-bottom: 40px;
}
.welcome input {
  display: block;
  width: 100%;
  max-width: 100%;
  padding: 13px;
  margin-bottom: 40px;
  outline: none;
  border-radius: 20px;
  border: 1px solid rgba(158, 157, 157, 0.732);
}
.welcome p {
  font-size: 16px;
  margin-top: 40px;
  letter-spacing: 0.5px;
}

.welcome span {
  text-decoration: underline;
  cursor: pointer;
}

@media screen and (max-width: 480px) {
  .welcome input {
    display: block;
    width: 100%;
    max-width: 320px;
    padding: 13px;
    margin-bottom: 40px;
    outline: none;
    border-radius: 20px;
    border: 1px solid rgba(158, 157, 157, 0.732);
  }
}
</style>