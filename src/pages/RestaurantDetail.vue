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
    <div class=" mt-5">
        <div class="">

            <div class="row row-cols-4 gap-3 px-2 d-flex justify-content-center">
                <div v-for="dish in restaurant.dishes" class="show-card-dish card" style="width: 18rem;">
                    <img :src="'http://127.0.0.1:8000/storage/' + dish.image" alt="">
                    <div class="card-body card-dish">
                        <h5 class="card-title">{{ dish.name }}</h5>
                        <p class="card-text">{{ dish.description }}</p>
                        <p class="card-text">{{ dish.price }}€</p>
                        <div class="icon-show-dish">
                            <a href=""> Modifica <i class="fa-solid fa-pen mt-2 mb-4"></i></a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<style lang="scss" scoped>
// HOME
#Deliveboo_home {
    width: 500px;
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

.image-upload {
    img {
        width: 100%;
        object-fit: contain;
        outline-offset: 4px;
        outline: 1px solid #5d4df5;
        border-radius: 20px;
    }
}

i {
    text-decoration: none;
    cursor: pointer;
}

.card-text {
    height: 80px;
}

.show-card-dish {
    img {
        width: 250px;
        height: 200px;
        object-fit: cover;
    }
}

.home-cards {
    padding: 0px;
}
</style>