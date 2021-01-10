<template>
  <li class="list-group-item d-flex justify-content-between align-item-center">
    <span
      role="button"
      :class="{ tachado: item.estado }"
      @click="completado(item.id)"
      >{{ item.texto }}
    </span>
    <span role="button" @click="eliminar(item.id)">
      <i class="fas fa-times"></i
    ></span>
  </li>
</template>

<script>
import { inject } from "vue";
export default {
  name: "TodoItem",
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  setup() {
    const todos = inject("todos");
    const eliminar = (id) => {
      todos.value = todos.value.filter((item) => item.id !== id);
    };
    const completado = (id) => {
      todos.value = todos.value.map((item) => {
        if (item.id === id) {
          item.estado = true;
        }
        return item;
      });
    };
    return {
      eliminar,
      completado,
    };
  },
};
</script>

<style>
.tachado {
  text-decoration: line-through;
}
</style>