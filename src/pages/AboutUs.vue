<script>
import axios from "axios";
import { useCartStore } from "../store/cart";
export default {
  name: "Homepage",
  data() {
    return {
      ester: false,
    };
  },
};
</script>
<template>
  <AppLoader v-if="isLoading" />

  <div class="position d-flex justify-content-center all-contain">
    <div class="form-contain-dish">
      <div class="jumbo d-flex">
        <div
          class="jmb-child d-flex flex-column gap-3 justify-content-center align-items-center"
        >
          <div class="team-title">Il Team</div>

          <img src="../assets/img/Team5.png" alt="" class="team" />
          <div class="scopri">
            <h4>Scopri di più sul dietro le quinte del progetto..</h4>
            <button @click="ester = true">Scopri</button>
          </div>
          <img
            src="../assets/img/Pipottidef.GIF"
            alt=""
            v-if="ester"
            class="team-gif"
          />
          <button v-if="ester" @click="ester = false" class="chiudi">X</button>
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

<style scoped lang="scss">
.scopri {
  position: absolute;
  top: 100%;
  text-align: center;

  button {
    background-color: rgba(255, 78, 0, 1);
    padding: 0.5rem 1rem;
    font-size: 1.3rem;
    margin-top: 1rem;
  }
}
.chiudi {
  position: absolute;
  top: 105%;
  left: 100%;
  border-radius: 50%;
  width: 40px;
  height: 40px;
}
.team-title {
  font-family: "Alkatra", cursive;
  font-size: 4rem;
  margin-top: 3rem;
  color: rgba(255, 78, 0, 1);
}
.team-gif {
  width: 1000px;
  position: absolute;
  top: 98%;
  border-radius: 2rem;
  box-shadow: 0px 1.3px 1.1px rgba(0, 0, 0, 0.028),
    0px 4.5px 3.8px rgba(0, 0, 0, 0.042), 0px 20px 17px rgba(0, 0, 0, 0.07);
}
.position {
  height: 1300px;
}
.team {
  width: 1200px;
  border-radius: 3rem;
  box-shadow: 2.8px 2.8px 2.2px rgba(0, 0, 0, 0.02),
    6.7px 6.7px 5.3px rgba(0, 0, 0, 0.028),
    12.5px 12.5px 10px rgba(0, 0, 0, 0.035),
    22.3px 22.3px 17.9px rgba(0, 0, 0, 0.042),
    41.8px 41.8px 33.4px rgba(0, 0, 0, 0.05),
    100px 100px 80px rgba(0, 0, 0, 0.07);
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
  top: 105%;
  left: 30%;
  border-radius: 3rem;
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
