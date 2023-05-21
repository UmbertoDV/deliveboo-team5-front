<script>
export default {
  data() {
    return {};
  },
  components: {},
  props: {
    restaurant: Object,
  },
};
</script>

<template>
  <div class="card" style="width: 18rem">
    <div class="img-container">
      <img :src="restaurant.image" class="card-img-top" alt="..." />
    </div>
    <div class="card-body mt-4">
      <h5 class="card-title">{{ restaurant.name_restaurant }}</h5>
      <p class="card-text">{{ restaurant.address }}</p>
      <p class="card-text">{{ restaurant.description }}</p>
      <router-link
        :to="{ name: 'restaurant-detail', params: { id: restaurant.id } }"
        class="nav-link btn btn-violet"
        >Dettaglio</router-link
      >
    </div>
  </div>
</template>

<style lang="scss" scoped>
.img-container {
  height: 200px;
  padding-top: 1rem;
}
.card-img-top {
  width: 100%;
  object-fit: cover;
  height: 200px;
  border-radius: 1rem;
}
.card-text {
  font-size: 1.2rem;
}

//SCSS
</style>
