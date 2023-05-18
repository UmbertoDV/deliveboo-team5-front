<script>


export default {

    data() {
        return {


        };

    },
    components: {

    },
    props: {
        restaurant: Object,
    }



}
</script>

<template>
    <div class="card" style="width: 18rem;">
        <img :src="restaurant.image" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">{{ restaurant.name_restaurant }}</h5>
            <p class="card-text">{{ restaurant.address }}</p>
            <p class="card-text">{{ restaurant.description }}</p>
            <router-link :to="{ name: 'restaurant-detail', params: { id: restaurant.id } }"
                class="nav-link">Dettaglio</router-link>
        </div>
    </div>
</template>

<style lang="scss" scoped>
//SCSS
</style>