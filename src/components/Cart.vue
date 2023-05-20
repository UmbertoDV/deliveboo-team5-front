<script >
import axios from "axios";
import { useCartStore } from "../store/cart.js";
export default {
    data() {
        return {
            store: useCartStore(),
            isVisible: 0
        }
    },
    created() {
        console.log(this.store.dishes)
    },
    methods: {
        sendCart() {
            axios.post('http://127.0.0.1:8000/api/orders', {
                cart: this.store.dishes
            })
                .then(
                    (response) => console.log(response)
                )
        },
        toggleCart() {
            this.isVisible == 1 ? this.isVisible = 0 : this.isVisible = 1;
        }
    }
}
</script>
<template>
    <div class="cart">
        <button class="btn " @click="toggleCart()">
            Cart
        </button>
        <div class="cart-popover" :class="{ 'd-none': !isVisible }">
            <div class="d-flex justify-content-between align-items-center">
                <h4>Carrello</h4>
                <button class="btn" @click="isVisible = 0">
                    x
                </button>
            </div>
            <div class="h-100">
                <div v-for="dish in store.dishes" class="d-flex gap-2 align-items-center">
                    <div class=" flex-grow-1">
                        {{ dish.name }}
                    </div>
                    <div class="d-flex gap-2 align-items-center">
                        <button class="btn" @click="store.minusOne(dish)">-</button>
                        <span>
                            {{ dish.quantity }}
                        </span>
                        <button class="btn" @click="store.moreOne(dish)">+</button>
                        <span>
                            {{ (dish.price * dish.quantity).toFixed(2) }}€
                        </span>
                    </div>
                </div>
            </div>
            <div class="d-flex align-items-center justify-content-end">
                <button @click="store.deleteCart" class="btn">Svuota il cestino</button>
                <button @click="sendCart()" class="btn">
                    Invia ordine
                </button>
                {{ store.totalPrice.toFixed(2) }}€
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.cart {
    .cart-popover {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        background-color: white;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        padding: 1rem;
        width: 30vw;
        z-index: 3;
        background-color: #E9511D;

    }
}
</style>