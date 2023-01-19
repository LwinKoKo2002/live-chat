<template>
  <div class="container">
    <NavBar></NavBar>
    <ChatWindow></ChatWindow>
    <NewChatForm></NewChatForm>
  </div>
</template>

<script>
import ChatWindow from "../components/ChatWindow";
import NewChatForm from "../components/NewChatForm";
import { watch } from "@vue/runtime-core";
import NavBar from "../components/NavBar";
import getUser from "../composables/getUser";
import { useRouter } from "vue-router";
import router from "@/router";
export default {
  components: {
    ChatWindow,
    NewChatForm,
    NavBar,
  },
  setup() {
    let route = useRouter();
    let { user } = getUser();
    watch(user, function () {
      if (!user.value) {
        router.push("/");
      }
    });
  },
};
</script>

<style>
</style>