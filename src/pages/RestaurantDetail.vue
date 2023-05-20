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
    <div class="container position d-flex justify-content-center">
        <div class="form-contain-dish mt-5">
            <div class="jumbo d-flex gradient">
                <div class="d-flex gap-3">
                    <img :src="restaurant.image" alt="">
                    <div class="d-flex flex-column mt-4 gap-2">
                        <div>{{ restaurant.name_restaurant }}</div>
                        <div>Indirizzo: {{ restaurant.address }}</div>
                        <div>Telefono: {{ restaurant.telephone }}</div>
                        <div>Email: {{ restaurant.telephone }}</div>
                    </div>
                </div>
            </div>



            <div class="container-fluid ps-0  dish-home">
                <div class="show-dishes">

                    <div class="row row-cols-4 gap-3 px-2 d-flex justify-content-center mt-5 mb-5">
                        <div class="card" style="width: 18rem;" v-for="dish in restaurant.dishes">
                            <img :src="'http://127.0.0.1:8000/storage/' + dish.image" class="card-img-top mt-4" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">{{ dish.name }}</h5>
                                <p>{{ dish.address }}</p>
                                <p class="card-text">{{ dish.description }}</p>
                                <div>{{ dish.price }} €</div>

                                <div class="btn btn-violet-home mt-3 d-flex justify-content-center align-items-center gap-2"
                                    @click="store.addDish(dish)">Aggiungi al
                                    carrello <svg fill="#000000" width="800px" height="800px" viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M8,3V7H21L18,17H6V4H4A1,1,0,0,1,4,2H7A1,1,0,0,1,8,3ZM6,20.5A1.5,1.5,0,1,0,7.5,19,1.5,1.5,0,0,0,6,20.5Zm9,0A1.5,1.5,0,1,0,16.5,19,1.5,1.5,0,0,0,15,20.5Z" />
                                    </svg></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- <div class="gradient"></div> -->
</template>

<style scoped>
.form-contain-dish {
    position: absolute;
}

.show-card-dish {
    background: rgba(255, 255, 255, 0.25);
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.125);
    border-radius: 1rem;

}

svg {
    width: 30px;
    height: 30px;
}

.icon-show-dish a,
i {
    color: #2f1be3;
    font-size: 1rem;

}

.btn-violet-home {
    background-color: #5d4df5;
    color: white;
    padding: 0.5rem 0.9rem;
    border-radius: 0.8rem;
    text-decoration: none;

}

.btn-violet-home:hover {
    background-color: #2f1be3;
    color: white;
}



.card-text {
    height: 40px;
}

.card img {

    width: 250px;
    height: 250px;
    object-fit: contain;

}

.jumbo {
    width: 100%;
    height: 300px;
    background: rgba(255, 255, 255, 0.25);
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.125);
    border-radius: 1rem;
}

.jumbo img {
    height: 100%;
    object-fit: cover;
}

.home-cards {
    padding: 0px;
}


.gradient {

    background: linear-gradient(334deg, #b9cfff, #5d4df5, #f7137e);
    background-size: 180% 180%;
    animation: gradient-animation 6s ease infinite;
    color: white;
    font-size: 1.5rem;
}

@keyframes gradient-animation {
    0% {
        background-position: 0% 50%;
    }

    80% {
        background-position: 100% 50%;
    }

    100% {
        background-position: 0% 50%;
    }
}

.position {
    position: relative;
}
</style>