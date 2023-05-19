<script>
import axios from "axios";

export default {

    data() {
        return {
            restaurant: [],
            cart: [],
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
    methods: {
        addItemToCart(dish){
            console.log(dish);
        }
    },
    components: {
    }
}
</script>

<template>
    <!-- Parte Info Ristorante-->
    <div class="container py-5">
        <div class="d-flex gap-5">
            <div>
                <img :src="restaurant.image" class="img-header rounded-4">
            </div>
            <div>
                <h1 class="fw-bold">{{ restaurant.name_restaurant }}</h1>
                <h2>{{ restaurant.address }}</h2>
                <p class="card-text">{{ restaurant.description }}</p>
            </div>
        </div>
    </div>

    <div class=" mt-5">
        <div class="container-fluid">
            <div class="row row-cols-4 gap-3 px-2 d-flex justify-content-center">
                <div v-for="dish in restaurant.dishes" class="show-card-dish pt-3 card rounded-4" style="width: 18rem;">
                    <img :src="'http://127.0.0.1:8000/storage/' + dish.image" alt="">
                    <div class="card-body card-dish d-flex flex-column">
                        <h5 class="card-title fw-bold">{{ dish.name }}</h5>
                        <div class="card-text pb-5">{{ dish.description }}</div>
                        <div class="footer-card mt-auto d-flex">
                            <!-- Prezzo -->
                            <div class="card-text fw-bold">{{ dish.price }}€</div>
                            <!-- Add To Card -->
                            <div class="add-to-cart ms-auto d-flex justify-content-center align-items-center text-center">
                                <div class="minus px-2 fw-bold fs-4">-</div>
                                <div class="number-quantity px-2 fw-bold fs-4">0</div>
                                <div class="plus px-2 fw-bold fs-4" v-on:click="addItemToCart(dish)">+</div>
                                <div class="icon-checkout px-2 fw-bold fs-4">
                                    <i class="bi bi-cart"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
// HOME
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css");
.add-to-cart{
    border: 2px solid #ff6150;
    border-radius: 6px;
    height: 40px;

    .icon-checkout{
        background-color: #ff6150;
        &:hover{
            cursor: default;
        }
    }
    .plus, .minus{
        &:hover{
            cursor: pointer;
        }
    }
    .plus, .number-quantity, .minus {
        line-height: 40px;
        border-right: 2px solid #ff6150;
        height: 40px;

    }
}
#Deliveboo_home {
    width: 500px;
}

.img-header{
    width: 20rem;
}
.home-logo {
    width: 350px;
    margin-bottom: 21px;
}

.homelogo-text {
    margin-bottom: 0px;
    color: #FF4E00;
    font-size: 4rem;
}

.btn-violet-home {
    background-color: #5d4df5;
    color: white;
    padding: 0.5rem 0.9rem;
    border-radius: 0.8rem;
    text-decoration: none;

    &:hover {
        background-color: #2f1be3;
        color: white;
    }
}

i {
    text-decoration: none;
    cursor: pointer;
}


.show-card-dish {
    border-color: #f8aa4b;
    border-width: 5px;
    img {
        height: 10rem;
        border-radius: 20px;
        object-fit: cover;
    }
}

.home-cards {
    padding: 0px;
}
</style>