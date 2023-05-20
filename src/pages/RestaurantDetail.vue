<script>
import axios from 'axios';
import { useCartStore } from "../store/cart";
export default {
    name: 'Homepage',
    data() {
        return {
            store: useCartStore(), //initialize the store
            restaurant: [],
            link: ''
        }
    },
    created() {
        console.log(this.store.dishes)
        axios.get('http://127.0.0.1:8000/api/restaurants/' + this.$route.params.id)
            .then((response) => this.restaurant = response.data)
    },
    methods: {
    }
}
</script>
<template>
    <div>
        {{ restaurant.name_restaurant }} <br>
        {{ restaurant.address }} <br>
        {{ restaurant.phone_number }} <br>
        <img :src="restaurant.image" alt="">
    </div>


    <div class="container-fluid">

        <div class="row row-cols-4 gap-3 px-2 d-flex justify-content-center mt-5">
            <div class="card" style="width: 18rem;" v-for="dish in restaurant.dishes">
                <img :src="'http://127.0.0.1:8000/storage/' + dish.image" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">{{ dish.name }}</h5>
                    <p class="card-text">{{ dish.address }}</p>
                    <p class="card-text">{{ dish.description }}</p>
                    <div>{{ dish.price }}</div>

                    <span class="btn btn-primary" @click="store.addDish(dish)">Aggiungi al carrello</span>
                </div>
            </div>
        </div>
    </div>
</template>