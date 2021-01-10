<template>
  <div>
    <ul class="list-group">
      <todo-item v-for="item of valores" :key="item.id" :item="item" />
      <li v-if="valores.length == 0" class="list-group-item">
        No hay ToDos...
      </li>
      <todo-footer v-if="valores.length !== 0" />
      <todo-filter />
    </ul>
  </div>
</template>

<script>
import { computed, inject, provide, ref } from "vue";
import TodoItem from "./TodoItem.vue";
import TodoFooter from "./TodoFooter.vue";
import TodoFilter from "./TodoFilter.vue";
export default {
  components: { TodoItem, TodoFooter, TodoFilter },
  name: "TodoList",
  setup() {
    const valoresTodos = inject("todos");
    const estado = ref("all");
    const valores = computed(() => {
      if (estado.value === "all") return valoresTodos.value;
      if (estado.value === "active")
        return valoresTodos.value.filter((item) => item.estado === false);
      if (estado.value === "complete")
        return valoresTodos.value.filter((item) => item.estado === true);
    });

    provide("estado", estado);
    return {
      valores,
    };
  },
};
</script>

<style>
</style>