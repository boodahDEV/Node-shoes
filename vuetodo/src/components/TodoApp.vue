<template>
  <div>
      <h1>ToDo v0.1</h1>
      <todo-form></todo-form>
      <todo-list/>
  </div>
</template>

<script>
import { provide, ref, watchEffect } from 'vue'
import TodoForm from "./TodoForm.vue"
import TodoList from './TodoList.vue'
export default {
    name:"TodoApp",
    components:{
        TodoForm,
        TodoList
    },
    setup(){
        const todos = ref([])
        provide("todos", todos)

        if(localStorage.getItem("todos")){
            todos.value = JSON.parse(localStorage.getItem("todos"))
        }

        watchEffect(()=>{
           localStorage.setItem('todos',JSON.stringify(todos.value))

        })
    }
}
</script>

<style>

</style>