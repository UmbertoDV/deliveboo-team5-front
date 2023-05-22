import { defineStore } from "pinia";
import { useLocalStorage } from "@vueuse/core";


export const useCartStore = defineStore("cart", {
    state: () => {
        return {
            dishes: useLocalStorage('dishes', []),
            totalPrice: useLocalStorage('price', 0),
            index: 0,
        };
    },
    actions: {
        addDish(dish) {
            let isAlreadyInCart = 0;
            dish.price = parseInt(dish.price);
            for (let otherDishes of this.dishes) {
                if (dish.id == otherDishes.id) {
                    dish.price = parseInt(dish.price);
                    isAlreadyInCart = 1;
                }
            }
            if (isAlreadyInCart) {
                dish.price = parseInt(dish.price);
                for (let otherDishes of this.dishes) {
                    if (dish.id == otherDishes.id) {
                        dish.price = parseInt(dish.price);
                        otherDishes['quantity'] += 1
                        this.totalPrice += dish.price
                        console.log(this.totalPrice);
                        // console.log(otherDishes)
                    }
                }
            }
            else {
                dish.price = parseInt(dish.price);
                dish['quantity'] = 1
                this.totalPrice += dish.price
                console.log(this.totalPrice);
                this.dishes.push(dish);
            }
            // console.log(isAlreadyInCart)
        },
        deleteDish(key) {
            delete this.dishes[key];
        },
        deleteCart() {
            this.dishes = []
            this.totalPrice = 0
        },
        minusOne(dish) {
            console.log(this.totalPrice);
            if (dish['quantity'] == 1) {
                let i = 0
                for (let otherDishes of this.dishes) {
                    if (dish.id == otherDishes.id) {
                        this.dishes.splice(i, 1)
                        this.totalPrice -= dish.price
                    }
                    if (this.dishes.length == 0) {
                        this.dishes.quantity = 0;
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
            console.log(this.totalPrice);
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