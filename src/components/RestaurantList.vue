<script>
import axios from "axios";
import AppHeader from "./AppHeader.vue";
import RestaurantCard from "./RestaurantCard.vue";
import Pagination from "vue-pagination";

export default {
  data() {
    return {
      isLoading: false,
      errorMess: false,
      restaurants: {
        list: [],
        pages: [],
      },

      perPage: 8, // Numero di ristoranti per pagina
      currentPage: 1, // Pagina corrente

      types: [],
      selectedCategories: [],

      type: null,
    };
  },

  components: {
    AppHeader,
    RestaurantCard,
  },
  props: {
    typeOfRequest: String,
  },

  methods: {
    fetchRestaurants(endpoint = null) {
      this.isLoading = true;
      if (!endpoint) endpoint = this.baseEndpoint;

      axios
        .get(endpoint)
        .then((response) => {
          this.restaurants.list = response.data;
          this.paginateRestaurants(1); // Inizializza la paginazione

          if (response.data.type) this.type = response.data.type;
        })
        .catch((error) => {
          // TO DO: 404 !!!
          this.errorMess = error.message;
        })
        .finally(() => {
          this.isLoading = false;
        });
    },

    fetchTypes(endpoint = null) {
      this.isLoading = true;
      if (!endpoint) endpoint = "http://127.0.0.1:8000/api/types";

      axios
        .get(endpoint)
        .then((response) => {
          this.types = response.data.types;
        })
        .catch((error) => {
          // TO DO: 404 !!!
          this.errorMess = error.message;
        })
        .finally(() => {
          this.isLoading = false;
        });
    },

    leftScroll() {
      const right = document.querySelector(".scroll-images");
      right.scrollBy(-200, 0);
    },
    rightScroll() {
      const left = document.querySelector(".scroll-images");
      left.scrollBy(200, 0);
    },

    paginateRestaurants(page) {
      this.currentPage = page;
    },

    previousPage() {
      if (this.currentPage > 1) {
        this.currentPage -= 1;
      }
    },
    nextPage() {
      if (this.currentPage < this.totalRestaurants) {
        this.currentPage += 1;
      }
    },
    goToPage(page) {
      this.currentPage = page;
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

    // Calcola il numero totale di ristoranti
    totalRestaurants() {
      return this.restaurants.list.length;
    },
    // Restituisci solo i ristoranti per la pagina corrente
    paginatedRestaurants() {
      const startIndex = (this.currentPage - 1) * this.perPage;
      const endIndex = startIndex + this.perPage;
      return this.restaurants.list.slice(startIndex, endIndex);
    },

    totalPages() {
      return Math.ceil(this.totalRestaurants / this.perPage);
    },
    currentPage: {
      get() {
        return this.value;
      },
      set(page) {
        this.$emit("input", page);
      },
    },
  },
  created() {
    this.fetchRestaurants();
    this.fetchTypes();
  },
};
</script>

<template>
  <AppLoader v-if="isLoading" />
  <div class="container">
    <div class="all-types mb-3 mt-5 cover">
      <button
        class="left-1 arrowleft"
        @click="leftScroll"
        @mouseover="leftScroll()"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div class="scroll-images pe-5 d-flex">
        <router-link
          v-for="type in types"
          class="types"
          :to="{ name: 'type_restaurants', params: { type_id: type.id } }"
          @click="fetchRestaurants()"
        >
          <div class="d-flex flex-column align-items-center">
            <div class="types-icon">
              <img :src="type.image" alt="" class="child-image" />
            </div>
            <div class="mt-3 text">
              <span>{{ type.name }}</span>
            </div>
          </div>
        </router-link>
      </div>

      <button
        class="right-1 arrowright"
        @click="rightScroll"
        @mouseover="rightScroll()"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
  </div>
  <div class="container d-flex align-items-center flex-column">
    <h2 v-if="typeOfRequest == 'all'">Tutti i ristoranti</h2>

    <div
      class="row row-cols- gap-3 justify-content-center mt-5 gradient-2"
      v-if="totalRestaurants"
    >
      <RestaurantCard
        v-for="restaurant in paginatedRestaurants"
        :key="restaurant.id"
        :restaurant="restaurant"
      />
    </div>

    <h2 v-else>Non ci sono ristoranti</h2>
  </div>
  <!-- Aggiungi il componente di paginazione -->
  <nav aria-label="Page navigation example">
    <ul class="pagination">
      <li :class="{ disabled: currentPage === 1 }" class="page-item">
        <a @click="previousPage" class="page-link">&laquo;</a>
      </li>
      <li
        v-for="pageNumber in totalPages"
        :key="pageNumber"
        :class="{ active: currentPage === pageNumber }"
        class="page-item"
      >
        <a @click="goToPage(pageNumber)" class="page-link">{{ pageNumber }}</a>
      </li>
      <li :class="{ disabled: currentPage === totalPages }" class="page-item">
        <a @click="nextPage" class="page-link">&raquo;</a>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}

.pagination li {
  display: inline;
}

.pagination li a {
  padding: 5px 10px;
  text-decoration: none;
  color: #000;
  border: 1px solid #ddd;
}

.pagination li.disabled a {
  color: #bbb;
  cursor: not-allowed;
}

.pagination li.active a {
  background-color: #007bff;
  color: #fff;
}
.gradient-2 {
  background: linear-gradient(334deg, #6b97f7, #5d4df5, #f7137e);
  background-size: 180% 180%;
  animation: gradient-animation 6s ease infinite;
  color: white;
  font-size: 1.5rem;
  padding: 2rem;
  border-radius: 1rem;
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

h2 {
  font-family: "Nunito", sans-serif;
  font-size: 3rem;
  margin-top: 2rem;
  font-weight: 800;
  color: #ff4e00;
}

.icons {
  width: 70px;
}
.text {
  font-size: 1.2rem;
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
    width: 89px;
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
  gap: 2rem;
  margin-left: 1.2rem;
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
  border-bottom: 5px solid #e9511d;
  border-right: 5px solid #e9511d;
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
  border-bottom: 5px solid #e9511d;
  border-right: 5px solid #e9511d;
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
