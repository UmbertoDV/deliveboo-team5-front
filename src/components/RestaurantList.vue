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
        filteredList: [],
      },

      perPage: 8, // Numero di ristoranti per pagina
      currentPage: 1, // Pagina corrente

      types: [],
      selectedCategories: [],
      selectedTypes: [],

      type: null,
      filteredRestaurants: [],
      all: true,
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
    filterRestaurants() {
      if (this.selectedTypes.length === 0) {
        this.filteredRestaurants = this.restaurants.list;
        this.all = true;
        // Se nessuna tipologia è selezionata, mostra tutti i ristoranti
      } else {
        this.all = false;
        this.filteredRestaurants = this.restaurants.list.filter(
          (restaurant) => {
            return restaurant.types.some((type) =>
              this.selectedTypes.includes(type.id)
            );
          }
        );

        // for (const restaurant of this.restaurants.list) {
        //   for (const type of restaurant.types) {
        //     for (const selectedType of this.selectedTypes) {
        //       if (type.id === selectedType) {
        //         this.filteredRestaurants.push(restaurant);
        //       }
        //     }
        //   }
        // }
      }
    },
    toggleCategorySelection(typeId) {
      if (this.selectedTypes.includes(typeId)) {
        this.selectedTypes = this.selectedTypes.filter((id) => id !== typeId);
      } else {
        this.selectedTypes.push(typeId);
        this.filterRestaurants();
        console.log(
          "toggleCategorySelection 1.FILTEREDRESTAURANT 2.SELECTEDTYPES"
        );
        console.log(this.restaurants.list);
        console.log(this.filteredRestaurants);
        console.log(this.selectedTypes);
      }

      const endpoint =
        this.baseEndpoint + "?types=" + this.selectedTypes.join(",");
    },

    fetchRestaurants(endpoint = null, typeId = null) {
      this.isLoading = true;
      if (!endpoint) endpoint = this.baseEndpoint;

      const params = {
        types: this.selectedTypes,
      };

      if (typeId) {
        endpoint = `http://127.0.0.1:8000/api/type/${typeId}/restaurants`;
      }

      axios
        .get(endpoint, { params })
        .then((response) => {
          this.restaurants.list = response.data;
          this.filteredRestaurants = this.restaurants.list.filter(
            (restaurant) => {
              return restaurant.types.every((type) =>
                this.selectedTypes.includes(type.id)
              );
            }
          );
          // this.filteredRestaurants = this.restaurants.list;
          // this.filterRestaurants(type.id);
          // Aggiungi la funzione forEach qui
          // this.filteredRestaurants = this.restaurants.list.filter(
          //   (restaurant) =>
          //     restaurant.types.some((type) => this.rest_type_id.includes(type))
          // );
          this.rest_type_id = []; // Resettiamo l'array prima di aggiungere gli id
          // this.restaurants.list.forEach((restaurant) => {
          //   restaurant.types.forEach((type) => {
          // this.filteredRestaurants = this.restaurants.list.filter(
          //   (restaurant) => {
          //     return this.selectedTypes.every((type) =>
          //       restaurant.types.includes(type)
          //     );
          //   }
          // );

          //   });
          // });
          console.log("Fetch RESTAURANT 1.FILTEREDRESTAURANT 2.SELECTEDTYPES");
          console.log(this.filteredRestaurants);
          console.log(this.selectedTypes);
          this.paginateRestaurants(1);
          if (response.data.type) this.type = response.data.type;
          this.filterRestaurants();
        })
        .catch((error) => {
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
      const startIndex = (this.currentPage - 1) * this.perPage;
      const endIndex = startIndex + this.perPage;
      this.paginatedRestaurants = this.filteredRestaurants.slice(
        startIndex,
        endIndex
      );
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
        return `http://127.0.0.1:8000/api/type/${this.selectedTypes.join(
          ","
        )}/restaurants`;
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
      return this.filteredRestaurants.slice(startIndex, endIndex);
    },

    totalPages() {
      if (this.all) return Math.ceil(this.totalRestaurants / this.perPage);
      if (!this.all)
        return Math.ceil(this.filteredRestaurants.length / this.perPage);
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
    const categories = this.$route.query.categories;
    this.selectedCategories = categories ? categories.split(",") : [];
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
        <div
          v-for="type in types"
          class="types d-flex align-items-center"
          @click="filterRestaurants()"
          :class="{ active: selectedTypes.includes(type.id) }"
        >
          <div @click="toggleCategorySelection(type.id)">
            <div class="d-flex flex-column align-items-center">
              <div class="types-icon">
                <img :src="type.image" alt="" class="child-image" />
              </div>
              <div class="mt-3 text">
                <span>{{ type.name }}</span>
              </div>
            </div>
          </div>
        </div>
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
  <div class="container d-flex align-items-center flex-column mb-5 rest">
    <h2 v-if="all">Tutti i ristoranti</h2>
    <h2 v-else>I ristoranti delle tipologie selezionate</h2>

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

  <div class="demo">
    <nav class="pagination-outer" aria-label="Page navigation">
      <ul class="pagination">
        <li class="page-item" :class="{ disabled: currentPage === 1 }">
          <a
            href="#"
            class="page-link"
            aria-label="Previous"
            @click="previousPage"
          >
          </a>
        </li>
        <li
          v-for="pageNumber in totalPages"
          :key="pageNumber"
          :class="{ active: currentPage === pageNumber }"
          class="page-item"
        >
          <a
            class="page-link d-flex justify-content-center align-items-center"
            href="#"
            @click="goToPage(pageNumber)"
            >{{ pageNumber }}</a
          >
        </li>
        <li class="page-item" :class="{ disabled: currentPage === totalPages }">
          <a href="#" class="page-link" aria-label="Next" @click="nextPage">
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<style lang="scss" scoped>
.rest {
  margin-top: 4rem;
}
.active {
  background-color: rgb(107, 151, 247, 0.4);
  border-radius: 2rem;
}
.types:hover img {
  transition: 1s ease;
  transform: scale(1.2);
}

//
.pagination-outer {
  text-align: center;
}
.pagination {
  font-family: "Poppins", sans-serif;
  display: inline-flex;
}
.pagination li {
  margin: 0 5px;
}
.pagination li a.page-link {
  color: #999;
  background: #e7e7e7;
  font-size: 30px;
  font-weight: 500;
  line-height: 37px;
  height: 60px;
  width: 50px;
  padding: 0;
  border: none;
  border-radius: 5px;
  display: block;
  position: relative;
  transition: all 0.3s ease 0s;
}
.pagination li.active a.page-link,
.pagination li a.page-link:hover,
.pagination li.active a.page-link:hover,
.pagination li a.page-link:focus {
  color: #fff;
  background: linear-gradient(#fc6767, #ec008c);
  border: none;
}
.pagination li a.page-link:before {
  content: "";
  background: linear-gradient(to right bottom, #ec008c, #fc6767);
  height: 10px;
  width: 10px;
  border-radius: 2px;
  opacity: 0;
  transform: translateX(-100%) rotate(45deg);
  position: absolute;
  left: 50%;
  top: 4px;
  z-index: -1;
  transition: all 0.3s ease 0s;
}
.pagination li.active a.page-link:before,
.pagination li a.page-link:hover:before,
.pagination li a.page-link:focus:before {
  opacity: 1;
  top: -4px;
}
.pagination li:first-child a.page-link,
.pagination li:last-child a.page-link {
  font-size: 20px;
  line-height: 34px;
  width: 38px;
  border-bottom: 3px solid;
}
.pagination li:first-child a.page-link:hover,
.pagination li:last-child a.page-link:hover {
  color: #fff;
  border-bottom-color: #ec008c;
}
.pagination li:first-child a.page-link:focus,
.pagination li:last-child a.page-link:focus {
  color: #999;
  background: #e7e7e7;
}
.pagination li:first-child a.page-link:before,
.pagination li:last-child a.page-link:before {
  top: 50%;
  transform: translateX(-50%) translateY(-50%) rotate(45deg);
}
.pagination li:first-child a.page-link:hover:before,
.pagination li:last-child a.page-link:hover:before {
  transform: translateX(-50%) translateY(-50%) rotate(45deg) scale(2);
}
.pagination li:first-child a.page-link:focus:before,
.pagination li:last-child a.page-link:focus:before {
  opacity: 0;
}
@media only screen and (max-width: 480px) {
  .pagination {
    font-size: 0;
    display: block;
  }
  .pagination li {
    margin: 5px 0;
    display: inline-block;
  }
}

// ********************** RISTORANTE

.gradient-2 {
  background: linear-gradient(334deg, #6b97f7, #5d4df5, #f7137e);
  background-size: 180% 180%;
  animation: gradient-animation 6s ease infinite;
  color: white;
  font-size: 1.5rem;
  padding: 2rem;
  border-radius: 1rem;
  width: 100%;
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
  span {
    font-family: "Acme", sans-serif;
    font-size: 1.5rem;
  }
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
  width: 100px;

  &:hover {
    cursor: pointer;
  }

  img {
    width: 89px;
  }

  .text {
    font-size: 1rem;
  }
}

// ************************** TIPOLOGIE
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
  gap: 1.5rem;
  margin-left: 1.2rem;

  > div {
    padding: 0.5rem 1rem;
  }
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
