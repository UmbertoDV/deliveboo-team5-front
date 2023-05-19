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

            type: null,

        };

    },

    components: {
        AppHeader, RestaurantCard,
    },
    props: {
        typeOfRequest: String,

    },

    methods: {
        fetchRestaurants(endpoint = null) {
            if (!endpoint) endpoint = this.baseEndpoint;

            axios
                .get(endpoint)
                .then((response) => {
                    this.restaurants.list = response.data;
                    this.restaurants.pages = response.link;
                    if (response.data.type) this.type = response.data.type;
                    console.log(response.data);

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

        baseEndpoint() {
            if (this.typeOfRequest == "all")
                return "http://127.0.0.1:8000/api/restaurants";
            if (this.typeOfRequest == "by_type")
                return `http://127.0.0.1:8000/api/type/${this.$route.params.type_id}/restaurants`;
            return "http://127.0.0.1:8000/api/restaurants";
        },

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
            <router-link v-for="type in types" class="types d-flex flex-column"
                :to="{ name: 'type_restaurants', params: { type_id: type.id } }">
                <div>
                    {{ type.name }}
                </div>
                <div class="types-icon">
                    <img :src="type.image" alt="">
                </div>
            </router-link>
        </div>



        <div>
            <RestaurantCard v-for="   restaurant    in    restaurants.list   " :key="restaurant.id"
                :restaurant="restaurant" />
        </div>

        <h2> Non ci sono ristoranti </h2>
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