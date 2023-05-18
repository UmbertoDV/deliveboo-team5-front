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


            types: [],
            selectedCategories: [],

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
                    this.restaurants.list = response.data.restaurants.data;
                    this.restaurants.pages = response.data.restaurants.links;
                    console.log(response.data.data);
                })

        },

        fetchTypes(endpoint = null) {
            if (!endpoint) endpoint = "http://127.0.0.1:8000/api/types";

            axios
                .get(endpoint)
                .then((response) => {
                    this.types = response.data.types;
                    console.log(response.data.types);
                })

        },




    },

    computed: {


    },

    created() {
        this.fetchRestaurants();
        this.fetchTypes();

    },


}
</script>

<template>
    <div class="container">


        <div class="all-types d-flex mb-3 mt-5">
            <div v-for="type in types" class="types d-flex flex-column">
                <div>
                    {{ type.name }}
                </div>
                <div class="types-icon">
                    <img :src="type.image" alt="">
                </div>
            </div>
        </div>



        <div v-if="restaurants.list.length">
            <RestaurantCard v-for="   restaurant    in    restaurants.list   " :key="restaurant.id"
                :restaurant="restaurant" />
        </div>

        <h2 v-else> Non ci sono ristoranti </h2>
    </div>
</template>

<style lang="scss" scoped>
//SCSS
.types {
    width: 100%;
}

.all-types {
    overflow-y: auto;


}

.types-icon {
    width: 100%;

    img {
        width: 90px;
    }
}
</style>