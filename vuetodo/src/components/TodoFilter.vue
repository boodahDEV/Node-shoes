<template>
  <div class="card mt-3">
    <div class="card-body d-flex justify-content-between align-item-center">
      <span role="button" @click="filtrar('active')">Activos</span>
      <span role="button" @click="filtrar('all')">Todos</span>
      <span role="button" @click="filtrar('complete')">completados</span>
    </div>
  </div>
</template>

<script>
import { inject } from "vue";
export default {
  name: "TodoFilter",
  setup() {
    const estado = inject("estado");
    const filtrar = (valor) => {
      estado.value = valor;
    };
    return {
      filtrar,
    };
  },
};
</script>

<style>
</style>