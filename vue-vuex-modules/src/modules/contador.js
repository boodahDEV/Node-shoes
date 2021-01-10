export default {
    namespaced:true,
    state:{
        contador: 0
    },
    mutations:{
        aumentar(state, payload){
            state.contador = state.contador + payload
        }
    }
}