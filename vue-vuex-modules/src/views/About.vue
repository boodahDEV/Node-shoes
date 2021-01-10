<template>
  <div class="about">
    <h1>This is an about page</h1>

    <h2 v-for="(item, index) of tareaState" :key="index">
      {{ item }}
    </h2>
    <button @click="aumentar(1)">+</button>
    <h3>{{ contador }}</h3>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  computed: {
    ...mapState("tareas", ["tareaState"]),
    ...mapState("contador", ["contador"]),
  },
  methods: {
    ...mapMutations("contador", ["aumentar"]),
  },
};
</script>