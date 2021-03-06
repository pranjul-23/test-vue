<template>
  <div class="record">
    <card
      v-for="user in userList"
      :key="user.id"
      :user="user"
    />
  </div>
</template>
<script src="./js/record.js"></script>
<style lang="scss" scoped>
  .record {
    padding: 20px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
</style>
