<template>
  <div>
    <h1>Formularios VueJs</h1>
    <form>
      <b-row>
        <b-col md="3">
          <b-form-input type="text" v-model="texto" :state="comprobar">
          </b-form-input>
          <small> Minimo 3 caracteres </small>
        </b-col>
        <b-col md="3">
          <b-form-select v-model="select" :options="animales"></b-form-select>
          <small>Select: {{ select }}</small>
        </b-col>
        <b-col md="3">
          <b-form-radio-group
            v-model="radio"
            :options="animalesRadio"
          ></b-form-radio-group>
          <small>Radio: {{ radio }}</small>
        </b-col>
        <b-col md="3">
          <b-form-checkbox-group v-model="check" :options="animalesRadio"></b-form-checkbox-group>
          <small>CheckBox: {{ check }}</small>
        </b-col>
      </b-row>
    </form>
    <br />
    <p>texto: {{ texto }}</p>
  </div>
</template>

<script>
export default {
  name: "Form",
  data() {
    return {
      texto: "",
      select: null,
      radio: null,
      check: [],
      animales: [
        { value: null, text: "Seleccione un animal" },
        { value: "Perro", text: "Guau guau" },
        { value: "Gato", text: "Miau" },
        { value: "Pato", text: "Cuak Cuak" },
      ],
      animalesRadio: [
        { value: "Perro", text: "Guau guau" },
        { value: "Gato", text: "Miau" },
        { value: "Pato", text: "Cuak Cuak" },
      ],
    };
  },
  computed: {
    comprobar() {
      return this.texto.length > 2 ? true : false;
    },
  },
};
</script>