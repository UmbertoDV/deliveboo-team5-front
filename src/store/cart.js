import { defineStore } from "pinia";
import { useLocalStorage } from "@vueuse/core";


export const useCartStore = defineStore("cart", {
    state: () => {
        return {
            dishes: useLocalStorage('dishes', []),
            totalPrice: useLocalStorage('price', 0)
        };
    },
    actions: {
        addDish(dish) {
            let isAlreadyInCart = 0;
            for (let otherDishes of this.dishes) {
                if (dish.id == otherDishes.id) {
                    isAlreadyInCart = 1;
                }
            }
            if (isAlreadyInCart) {
                for (let otherDishes of this.dishes) {
                    if (dish.id == otherDishes.id) {
                        otherDishes['quantity'] += 1
                        this.totalPrice += dish.price
                        console.log(otherDishes)
                    }
                }
            }
            else {
                dish['quantity'] = 1
                this.totalPrice += dish.price
                this.dishes.push(dish);
            }
            console.log(isAlreadyInCart)
        },
        deleteDish(key) {
            delete this.dishes[key];
        },
        deleteCart() {
            this.dishes = []
            this.totalPrice = 0
        },
        minusOne(dish) {
            if (dish['quantity'] == 1) {
                let i = 0
                for (let otherDishes of this.dishes) {
                    if (dish.id == otherDishes.id) {
                        this.dishes.splice(i, 1)
                        this.totalPrice -= dish.price
                    }
                    else {
                        i++
                    }
                }
            }
            else {
                for (let otherDishes of this.dishes) {
                    if (dish.id == otherDishes.id) {
                        otherDishes.quantity -= 1
                        this.totalPrice -= dish.price
                    }
                }
            }
        },
        moreOne(dish) {
            for (let otherDishes of this.dishes) {
                if (dish.id == otherDishes.id) {
                    otherDishes.quantity += 1
                    this.totalPrice += dish.price
                }
            }
        }
    },
    getters: {

    },
});