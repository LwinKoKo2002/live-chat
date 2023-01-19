<template>
  <nav v-if="user">
    <div>
      <p>Welcome {{ user.displayName }}</p>
      <p class="email">Logined as {{ user.email }}</p>
    </div>
    <button @click="logout">Logout</button>
  </nav>
</template>

<script>
import useSignOut from "../composables/useSignOut";
import getUser from "../composables/getUser";
export default {
  setup() {
    let { user } = getUser();
    let { signOut } = useSignOut();
    let logout = async () => {
      await signOut();
    };

    return { user, logout };
  },
};
</script>

<style>
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid rgba(128, 129, 129, 0.232);
}

nav p {
  font-size: 15px;
  color: rgb(128, 129, 129);
  margin-bottom: 0px;
}

nav .email {
  font-size: 16px;
}
</style>