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

        leftScroll() {
            const right = document.querySelector(".scroll-images");
            right.scrollBy(-200, 0);
        },
        rightScroll() {
            const left = document.querySelector(".scroll-images");
            left.scrollBy(200, 0);
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
        <div class="all-types mb-3 mt-5 cover">
            <button class="left-1 arrowleft" @click="leftScroll" @mouseover="leftScroll()">
                <span></span>
                <span></span>
                <span></span>
            </button>

            <div class="scroll-images pe-5 d-flex">
                <router-link v-for="type  in types" class="types"
                    :to="{ name: 'type_restaurants', params: { type_id: type.id } }" @click="fetchRestaurants()">
                    <div class="d-flex flex-column align-items-center">
                        <div class="types-icon">
                            <img :src="type.image" alt="" class="child-image">
                        </div>
                        <div class="mt-3 text">
                            <span>{{ type.name }}</span>
                        </div>
                    </div>
                </router-link>
            </div>

            <button class="right-1 arrowright" @click="rightScroll">
                <span></span>
                <span span> </span>
                <span span> </span>
            </button>

            <div div class=" container">
                <h2 v-if="typeOfRequest == 'all'">Tutti i ristoranti</h2>
                <div v-else v-for="restaurant in restaurants.list" class="d-flex gap-3 align-items-center mt-5 mb-3">
                    <h1>Ecco i ristoranti del tipo</h1><img :src="type.image" v-for="type in restaurant.types"
                        class="icons" />
                </div>
                <div v-if="restaurants.list.length" class="row row-cols- gap-3 justify-content-center mt-5">
                    <RestaurantCard v-for="   restaurant    in    restaurants.list   " :key="restaurant.id"
                        :restaurant="restaurant" />
                </div>

                <h2 v-else> Non ci sono ristoranti </h2>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.icons {
    width: 60px;
}

.all-types {
    height: 140px;
}

.types {
    text-decoration: none;
    font-weight: bold;
    color: #5d4df5;
}

.types-icon {
    width: 100%;

    img {
        width: 80px;
    }

    .text {
        font-size: 1rem;


    }
}

// 
.scroll-images {
    width: 100%;
    height: auto;
    display: flex;
    flex-wrap: nowrap;
    overflow-x: auto;
    overflow-y: hidden;
    overflow: hidden;
    scroll-behavior: smooth;
    -webkit-overflow-scrolling: touch;
    gap: 1.9rem;
}

.child {
    width: 120px;
    height: 100px;
    margin: 1px 10px;
    overflow: hidden;
}

// 
.cover {
    padding: 0px 30px;
    position: relative;
}

.left-1 {
    position: absolute;
    left: -45px;
    top: 50%;
    transform: translateY(-50%);
}

.right-1 {
    position: absolute;
    right: -40px;
    top: 50%;
    transform: translateY(-50%);
}

//animation arrow
.arrowleft {
    position: absolute;
    top: 25%;
    transform: translate(-50%, -50%);
    transform: rotate(90deg);
    cursor: pointer;
}

.arrowright {
    position: absolute;
    top: 25%;
    transform: translate(-50%, -50%);
    transform: rotate(-90deg);
    cursor: pointer;
}

.arrowright span {
    display: block;
    width: 1.5vw;
    height: 1.5vw;
    border-bottom: 5px solid #E9511D;
    border-right: 5px solid #E9511D;
    transform: rotate(45deg);
    margin: -10px;
    animation: animate 2s infinite;
}

.arrowright span:nth-child(2) {
    animation-delay: -0.2s;
}

.arrowright span:nth-child(3) {
    animation-delay: -0.4s;
}

.arrowleft span {
    display: block;
    width: 1.5vw;
    height: 1.5vw;
    border-bottom: 5px solid #E9511D;
    border-right: 5px solid #E9511D;
    transform: rotate(45deg);
    margin: -10px;
    animation: animate 2s infinite;
}

.arrowleft span:nth-child(2) {
    animation-delay: -0.2s;
}

.arrowleft span:nth-child(3) {
    animation-delay: -0.4s;
}

@keyframes animate {
    0% {
        opacity: 0;
        transform: rotate(45deg) translate(-20px, -20px);
    }

    50% {
        opacity: 1;
    }

    100% {
        opacity: 0;
        transform: rotate(45deg) translate(20px, 20px);
    }
}

button {
    background-color: transparent;
    border: none;
}

img:nth-child(10) {
    width: 20px;
}
</style>