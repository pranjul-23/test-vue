<template>
  <div class="user">
    <span>User Name: {{username}}</span><br>
    <button @click="showAlert">Try me</button>
    <alert ref="alert">
        <h3>Alert</h3>
        <div>
            <button @click="hideAlert">Ok</button>
        </div>
    </alert>
  </div>
</template>

<script src="./js/user.js"></script>
<style lang="scss" scoped>
  .user {
    font-size: 18px;
    text-align: center;
  }
</style>
