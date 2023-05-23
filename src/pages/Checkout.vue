<script>
import Cart from "../components/Cart.vue";
import axios from "axios";
import { useCartStore } from "../store/cart.js";
import { Form, Field, ErrorMessage } from 'vee-validate';

export default {
  data() {
    return {
      store: useCartStore(),
      formData: {
        name:'',
        surname: '',
        email: '',
        address: '',
        telephone: '',
        note: '',
        total: 0,
        cart: []
        
        // Aggiungi qui gli altri campi del form
      },
    };
  },
  components: {
    Cart,
    Form,
    Field,
    ErrorMessage,
  },
  methods: {
    // ROBA VALIDATION
    onSubmit(values) {
      console.log(JSON.stringify(values, null, 2));
    },
    validateName(value) {
      // Nome è un campo vuoto
      if (!value) {
        return 'Il nome è obbligatorio';
      }
      // Tutto va bene
      return true;
    },
    validateSurname(value) {
      // Nome è un campo vuoto
      if (!value) {
        return 'Il cognome è obbligatorio';
      }
      // Tutto va bene
      return true;
    },
    validateAddress(value) {
      // Nome è un campo vuoto
      if (!value) {
        return 'L\'indirizzo è obbligatorio';
      }
      // Tutto va bene
      return true;
    },
    validateTelephone(value) {
      var pattern = /[a-zA-Z]/
      // Nome è un campo vuoto
      if (!value) {
        return 'Il telefono è obbligatorio';
      }
      if (pattern.test(value)) {
        return 'Il numero non può contenere lettere';
      }
      // Tutto va bene
      return true;
    },
    validateEmail(value) {
      // Email è un campo vuoto
      if (!value) {
        return 'L\'email è obbligatoria';
      }
      // Email non valida
      const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
      if (!regex.test(value)) {
        return 'L\'email deve essere valida';
      }
      // Tutto va bene
      return true;
    },
    // FINE ROBA VALIDATION
    sendCart() {
        const formDataStatic = {
        name: this.formData.name,
        surname: this.formData.surname,
        email: this.formData.email,
        address: this.formData.address,
        telephone: this.formData.telephone,
        note: this.formData.note,
        cart: this.store.dishes,
        total: this.store.totalPrice
      }
      axios
      .post("http://127.0.0.1:8000/api/orders", formDataStatic)
      .then((response) => console.log(response))
      .catch((error) => {
          // Gestisci eventuali errori della richiesta
          console.error(error);
        });
    },

    toggleCart() {
      this.isVisible == 1 ? (this.isVisible = 0) : (this.isVisible = 1);
    },
  },

  computed:{
    takeDish(){
      cart = this.store.dishes;
      this.cart = cart;
      return cart;
    }
     
  }
};
</script>

<template>
  <Cart @sendData="sendCart"/>
  <div class="mt-3 form-register-ctn d-flex justify-content-center">
    <div class="row justify-content-center form-register">
      <div class="card my-3 reg-card">
        <div class="card-header">Registrazione</div>

        <div class="card-body">
          <Form
            @submit="onSubmit" 
            @submit.prevent=""
            action=""
            enctype="multipart/form-data"
            id="user-info-form"
          >
            <div class="d-flex">
              <div class="col-6 right-register">
                <div class="mb-4 row">
                  <label
                    for="name"
                    class="col-md-4 col-form-label text-md-right"
                    >Nome</label
                  >
                  <div class="col-md-6">
                    <Field
                      v-model="formData.name"
                      id="name"
                      type="text"
                      class="form-control"
                      name="name"
                      autocomplete="name"
                      :rules="validateName"
                    />
                    <ErrorMessage class="fw-bold text-danger tiny-text error-span" name="name" />
                  </div>
                </div>

                <div class="mb-4 row">
                  <label
                    for="surname"
                    class="col-md-4 col-form-label text-md-right"
                    >Cognome</label
                  >

                  <div class="col-md-6">
                    <Field
                      v-model="formData.surname"
                      id="surname"
                      type="text"
                      class="form-control"
                      name="surname"
                      autocomplete="surname"
                      :rules="validateSurname"
                    />
                    <ErrorMessage class="fw-bold text-danger tiny-text error-span" name="surname" />
                  </div>
                </div>
                <div class="mb-4 row">
                  <label
                    for="email"
                    class="col-md-4 col-form-label text-md-right"
                    >Email</label
                  >

                  <div class="col-md-6">
                    <Field
                      v-model="formData.email"
                      id="email"
                      type="email"
                      class="form-control"
                      name="email"
                      autocomplete="email"
                      :rules="validateEmail"
                    />
                    <ErrorMessage class="fw-bold text-danger tiny-text error-span" name="email" />
                  </div>
                </div>
              </div>

              <div lass="col-6 left-register">
                <div class="mb-4 row">
                  <label
                    for="address"
                    class="col-4 col-form-label text-md-right"
                    >Indirizzo</label
                  >

                  <div class="col-md-6">
                    <Field
                      v-model="formData.address"
                      id="address"
                      type="text"
                      class="form-control"
                      name="address"
                      autocomplete="address"
                      :rules="validateAddress"
                    />
                    <ErrorMessage class="fw-bold text-danger tiny-text error-span" name="address" />
                  </div>
                </div>

                <div class="mb-4 row">
                  <label
                    for="telephone"
                    class="col-4 col-form-label text-md-right"
                    >Telefono</label
                  >

                  <div class="col-md-6">
                    <Field
                      v-model="formData.telephone"
                      id="telephone"
                      type="text"
                      class="form-control"
                      name="telephone"
                      :rules="validateTelephone"
                    />
                    <ErrorMessage class="fw-bold text-danger tiny-text error-span" name="telephone" />
                  </div>
                </div>

                <div class="mb-4 row">
                  <label
                    for="description"
                    class="col-4 col-form-label text-md-right"
                    >Note</label
                  >

                  <div class="col-md-6">
                    <Field v-slot="{ field }" name="description">
                      <textarea
                        v-model="formData.note"
                        style="resize: none"
                        class="form-control"
                        v-bind="field"
                      ></textarea>
                    </Field>
                  </div>
                  <button
                    @click="sendCart()"
                    type="submit"
                    class="btn btn-violet me-2 p-3 mt-4"
                  >
                    Invia ordine
                  </button>
                </div>
              </div>
            </div>
          </Form>
        </div>
      </div>
    </div>
  </div>
  <Footer />
</template>

<style land="scss" scoped>
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css");
.tiny-text {
    font-size: 14px;
}

</style>
