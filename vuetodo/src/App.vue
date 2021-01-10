<template>
  <div id="app">
    <div class="container">
      <todo-app/>
    </div>
  </div>
</template>

<script>
import TodoApp from "./components/TodoApp.vue";
export default {
  name: 'App',
  components: {
    TodoApp
  }
}
</script>
