<script>
import axios from "axios";
import { useCartStore } from "../store/cart";
export default {
  name: "Homepage",
  data() {
    return {
      store: useCartStore(), //initialize the store
      restaurant: [],
      link: "",
      myIndex: [],
      isLoading: false,
      currentRest: null,
      showAlert: null,
    };
  },
  created() {
    this.fetchRest();
  },

  computed: {
    myIndex() {
      for (let i = 0; i > this.restaurant.dishes.length; i++) {
        n = 1;
        this.currentRest = this.store.currentRestaurant;
        this.myIndex.push(n);
        return this.myIndex.push(n);
      }
      console.log("****" + this.myIndex);
    },

    show() {
      this.showAlert = this.store.showAlert;
    },
  },

  methods: {
    fetchRest() {
      this.isLoading = true;
      console.log(this.store.dishes);
      axios
        .get("http://127.0.0.1:8000/api/restaurants/" + this.$route.params.id)
        .then((response) => {
          this.restaurant = response.data;
        })
        .finally(() => {
          this.isLoading = false;
        });
    },
  },
};
</script>
<template>
  <!-- ALERT -->
  <!-- <div class="position-relative">
    <div
      :class="alertClasses"
      role="alert"
      v-if="showAlert == true"
      class="d-flex position-absolute card"
    ></div>
    <h2 class="alert-heading">Non puoi ordinare da due ristoranti diversi!</h2>
  </div> -->
  <AppLoader v-if="isLoading" />
  <div class="position d-flex justify-content-center all-contain">
    <div class="form-contain-dish">
      <div class="jumbo d-flex">
        <div class="jmb-child d-flex gap-3">
          <img :src="restaurant.image" alt="" />
          <div class="d-flex flex-column mt-4 gap-2 rest-text">
            <div
              class="d-flex flex-row align-items-center icons-type gap-3 mb-2"
            >
              <img v-for="type in restaurant.types" :src="type.image" alt="" />
            </div>
            <div>{{ restaurant.name_restaurant }}</div>
            <div>Indirizzo: {{ restaurant.address }}</div>
            <div>Telefono: {{ restaurant.telephone }}</div>
            <div>Email: {{ restaurant.telephone }}</div>
          </div>
        </div>
      </div>

      <div class="container ps-0 dish-home mt-4">
        <div class="show-dishes">
          <div class="row gap-3 px-2 d-flex justify-content-center mt-5 mb-5">
            <div
              class="card gradient-2 pt-3"
              style="width: 19rem"
              v-for="(dish, index) in restaurant.dishes"
            >
              <div class="card-white">
                <div class="card-img">
                  <img
                    :src="'http://127.0.0.1:8000/storage/' + dish.image"
                    class="card-img-top"
                    alt="..."
                  />
                </div>
                <div class="card-body pt-0">
                  <h4 class="card-title tit mt-3">{{ dish.name }}</h4>
                  <p class="card-text mb-3">{{ dish.description }}</p>
                  <div class="price">{{ dish.price }} €</div>

                  <div
                    class="btn btn-violet-home mt-3 d-flex justify-content-center align-items-center gap-2"
                    @click="store.addDish(dish)"
                  >
                    Aggiungi al carrello
                    <svg
                      class="cart-icon"
                      fill="#000000"
                      width="800px"
                      height="800px"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8,3V7H21L18,17H6V4H4A1,1,0,0,1,4,2H7A1,1,0,0,1,8,3ZM6,20.5A1.5,1.5,0,1,0,7.5,19,1.5,1.5,0,0,0,6,20.5Zm9,0A1.5,1.5,0,1,0,16.5,19,1.5,1.5,0,0,0,15,20.5Z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="tk-blob d-none d-md-block" style="--time: 40s; --amount: 5">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 747.2 726.7">
            <path
              d="M539.8 137.6c98.3 69 183.5 124 203 198.4 19.3 74.4-27.1 168.2-93.8 245-66.8 76.8-153.8 136.6-254.2 144.9-100.6 8.2-214.7-35.1-292.7-122.5S-18.1 384.1 7.4 259.8C33 135.6 126.3 19 228.5 2.2c102.1-16.8 213.2 66.3 311.3 135.4z"
            ></path>
          </svg>
        </div>
        <div
          class="tk-blob b2 d-none d-md-block"
          style="--time: 90s; --amount: 5"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 747.2 726.7">
            <path
              d="M539.8 137.6c98.3 69 183.5 124 203 198.4 19.3 74.4-27.1 168.2-93.8 245-66.8 76.8-153.8 136.6-254.2 144.9-100.6 8.2-214.7-35.1-292.7-122.5S-18.1 384.1 7.4 259.8C33 135.6 126.3 19 228.5 2.2c102.1-16.8 213.2 66.3 311.3 135.4z"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  </div>
  <Footer />
</template>

<style scoped>
.position-absolute {
  top: 40%;
}
.price {
  height: 40px;
}
.tit {
  height: 70px;
  display: inline-block;
}
.jumbo {
  width: 100vw;
  height: 300px;
  border-radius: 1rem;
  margin-bottom: 13rem;
}

.jumbo {
  background: rgba(255, 255, 255, 0.25);
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.125);
  border-radius: 1rem;
  /* background-color: #E9511D; */
  position: relative;
  box-shadow: 0px 0.7px 3.6px rgba(0, 0, 0, 0.042),
    0px 1.9px 10px rgba(0, 0, 0, 0.06), 0px 4.5px 24.1px rgba(0, 0, 0, 0.078),
    0px 15px 80px rgba(0, 0, 0, 0.12);
}

.jmb-child {
  position: absolute;
  height: 350px;
  width: 38%;
  min-width: 400px;
  background-color: white;
  top: 40%;
  left: 30%;
  border-radius: 1rem;
  box-shadow: 0px 0.7px 3.6px rgba(0, 0, 0, 0.042),
    0px 1.9px 10px rgba(0, 0, 0, 0.06), 0px 4.5px 24.1px rgba(0, 0, 0, 0.078),
    0px 15px 80px rgba(0, 0, 0, 0.12);
}
.jumbo img {
  height: 100%;
  width: 50%;
  object-fit: cover;
  border-radius: 1rem;
}

/* Blobz */
.tk-blob {
  position: absolute;
  width: 50%;
  height: 100%;
  top: -30%;
  left: 0;
  z-index: -1;
  fill: #f5bb00;
}

.b2 {
  bottom: 0px;
  top: 40%;
  left: 50%;
  fill: #ff4e00;
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

.row {
  position: relative;
  background: linear-gradient(
    334deg,
    rgb(185, 207, 255, 0.25),
    #5d4df5,
    rgb(247, 19, 126, 0.25)
  );
  animation: gradient-animation 6s ease infinite;
  padding: 2rem;
  border-radius: 1rem;
}

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
  height: 100px;
  font-size: 1.3rem;
  overflow: auto;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none;
}
.card-text::-webkit-scrollbar {
  display: none;
}

.card-img-top {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 1rem;
}
.card-img {
  background-color: white;
  border-radius: 1rem;
  display: flex;
  width: 280px;
  justify-content: center;
  align-items: center;
}

.home-cards {
  padding: 0px;
}

.gradient-2 {
  background: linear-gradient(
    334deg,
    rgba(252, 253, 255, 0.25),
    #c6c4d8,
    rgba(255, 235, 244, 0.25)
  );
  animation: gradient-animation 6s ease infinite;
  color: white;
  font-size: 1.5rem;
  border-radius: 1rem;
}

.rest-text {
  font-size: 1.4rem;
  font-weight: bolder;
  width: 40%;
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
