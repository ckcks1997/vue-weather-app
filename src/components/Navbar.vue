<script setup>

</script>

<template>
  <nav class="navbar">
    <button class="toggle">toggle</button>
    <font-awesome-icon class="icon" :icon="['fas', 'bars-staggered']"/>
  </nav>
</template>

<style scoped lang="scss">
  .navbar{
    background: #fff;
    width: 100%;
    padding:20px;
    display: flex;
    justify-content: end;

    button{
      border:none;
      background: transparent;
      cursor: pointer;
    }
    .icon{
      color: #333;
      font-size: 24px;
    }
  }
</style>