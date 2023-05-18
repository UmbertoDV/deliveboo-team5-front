<script>
import axios from "axios";
import AppHeader from './AppHeader.vue';
import RestaurantCard from './RestaurantCard.vue';

export default {

    data() {
        return {
            restaurants: {
                list: [],
                pages: [],
            },

            dishes: {
                list: [],
                pages: [],
            },

        };

    },
    components: {
        AppHeader, RestaurantCard,
    },

    methods: {
        fetchRestaurants(endpoint = null) {
            if (!endpoint) endpoint = "http://127.0.0.1:8000/api/restaurants";

            axios
                .get(endpoint)
                .then((response) => {
                    this.restaurants.list = response.data.data;
                    this.restaurants.pages = response.data.links;
                    console.log(response.data.data);
                })

        },
    },

    created() {
        this.fetchRestaurants();

    },


}
</script>

<template>
    <div v-if="restaurants.list.length">
        <RestaurantCard v-for="restaurant in restaurants.list" :key="restaurant.id" :restaurant="restaurant" />
    </div>
    <h2 v-else> Non ci sono ristoranti </h2>
</template>

<style lang="scss" scoped>
//SCSS
</style>