<template>
  <div class="mt-5">
    <b-button variant="danger"> Texto </b-button>

    <b-row class="mt-5">
      <b-col cols="12" md="4">
        <b-card
          title="Card Title"
          img-src="https://picsum.photos/600/300/?image=25"
          img-top
        >
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam
            animi qui ratione corporis quae blanditiis facilis libero officiis,
            eveniet minima doloribus vel totam rerum at ab aliquid porro quam
            amet?
          </p>
          <b-button variant="dark"> Ok </b-button>
        </b-card>
      </b-col>
      <b-col cols="12" md="4">
        <b-card
          title="Card Title"
          img-src="https://picsum.photos/600/300/?image=25"
          img-top
        >
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam
            animi qui ratione corporis quae blanditiis facilis libero officiis,
            eveniet minima doloribus vel totam rerum at ab aliquid porro quam
            amet?
          </p>
          <b-button variant="dark" href="#"> Ok </b-button>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: "Card",
};
</script>