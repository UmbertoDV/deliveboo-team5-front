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
            <svg class="cart-nav" fill="#000000" width="800px" height="800px" viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M8,3V7H21L18,17H6V4H4A1,1,0,0,1,4,2H7A1,1,0,0,1,8,3ZM6,20.5A1.5,1.5,0,1,0,7.5,19,1.5,1.5,0,0,0,6,20.5Zm9,0A1.5,1.5,0,1,0,16.5,19,1.5,1.5,0,0,0,15,20.5Z" />
            </svg>
        </button>
        <div class="cart-popover" :class="{ 'd-none': !isVisible }">
            <div class="d-flex justify-content-between align-items-center">
                <h3>Carrello</h3>
                <button class="btn btn-violet" @click="isVisible = 0">
                    x
                </button>
            </div>
            <div class="d-flex flex-column gap-3">
                <div v-for="dish in store.dishes" class="d-flex gap-2 align-items-center items p-2">
                    <div class=" flex-grow-1">
                        {{ dish.name }}
                    </div>
                    <div class="d-flex gap-2 align-items-center">
                        <button class="btn minus" @click="store.minusOne(dish)">-</button>
                        <span class="quantity-n">
                            {{ dish.quantity }}
                        </span>
                        <button class="btn plus" @click="store.moreOne(dish)">+</button>
                        <span class="total-n">
                            {{ (dish.price * dish.quantity).toFixed(2) }}€
                        </span>
                    </div>
                </div>
            </div>
            <div class="d-flex align-items-center justify-content-end">
                <button @click="store.deleteCart" class="btn btn-violet me-2 p-3">Annulla Ordine</button>
                <button @click="sendCart()" class="btn btn-violet me-2 p-3">
                    Invia ordine
                </button>
                <span class="total-n">{{ store.totalPrice }}€</span>

            </div>
        </div>
    </div>
</template>

<style lang="scss">
.quantity-n {
    width: 20px;
}

.total-n {
    width: 80px;
}

.minus {
    font-size: 1.5rem;
    font-weight: bold;
}

.plus {
    font-size: 1.1rem;
    font-weight: bold;
}

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
    padding: 0.8rem 1rem;
    border: none;
    padding: 0.5rem 0.9rem;

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
</style>