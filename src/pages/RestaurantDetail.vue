<script>
import axios from "axios";

export default {

    data() {
        return {
            restaurant: null

        };

    },

    created() {
        // genero un url dinamico che mi restituisce il post in base al suo ID
        axios.get(`http://127.0.0.1:8000/api/restaurants/${this.$route.params.id}`)
            .then((response) => {
                this.restaurant = response.data;
                console.log(response);

            })
    },

    components: {
       

    }
}
</script>

<template>
    <div class="card" style="width: 18rem;">
            <img :src=" restaurant.image" class="card-img-top" alt="...">
            <div v-for="dish in restaurant.dishes">
                <p>{{ dish.name }}</p>
                <p>{{ dish.price }}</p>
                <img :src="'http://127.0.0.1:8000/storage/' + dish.image" alt="">
            </div>
            <div class="card-body">
                <h5 class="card-title">{{ restaurant.name_restaurant }}</h5>
                <p class="card-text">{{ restaurant.address }}</p>
                <p class="card-text">{{ restaurant.description }}</p>
            </div>
        </div>
</template>

<style lang="scss" scoped>
//SCSS
</style>