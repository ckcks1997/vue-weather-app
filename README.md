# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Vue - Official](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (previously Volar) and disable Vetur


## 배운것
- 컴포넌트간 통신은 emit, ref를 통해 값을 전달했지만
앱이 커질수록 상태관리가 어려우므로 전역 상태관리가 가능한 Vuex를 통해 상태관리가 가능하다.
- state, mutations, actions 3가지로 나뉘는데 
state는 상태 데이터, mutation은 상태를 변경하는 함수, actions는 비동기 동작을 정의하는데 사용한다.
- mutation에 있는 함수를 호출할 떄는 $store.commit(), actions에 있는 함수는 $store.dispatch()를 이용한다.