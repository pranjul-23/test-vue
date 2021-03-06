<template>
  <div class="card">
    <h3>{{user.name}}</h3>
    <div>Email: {{user.email}}</div>
    <div>Phone: {{user.phone}}</div>
    <div>Company: {{user.company.name}}</div>
  </div>
</template>
<script src="./js/card.js"></script>
<style lang="scss" scoped>
  .card {
    width: 230px;
    background: #dddddd;
    border-radius: 4px;
    text-align: center;
    padding: 10px 6px;
    box-sizing: border-box;
    margin: 0 10px 10px 10px;
  }
</style>
