<script>
import RestaurantList from '../components/RestaurantList.vue';

export default {
    name: "TypeRestaurantsPage",
    data() {

        return {


        };

    },
    components: {
        RestaurantList,

    }
}
</script>

<template>
    <RestaurantList typeOfRequest="by_type" />
</template>

<style lang="scss" scoped>
//SCSS
</style>