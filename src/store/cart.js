// import { defineStore } from "pinia";
// import { useLocalStorage } from "@vueuse/core";



// export const useCartStore = defineStore("cart", {
//     state: () => {
//         return {
//             dishes: useLocalStorage('dishes', []),
//             totalPrice: useLocalStorage('price', 0),
//             index: 0,
//         };
//     },

//     actions: {
//         addDish(dish) {
//             dish.price = parseInt(dish.price);
//                 dish['quantity'] = 1
//                 this.totalPrice += dish.price
//                 this.dishes.push(dish);

//             if(this.dishes[0].restaurant_id == dish.restaurant_id){
//             let isAlreadyInCart = 0;
//             dish.price = parseInt(dish.price);
//             for (let otherDishes of this.dishes) {
//                 if (dish.id == otherDishes.id) {
//                     dish.price = parseInt(dish.price);
//                     isAlreadyInCart = 1;
//                 }
//             }
//             if (isAlreadyInCart) {
//                 dish.price = parseInt(dish.price);
//                 for (let otherDishes of this.dishes) {
//                     if (dish.id == otherDishes.id) {
//                         dish.price = parseInt(dish.price);
//                         dish['quantity'] = 0
//                         this.totalPrice -= dish.price
//                         otherDishes['quantity'] += 1
//                         this.totalPrice += dish.price
//                     }
//                 }
//             }
//             else {
//                 dish.price = parseInt(dish.price);
//                 dish['quantity'] = 1
//                 this.totalPrice += dish.price
//                 this.dishes.push(dish);
//             }
//         } else {
//             alert('non puoi');
//             this.dishes.pop();
//             this.totalPrice -= dish.price

//         }
//         },
//         deleteDish(key) {
//             delete this.dishes[key];
//         },
//         deleteCart() {
//             this.dishes = []
//             this.totalPrice = 0
//         },
//         minusOne(dish) {
//             if (dish['quantity'] == 1) {
//                 let i = 0
//                 for (let otherDishes of this.dishes) {
//                     if (dish.id == otherDishes.id) {
//                         this.dishes.splice(i, 1)
//                         this.totalPrice -= dish.price
//                     }
//                     if (this.dishes.length == 0) {
//                         this.dishes.quantity = 0;
//                     }
//                     else {
//                         i++
//                     }
//                 }
//             }
//             else {
//                 for (let otherDishes of this.dishes) {
//                     if (dish.id == otherDishes.id) {
//                         otherDishes.quantity -= 1
//                         this.totalPrice -= dish.price
//                     }
//                 }
//             }
//         },
//         moreOne(dish) {
//             for (let otherDishes of this.dishes) {
//                 if (dish.id == otherDishes.id) {
//                     otherDishes.quantity += 1
//                     this.totalPrice += dish.price
//                 }
//             }
//         }
//     },
//     getters: {

//     },
// });

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
                if(this.dishes[0].restaurant_id == dish.restaurant_id){
                dish['quantity'] = 1
                this.totalPrice += dish.price
                this.dishes.push(dish);
                  } else {
                alert('non puoi');
            this.dishes.pop();
            this.totalPrice -= dish.price
              }
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
            for (let otherDishes of this.dishes) {
                if (dish.id == otherDishes.id) {
                    otherDishes.quantity += 1
                    this.totalPrice += dish.price
                    index += 1;
                }
            }
        }
    },
    getters: {

    },
});