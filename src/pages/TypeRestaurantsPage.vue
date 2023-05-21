<script>
import RestaurantList from "../components/RestaurantList.vue";
import Jumbo from "../components/Jumbo.vue";

export default {
  name: "TypeRestaurantsPage",
  data() {
    return {};
  },
  components: {
    RestaurantList,
    Jumbo,
  },
};
</script>

<template>
  <Jumbo />
  <RestaurantList typeOfRequest="by_type" />
  <Footer />
</template>

<style lang="scss" scoped>
//SCSS
</style>
