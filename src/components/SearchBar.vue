<script setup>
  import {ref} from 'vue';

  const inputText = ref('');
  const emits = defineEmits(['onSearchCity'])
</script>

<template>
  <div class="search-bar">
    <form @submit.prevent>
      <div class="form-group">
        <input @input="inputText = $event.target.value" type="text" placeholder="지역 검색">
        <button @click="$store.commit('onSearchCity', inputText);
                        $store.dispatch('getWeather')">
          <font-awesome-icon :icon="['fas', 'magnifying-glass']"></font-awesome-icon>
        </button>
      </div>
    </form>
  </div>
</template>

<style lang="scss" scoped>
.search-bar {
  //padding: 8px 20px;
  border-radius: 40px;
  background: #fff;
  border: 1px solid #ccc;
  padding: 0 20px;
  margin: 1em 1em;
  form {
    .form-group {
      display: flex;
      input {
        width: 100%;
        border: none;
        padding: 1em 0;
        font-size: 16px;
        outline: none;

      }
      button {
        background: transparent;
        border: none;
        &:hover { cursor: pointer; }
        .icon { font-size: 24px; }
      }
    }
  }
}
</style>