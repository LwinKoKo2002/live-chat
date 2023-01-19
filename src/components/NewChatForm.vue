<template>
  <form>
    <textarea
      v-model="message"
      placeholder="Please hit enter to send a message."
      @keypress.enter="submitMessage"
    ></textarea>
  </form>
</template>

<script>
import { ref } from "@vue/reactivity";
import getUser from "../composables/getUser";
import { timestamp } from "@/firebase/config";
import useCollections from "../composables/useCollections";
export default {
  setup() {
    let message = ref("");
    let { user } = getUser();
    let { addDoc } = useCollections("messages");
    let submitMessage = async () => {
      let chat = {
        name: user.value.displayName,
        message: message.value,
        created_at: timestamp,
      };
      await addDoc(chat);
      message.value = "";
    };
    return { message, submitMessage };
  },
};
</script>

<style>
form {
  margin: 10px;
}
textarea {
  border: 0;
  outline: none;
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
  padding: 20px 10px;
  border-radius: 20px;
}
</style>