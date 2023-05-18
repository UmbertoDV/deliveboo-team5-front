<script>
import axios from "axios";
import AppHeader from './AppHeader.vue';
import DishCard from './DishCard.vue';

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

        fetchDishes(endpoint = null) {
            if (!endpoint) endpoint = 'http://127.0.0.1:8000/api/restaurants/${this.$route.params.id}';

            axios
                .get(`http://127.0.0.1:8000/api/restaurants/${this.$route.params.id}`)
                .then((response) => {
                    this.restaurants.list = response.data.data;
                    this.restaurants.pages = response.data.links;
                    console.log(response.data);
                })

        }
    },

    created() {

        this.fetchDishes();
    },


}
</script>

<template>
    <div v-if="restaurants.list.length">
        <div v-for="dish in restaurants.list.dishes" class="card" style="width: 18rem;">
            <img :src="dish.image" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">{{ dish.name }}</h5>
                <p class="card-text">{{ dish.address }}</p>
                <p class="card-text">{{ dish.description }}</p>
                <a href="#" class="btn btn-primary">Vedi il Menu</a>
            </div>
        </div>
    </div>
    <h2 v-else> Non ci sono piatti</h2>
</template>

<style lang="scss" scoped>
//SCSS
</style>