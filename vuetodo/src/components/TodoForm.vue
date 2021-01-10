<template>
  <div>
      <form @submit.prevent="formulario">
          <input type="text" placeholder="Ingresa la tarea"
          class="form-control my-3"
          v-model.trim="texto"
          >
      </form>
  </div>
</template>

<script>
import { inject, ref } from 'vue'
export default {
    name:"TodoForm",
    setup(){
        const todos = inject('todos')
        const texto = ref("")

        const formulario = ()=>{
            if(texto.value === ""){
                console.log("vacio")
                return 
            }
            const todo = {
                texto: texto.value,
                estado: false,
                id: Date.now()
            }
            todos.value.push(todo)
            texto.value = ""
        }

        return {
            formulario,
            texto
        }
    }
}
</script>

<style>

</style>