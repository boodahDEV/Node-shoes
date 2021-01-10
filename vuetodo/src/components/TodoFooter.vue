<template>
  <li class="list-group-item d-flex justify-content-between align-item-center">
    <span role="button"> {{contador}} Activos </span>
    <span role="button" @click="Eliminar()"> Eliminar completados </span>
  </li>
</template>

<script>
import { computed, inject } from 'vue';
export default {
  name: "TodoFooter",
  setup(){
      const todos = inject("todos")
      const contador = computed(()=>{
          return todos.value.filter(item => item.estado == false).length
      })

      const Eliminar = ()=>{
        todos.value = todos.value.filter(item => item.estado === false)
      }

      return {
          contador,
          Eliminar
      }
  }
};
</script>

<style>
</style>