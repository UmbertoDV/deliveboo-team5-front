<script>
import axios from "axios";
import AppHeader from './AppHeader.vue';

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
        AppHeader,
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
        fetchDishes(endpoint = null) {
            if (!endpoint) endpoint = "http://127.0.0.1:8000/api/dishes";

            axios
                .get(endpoint)
                .then((response) => {
                    this.dishes.list = response.data.data;
                    this.dishes.pages = response.data.links;
                    console.log(response.data.data);
                })

        }
    },

    created() {
        this.fetchRestaurants();
        this.fetchDishes();
    },


}
</script>

<template>
    <div v-if="restaurants.list.length">
        <ul>
            <li v-for="restaurant in restaurants.list">
                {{ restaurant.name_restaurant }}
            </li>
            <li v-for="restaurant in restaurants.list">
                {{ restaurant.description }}
            </li>
            <li v-for="restaurant in restaurants.list">
                {{ restaurant.address }}
            </li>

            <li v-for="restaurant in restaurants.list">
                <img :src="restaurant.image" alt="">
            </li>
        </ul>
        <ul v-for=" restaurant  in  restaurants.list ">
            <li v-for=" type  in  restaurant.types "> {{ type.name }}</li>
            <li v-for=" type  in  restaurant.types ">
                <img :src="type.image" alt="">
            </li>
        </ul>

        <ul v-for="dish in  dishes.list">
            <li> {{ dish.name }}</li>
            <li> <img :src="dish.image" alt=""> </li>
        </ul>
    </div>

    <h2 v-else> Non ci sono ristoranti </h2>
</template>

<style lang="scss" scoped>
//SCSS
</style>