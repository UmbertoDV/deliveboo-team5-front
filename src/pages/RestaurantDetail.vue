<script>
import axios from 'axios';
import { useCartStore } from "../store/cart";
export default {
    name: 'Homepage',
    data() {
        return {
            store: useCartStore(), //initialize the store
            restaurant: [],
            link: '',

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
    <div class="position d-flex justify-content-center all-contain">
        <div class="form-contain-dish">
            <div class="jumbo d-flex gradient">
                <div class="jmb-child d-flex gap-3">
                    <img :src="restaurant.image" alt="">
                    <div class="d-flex flex-column mt-4 gap-2 rest-text">
                        <div class="d-flex flex-row align-items-center icons-type gap-3 mb-2">
                            <img v-for="type in restaurant.types" :src="type.image" alt="">
                        </div>
                        <div>{{ restaurant.name_restaurant }}</div>
                        <div>Indirizzo: {{ restaurant.address }}</div>
                        <div>Telefono: {{ restaurant.telephone }}</div>
                        <div>Email: {{ restaurant.telephone }}</div>

                    </div>
                </div>
            </div>



            <div class="container ps-0  dish-home">
                <div class="show-dishes">

                    <div class="row gap-3 px-2 d-flex justify-content-center mt-5 mb-5">

                        <div class="card gradient-2" style="width: 19rem;" v-for="dish, index  in   restaurant.dishes  ">
                            <div class="card-white">
                                <!-- <div class="gradient-2"></div> -->
                                <img :src="'http://127.0.0.1:8000/storage/' + dish.image" class="card-img-top mt-4"
                                    alt="...">
                                <div class="card-body">
                                    <h3 class="card-title">{{ dish.name }}</h3>
                                    <p class="card-text mb-5">{{ dish.description }}</p>
                                    <div>{{ dish.price }} €</div>

                                    <div class="btn btn-violet-home mt-3 d-flex justify-content-center align-items-center gap-2"
                                        @click="store.addDish(dish)">Aggiungi al
                                        carrello <svg class="cart-icon" fill="#000000" width="800px" height="800px"
                                            viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M8,3V7H21L18,17H6V4H4A1,1,0,0,1,4,2H7A1,1,0,0,1,8,3ZM6,20.5A1.5,1.5,0,1,0,7.5,19,1.5,1.5,0,0,0,6,20.5Zm9,0A1.5,1.5,0,1,0,16.5,19,1.5,1.5,0,0,0,15,20.5Z" />
                                        </svg>
                                    </div>

                                    <div class="d-flex gap-2 align-items-center mt-4 item-numbers">

                                        <button class="btn minus" @click="store.minusOne(dish)">-</button>

                                        <!-- TRE ORE DOPO... -->
                                        <span v-for=" dish  in  store.dishes ">
                                            <div :class="(dish.id == index + 1) ? 'wdt' : ''" v-if="dish.id == index + 1">{{
                                                dish.quantity }}</div>
                                        </span>

                                        <button button class="btn plus" @click="store.addDish(dish)">+</button>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div class="tk-blob" style="--time: 90s; --amount: 5;">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 747.2 726.7">
                        <path
                            d="M539.8 137.6c98.3 69 183.5 124 203 198.4 19.3 74.4-27.1 168.2-93.8 245-66.8 76.8-153.8 136.6-254.2 144.9-100.6 8.2-214.7-35.1-292.7-122.5S-18.1 384.1 7.4 259.8C33 135.6 126.3 19 228.5 2.2c102.1-16.8 213.2 66.3 311.3 135.4z">
                        </path>
                    </svg>
                </div>
                <div class="tk-blob b2" style="--time: 90s; --amount: 5;">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 747.2 726.7">
                        <path
                            d="M539.8 137.6c98.3 69 183.5 124 203 198.4 19.3 74.4-27.1 168.2-93.8 245-66.8 76.8-153.8 136.6-254.2 144.9-100.6 8.2-214.7-35.1-292.7-122.5S-18.1 384.1 7.4 259.8C33 135.6 126.3 19 228.5 2.2c102.1-16.8 213.2 66.3 311.3 135.4z">
                        </path>
                    </svg>
                </div>

            </div>
        </div>
    </div>
</template>

<style scoped>
/* Blobz */
.tk-blob {
    position: absolute;
    width: 100%;
    height: 100%;
    top: -30%;
    z-index: -1;
    right: 80%;
    fill: #E9511D;
}

.b2 {
    bottom: 0px;
    left: 60%;
    top: 70%;
    fill: #F5BB00;
}

/* DISHES */
.item-numbers {
    position: relative;
}

.item-numbers button,
.wdt {
    width: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
}


.card-white {
    background-color: white;
    height: 40%;
    border-bottom-left-radius: 1rem;
    border-bottom-right-radius: 1rem;
}

.row {
    position: relative;
}

/* 
.form-contain-dish {
    position: absolute;
} */

.show-card-dish {
    background: rgba(255, 255, 255, 0.25);
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.125);
    border-radius: 1rem;

}

.item-n {
    background: rgba(255, 255, 255, 0.25);
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.125);
    border-radius: 1rem;
}

.cart-icon {
    width: 30px;
    height: 30px;
    fill: white;
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

/* JUMBOTRON */
.jumbo {
    width: 100vw;
    height: 300px;
    background: rgba(255, 255, 255, 0.25);
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.125);
    border-radius: 1rem;
}

.jumbo img {
    height: 100%;
    width: 60%;
    object-fit: cover;
    border-radius: 1rem;
}

.jmb-child {
    width: 100%;
}

.home-cards {
    padding: 0px;
}

.gradient-2 {
    background: linear-gradient(334deg, rgb(185, 207, 255, 0.25), #5d4df5, rgb(247, 19, 126, 0.25));
    animation: gradient-animation 6s ease infinite;
    color: white;
    font-size: 1.5rem;

}

.rest-text {
    font-size: 1.4rem;
    font-weight: bolder;
}

.icons-type {
    width: 80px;

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


button,
.wdt {
    font-size: 1.3rem;
    background: rgba(255, 255, 255, 0.25);
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.125);
    border-radius: 1rem;
    height: 50px;

}

button:hover {
    background: rgba(189, 4, 4, 0.127);
}
</style>