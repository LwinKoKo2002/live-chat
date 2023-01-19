<template>
  <div class="chat-window">
    <div class="messages" ref="msgBox">
      <div class="single" v-for="msg in formattedMessages" :key="msg.id">
        <span class="time">{{ msg.created_at }}</span>
        <span>{{ msg.name }}</span>
        <span>{{ msg.message }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { db } from "@/firebase/config";
import { ref } from "@vue/reactivity";
import { computed, onUpdated } from "@vue/runtime-core";
import { formatDistanceToNow } from "date-fns";
export default {
  setup() {
    let messages = ref([]);
    let msgBox = ref(null);
    onUpdated(() => {
      msgBox.value.scrollTop = msgBox.value.scrollHeight;
    });
    db.collection("messages")
      .orderBy("created_at")
      .onSnapshot((snap) => {
        let result = [];
        snap.docs.forEach((doc) => {
          let document = { id: doc.id, ...doc.data() };
          document.created_at && result.push(document);
        });
        messages.value = result;
      });
    let formattedMessages = computed(() => {
      return messages.value.map((message) => {
        let formatDate = formatDistanceToNow(message.created_at.toDate());
        return { ...message, created_at: formatDate };
      });
    });

    return { messages, formattedMessages, msgBox };
  },
};
</script>

<style>
.chat-window {
  padding: 20px;
  border-bottom: 1px solid rgba(128, 129, 129, 0.232);
}

.messages {
  max-height: 400px;
  overflow: auto;
}

.single {
  margin-bottom: 30px;
}

.single .time {
  display: block;
  margin-bottom: 10px;
  color: rgb(156, 155, 155);
}

.single span {
  margin-right: 20px;
  color: rgba(63, 63, 63, 0.821);
}
</style>