<script>


export default {

    data() {
        return {


        };

    },
    components: {

    },
    props: {
        dish: Object,
    }

}
</script>

<template>
    <div class="card" style="width: 18rem;">
        <img :src="dish.image" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">{{ dish.name }}</h5>
            <p class="card-text">{{ dish.address }}</p>
            <p class="card-text">{{ dish.description }}</p>
            <a href="#" class="btn btn-primary">Vedi il Menu</a>
        </div>
    </div>
</template>

<style lang="scss" scoped>
//SCSS
</style>