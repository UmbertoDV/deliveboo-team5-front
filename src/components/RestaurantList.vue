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
                    console.log(response.data);
                })

        }
    },

    created() {
        this.fetchRestaurants();
    },


}
</script>

<template>
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


    </ul>
</template>

<style lang="scss" scoped>
//SCSS
</style>