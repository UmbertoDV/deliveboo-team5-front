<script>
import axios from "axios";
import { useCartStore } from "../store/cart";
export default {
  name: "Homepage",
  data() {
    return {};
  },
};
</script>
<template>
  <AppLoader v-if="isLoading" />

  <div class="position d-flex justify-content-center all-contain">
    <div class="form-contain-dish">
      <div class="jumbo d-flex justify-content-center">
        <div
          class="jmb-child d-flex flex-column gap-3 justify-content-center align-items-center"
        >
          <h2 class="mt-5 px-2">
            Grazie mille! <br> Il tuo ordine è avvenuto con successo.
          </h2>
          <h4 class="text-center">Tra pochissimo saremo da te!</h4>
          <div class="logo_deliveboo me-3">
            <svg
              id="Deliveboo"
              data-name="Deliveboo"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 231.13 183.21"
            >
              <title>DELEVIBOO</title>
              <line class="cls-1" x1="44.2" y1="69.54" x2="30.41" y2="69.54" />
              <line class="cls-1" x1="43.77" y1="54.04" x2="16.16" y2="54.04" />
              <path
                class="cls-2"
                d="M161.19,33.36s11.14,1.69,15.64,3.38,7.54.11,8.33-1.69-3.6-10.24-14.41-12.72-20.37.72-25,7.57a15.66,15.66,0,0,0-1.92,14.38c.45,1.24,3.38,8.44,15.42,11.93s19.93,4.62,23.08,0c0,0,1.57-.56-3.6-1.24S162,51,162,51,156.91,36.74,157.81,36,161.19,33.36,161.19,33.36Z"
              />
              <path
                class="cls-2"
                d="M137.27,72.11a5.12,5.12,0,0,1,3.3,2.32c1.44,2.1,6.84,10.37,10.37,12.13s10.81,4,19.42,4,7.5,1.44,8.93-.77,2.1-5.62-.55-6.62-5.29-2.75-6.73-2.53-1.32,1.78-2.54.94-11-4.8-11.36-4.91-9-21.07-11.25-23.06-6-4.63-13.12-2.76-22.4,13-26.59,26.81-2.09,22.39,0,24.93,7.52,5.62,31.22,10.7c0,0,1.78,1.21,0,3.64s-8.16,20-9.27,20.73-3.42,5,.66,6.29,9.49,4.41,10.15,4.52,5.3.78,5.52-1.21.44-2.65-.88-3.31-5.19-.55-4.64-3.31,18.64-27.24,19-29.89,1.11-4.63-3.41-9.38c0,0-15.89-5.84-29.35-10.36,0,0,2.72-14.33,8.17-18.32C136.23,71.24,137.27,72.11,137.27,72.11Z"
              />
              <path
                class="cls-2"
                d="M183.35,118.12a19.38,19.38,0,0,0-4.84,2l-3.58-13.35-2.1-7.88a4,4,0,0,1,4.66-1.35l2.07,7.27Z"
              />
              <path
                class="cls-3"
                d="M61.06,103.45s-5.72-2.39-5.72-6.15v-43s-.43-5.09,5.72-5.94,27.15,0,27.15,0,7-1.48,8.06,8.27,4.45,33.51,4.67,36.9-1.07,7.64-4.67,7.85-22.9-.64-28.84,8.48A80.78,80.78,0,0,0,58.52,130s-1.27-15.9,3.18-24.39C61.7,105.63,63,104.5,61.06,103.45Z"
              />
              <path
                class="cls-2"
                d="M183.65,84.48s1.55-8.48,8.52-13.36,10.14,10.23,10.56,15.61-1.48,10.9-3.39,11.11S184.28,95.3,183.65,84.48Z"
              />
              <path
                class="cls-2"
                d="M126,123.73a24.54,24.54,0,0,0-14-17,28,28,0,0,0-12-2.54q-13.18,0-24.2,9.36T62.41,136.14a28.44,28.44,0,0,0,1.43,16,24.57,24.57,0,0,0,9.61,11.65,27.48,27.48,0,0,0,15.27,4.29q13.19,0,24.2-9.39t13.35-22.57A29.19,29.19,0,0,0,126,123.73Zm-14.1,12.41a20.35,20.35,0,0,1-7.31,12.34,20.12,20.12,0,0,1-13.28,5.14,14,14,0,0,1-11.44-5.14,14.49,14.49,0,0,1-2.92-12.34,21.67,21.67,0,0,1,20.52-17.41,14.07,14.07,0,0,1,11.44,5.1A14.57,14.57,0,0,1,111.85,136.14Z"
              />
              <path
                class="cls-2"
                d="M103.81,135.57a8.12,8.12,0,0,1-2.49,6.1,8.27,8.27,0,0,1-5.92,2.4,7.23,7.23,0,0,1-3.36-.79A7.82,7.82,0,0,1,90.22,142,7.08,7.08,0,0,1,88,136.59a7.67,7.67,0,0,1,2.54-6.15,8.87,8.87,0,0,1,5.88-2.18,7.74,7.74,0,0,1,5.26,1.86,5.28,5.28,0,0,1,.82.89h0A7.33,7.33,0,0,1,103.81,135.57Z"
              />
              <path
                class="cls-2"
                d="M216.86,122.47a24.55,24.55,0,0,0-14-17,28.09,28.09,0,0,0-12-2.53,34.81,34.81,0,0,0-11.32,1.86,33.79,33.79,0,0,0-4.63,2,42.21,42.21,0,0,0-8.25,5.53q-11,9.36-13.35,22.55a28.42,28.42,0,0,0,1.43,16,24.55,24.55,0,0,0,9.61,11.66,27.48,27.48,0,0,0,15.27,4.29q13.2,0,24.2-9.39t13.35-22.57A29,29,0,0,0,216.86,122.47Zm-14.09,12.41a21.81,21.81,0,0,1-20.6,17.47,14,14,0,0,1-11.43-5.13,14.5,14.5,0,0,1-2.93-12.34,20.32,20.32,0,0,1,7.29-12.32,23,23,0,0,1,3.41-2.41,19.41,19.41,0,0,1,9.84-2.69,14.1,14.1,0,0,1,11.43,5.1C202.6,126,203.59,130.06,202.77,134.88Z"
              />
              <path
                class="cls-2"
                d="M191.55,134.31a8.09,8.09,0,0,1-2.5,6.1,8.25,8.25,0,0,1-5.92,2.4,7.31,7.31,0,0,1-5.17-2.08,7.11,7.11,0,0,1-2.21-5.41,7.63,7.63,0,0,1,2.54-6.14,8.86,8.86,0,0,1,2.25-1.42l-2-7.61a19.38,19.38,0,0,1,4.84-2l2.57,9.06a7.28,7.28,0,0,1,3.5,1.67A6.83,6.83,0,0,1,191.55,134.31Z"
              />
            </svg>
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
  <div class="tk-blob b2 d-none d-md-block" style="--time: 90s; --amount: 5">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 747.2 726.7">
      <path
        d="M539.8 137.6c98.3 69 183.5 124 203 198.4 19.3 74.4-27.1 168.2-93.8 245-66.8 76.8-153.8 136.6-254.2 144.9-100.6 8.2-214.7-35.1-292.7-122.5S-18.1 384.1 7.4 259.8C33 135.6 126.3 19 228.5 2.2c102.1-16.8 213.2 66.3 311.3 135.4z"
      ></path>
    </svg>
  </div>

  <Footer />
</template>

<style scoped>
.position {
  height: 100vh;
}
.logo_deliveboo {
  width: 200px;
  height: 200px;
}
#Deliveboo {
  animation-name: logo;
  animation-duration: 3s;
  animation-timing-function: ease;
}

@keyframes logo {
  0% {
    transform: translate(-170px);
  }

  100% {
    transform: translate(180px);
  }
}
.cls-1 {
  fill: none;
  stroke: #f5bb05;
  stroke-linecap: round;
  stroke-miterlimit: 10;
  stroke-width: 8px;
}

.cls-2 {
  fill: rgba(255, 78, 0, 1);
}

.cls-3 {
  fill: #fbbb0a;
}
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
  margin-top: 5rem;
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
  height: 550px;
  width: 38%;
  min-width: 400px;
  background-color: white;
  top: 40%;
  border-radius: 1rem;
  box-shadow: 0px 0.7px 3.6px rgba(0, 0, 0, 0.042),
    0px 1.9px 10px rgba(0, 0, 0, 0.06), 0px 4.5px 24.1px rgba(0, 0, 0, 0.078),
    0px 15px 80px rgba(0, 0, 0, 0.12);
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
