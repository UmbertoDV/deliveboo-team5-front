<script>
import axios from "axios";
import { useCartStore } from "../store/cart.js";
export default {
  data() {
    return {
      store: useCartStore(),
      isVisible: 0,
      currentRest: null,
    };
  },

  methods: {
    sendCart() {
      // axios
      //   .post("http://127.0.0.1:8000/api/orders", {
      //     cart: this.store.dishes,
      //   })
      //   .then((response) => console.log(response));
    },
    toggleCart() {
      this.isVisible == 1 ? (this.isVisible = 0) : (this.isVisible = 1);
    },

    filterResult(restaurant_id) {
      this.currentRest = this.store.currentRestaurant;

      if (this.currentRest != restaurant_id) {
        return this.store.dishes;
      }
      // return this.store.dishes.filter(
      //   (dish) => dish.restaurant_id === restaurant_id
      // );
    },
  },
  computed: {
    calcolaNumeroElementi() {
      let numeroElementi = 0;
      for (let i = 0; i < this.store.dishes.length; i++) {
        const dish = this.store.dishes[i];
        numeroElementi += dish.quantity;
      }
      return numeroElementi;
    },
  },

  emits: ["sendData"],
};
</script>
<template>
  <div class="cart">
    <div class="position-relative">
      <div class="position-absolute number-items">
        {{ calcolaNumeroElementi }}
      </div>
    </div>
    <button class="btn" @click="toggleCart()">
      <svg
        class="cart-nav"
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
    </button>
    <div class="cart-popover" :class="{ 'd-none': !isVisible }">
      <div class="d-flex justify-content-between align-items-center">
        <h3>Carrello</h3>
        <button class="btn btn-violet" @click="isVisible = 0">x</button>
      </div>

      <div class="d-flex flex-column gap-3 mt-3">
        <div
          v-for="dish in this.store.dishes"
          class="d-flex gap-2 align-items-center items p-2"
        >
          <div class="flex-grow-1 name">
            {{ dish.name }}
          </div>
          <div class="d-flex gap-2 align-items-center justify-content-center">
            <button class="btn minus bnts" @click="store.minusOne(dish)">
              -
            </button>
            <div class="quantity-n btns">
              {{ dish.quantity }}
            </div>
            <button class="btn plus btns" @click="store.moreOne(dish)">
              +
            </button>
            <span class="total-n ms-3">
              {{ (dish.price * dish.quantity).toFixed(2) }}€
            </span>
          </div>
        </div>
      </div>
      <div
        class="d-flex align-items-center justify-content-between"
        v-if="this.store.dishes.length"
      >
        <div class="d-flex">
          <button @click="store.deleteCart" class="btn btn-violet me-2 annulla">
            Annulla Ordine
          </button>
          <router-link
            :to="{ name: 'checkout' }"
            class="btn btn-violet me-5 router p-3"
          >
            Checkout
          </router-link>
        </div>

        <span class="total-n me-2"
          >Total: {{ parseFloat(store.totalPrice).toFixed(2) }}€</span
        >
      </div>
      <div v-else class="mt-2">
        <h2>Il carrello è vuoto!</h2>
        <!-- ANIMAZIONE CARRELLO -->
        <div class="container-2 mt-3">
          <div class="sun"></div>

          <div class="bumps">
            <div class="inner">
              <div class="bump"></div>
              <div class="bump"></div>
              <div class="bump"></div>
              <div class="bump"></div>
            </div>
          </div>

          <div class="character">
            <div class="head">
              <div class="eye"></div>
              <div class="eye"></div>
              <div class="mouth">
                <svg class="mouth-shadow" viewbox="0 0 140 70">
                  <path
                    d="M0.719238 10.072C0.593337 9.19833 0.90809 11.3826 0.902179 11.3388C0.171209 5.92824 5.26432 0.0485929 10.7239 0.000389747C10.768 0 9.65972 0 10.103 0C10.7062 0 11.0078 0 11.0427 0.000243102C16.4269 0.037787 19.5259 2.52743 20.7228 7.77705C20.7305 7.81105 20.8785 8.48175 21.1745 9.82315C26.1201 32.2342 46.1021 49 70 49C93.8979 49 113.88 32.2342 118.825 9.82314C119.121 8.48175 119.269 7.81105 119.277 7.77706C120.474 2.52743 123.573 0.0377857 128.957 0.000243085C128.992 0 129.294 0 129.897 0C130.34 0 129.232 0 129.276 0.00038972C134.736 0.0485912 139.829 5.92824 139.098 11.3388C139.092 11.3826 139.407 9.19831 139.281 10.072C134.398 43.9598 105.24 70 70 70C34.7603 70 5.6025 43.9598 0.719238 10.072Z"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.annulla {
  padding: 1.8rem;
  display: flex;
  align-items: center;
  font-size: 1.1rem;
}
.router {
  font-size: 1.1rem;
}
.btns {
  width: 40px;
  color: white;
  font-size: 1.5rem;
}
.name {
  font-size: 1.5rem;
  padding-left: 1rem;
}
.number-items {
  width: 40px;
  height: 40px;
  top: 0px;
  left: 68px;
  z-index: 2;
  border-radius: 50%;
  border: 2px solid white;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #e9511d;
  font-size: 1.5rem;
}

