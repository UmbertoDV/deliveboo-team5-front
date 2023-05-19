import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../pages/HomePage.vue";
import RestaurantDetail from "../pages/RestaurantDetail.vue";
import RestaurantListPage from "../pages/RestaurantListPage.vue";
import TypeRestaurantsPage from "../pages/TypeRestaurantsPage.vue";

const router = createRouter({
    history: createWebHistory(),
    linkLinkClass: 'active',
    linkExactActiveClass: '',
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePage
            ,
        },
        {
            path: "/restaurants",
            name: "restaurants",
            component: RestaurantListPage,
        },
        {
            path: "/restaurant/:id",
            name: "restaurant-detail",
            component: RestaurantDetail,
        },
        {
            path: "/type/:type_id/restaurants",
            name: "type_restaurants",
            component: TypeRestaurantsPage,
        },


    ]
});
export { router };