.quantity-n {
  width: 20px;
}

.total-n {
  width: 80px;
}

.minus {
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
}

.plus {
  font-size: 1.1rem;
  font-weight: bold;
}

.cart {
  .cart-popover {
    overflow-y: auto;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    background-color: white;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
    width: 100vw;
    // min-width: 500px;
    z-index: 3;
    background-color: rgba(255, 78, 0, 0.9);
    font-size: 1.3rem;
  }
}

button {
  font-size: 1.3rem;
  background: rgba(255, 255, 255, 0.25);
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.125);
  border-radius: 1rem;
  height: 50px;
}

.items {
  background: rgba(255, 255, 255, 0.25);
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.125);
  border-radius: 1rem;
}

.btn-violet {
  background: #474bff;
  background: -webkit-linear-gradient(0deg, #474bff 0%, #bc48ff 100%);
  background: linear-gradient(0deg, #474bff 0%, #bc48ff 100%);
  color: white;
  border-radius: 0.8rem;
  border: none;

  &:hover {
    color: white;
    background: #e9511d;
    background: -webkit-linear-gradient(0deg, #e9511d 0%, #bc48ff 100%);
    background: linear-gradient(0deg, #e9511d 0%, #bc48ff 100%);
    cursor: pointer;
  }
}

.cart-nav {
  width: 80px;
  height: 40px;
  fill: white;
}

// ANIMATION EMPTY CART
/* Colours */
$penbackground: #377771;
$cardBackground: #382ca6;
$cardBackgroundDarker: #5d4df5;
$ground: #ff8e72;
$groundDarker: rgba(255, 78, 0, 1);
$characterHead: #f2b800;
$characterBorder: #4637c8;
$mouth: #4a3cc5;

/* Sizes */
$containerWidth: 380px;
$groundNodeWidth: 250px;
$groundNodeHeight: 300px;
$circleOffset: 50px;
$characterSize: 210px;
$borderRadius: 20px;
$eyeRadius: 45px;
$pupilRadius: 90px;
$sunRadius: 200px;

/* Positions */
$groundNodesStartX: -($groundNodeWidth - (100 / 3) + ($groundNodeWidth / 2) +
      $borderRadius);
$groundNodesEndX: $groundNodesStartX - $groundNodeWidth;

/* Timings */
$cycleDuration: 3s;

/* Main stage sylings */

.container-2 {
  display: flex;
  background-color: $cardBackground;
  position: relative;
  width: 100%;
  height: 350px;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  animation: DayCycle 3s infinite cubic-bezier(0.41, 0.15, 0.64, 0.91) -1s;
}

/* Custom animations */
@keyframes GroundLoop {
  from {
    left: 0px;
  }
  to {
    left: -290px;
  }
}

@keyframes CharacterSway {
  0% {
    transform: translate(0, 0);
  }
  55% {
    transform: translate($groundNodeWidth / 2, 0);
  }
  100% {
    transform: translate(0, 0);
  }
}

@keyframes CharacterMotion {
  10% {
    bottom: 0;
  }
  27% {
    bottom: -70px;
  }
  50% {
    bottom: 0;
  }
}

@keyframes EyeMove {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(720deg);
  }
}

@keyframes DayCycle {
  0% {
    background-color: $cardBackgroundDarker;
  }
  70% {
    background-color: $cardBackground;
  }
  100% {
    background-color: $cardBackgroundDarker;
  }
}

@keyframes GroundColourCycle {
  0% {
    background-color: $groundDarker;
  }
  // 50% {
  //   background-color: $ground;
  // }
  100% {
    background-color: $groundDarker;
  }
}

/* ...the rest */

.bumps {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.inner {
  position: absolute;
  bottom: -($groundNodeHeight / 3);
  left: $groundNodesStartX;
  display: inline-flex;
  white-space: nowrap;
  animation: GroundLoop $cycleDuration linear infinite;
}

.bump {
  position: relative;
  width: $groundNodeWidth;
  height: $groundNodeHeight;
  background-color: $ground;
  animation: GroundColourCycle $cycleDuration infinite
    cubic-bezier(0.41, 0.15, 0.64, 0.91) -1s;
}

.bump::after {
  content: "";
  width: $groundNodeWidth + $circleOffset;
  height: $groundNodeWidth + $circleOffset;
  position: absolute;
  background-color: $cardBackground;
  border-radius: 50%;
  top: -50%;
  left: -50%;
  animation: DayCycle $cycleDuration infinite
    cubic-bezier(0.41, 0.15, 0.64, 0.91) -1s;
}

.character {
  position: absolute;
  width: $characterSize;
  height: $characterSize;
  bottom: 115px;
  left: (100/ 3) - (10 / 2) - $borderRadius;
}

.head {
  width: 100%;
  height: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  border-radius: 50%;
  background-color: $characterHead;
  border: $borderRadius solid $characterBorder;
  animation: CharacterSway $cycleDuration infinite
      cubic-bezier(0.4, -0.01, 0.65, 0.97),
    CharacterMotion $cycleDuration infinite cubic-bezier(0.76, 0.32, 0.17, 0.85);
  background: rgba(255, 255, 255, 0.15);
  -webkit-backdrop-filter: blur(11px);
  backdrop-filter: blur(11px);
  border: 1px solid rgba(255, 255, 255, 0.075);
}

.eye {
  width: $eyeRadius;
  height: $eyeRadius;
  border-radius: 50%;
  background: linear-gradient(#f9f7f3, #eae4d6);
  position: absolute;
  top: -10px;
  left: calc(50% - #{$eyeRadius});
  border-radius: 135px;
  background: #ffffff;
  box-shadow: 29px 29px 61px #7991b9, -29px -29px 61px #b9dfff;
  box-shadow: 0px 1.5px 17.3px rgba(0, 0, 0, 0.135),
    0px 12px 138px rgba(0, 0, 0, 0.27);
  bottom: 115px;
}

.eye::after {
  content: "";
  position: absolute;
  width: 10px;
  height: 10px;
  background-color: #204642;
  border-radius: 50%;
  left: calc(50% - 5px);
  top: calc(50% - 5px);
  transform-origin: 40% 60%;
  animation: EyeMove $cycleDuration infinite;
}

.eye:nth-child(2) {
  left: 50%;
}

.eye:nth-child(2)::after {
  transform-origin: 30% 30%;
}

.mouth {
  position: absolute;
  transform: rotate(180deg);
  width: 90%;
  height: 50%;
  border-radius: 30px;
  top: 20%;
  left: -10px;
}

svg.mouth-shadow {
  width: 100%;
  height: 95%;
  position: absolute;
  top: 17%;
  animation: SwitchThatMood $cycleDuration infinite, MouthShadowOpacity;
  transform-origin: center top;
  fill: #204642;
}

@media (min-width: 768px) {
  .cart {
    .cart-popover {
      width: 50vw;
    }
  }
}

@media (min-width: 1200px) {
  .cart {
    .cart-popover {
      width: 30vw;
    }
  }
}
</style>
