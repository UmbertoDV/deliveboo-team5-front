<script>
import Cart from "../components/Cart.vue";
import axios from "axios";

export default {
  data() {
    return {
      formData: {
        name:'',
        surname: '',
        email: '',
        address: '',
        telephone: '',
        note: '',
        dish: {}

        // Aggiungi qui gli altri campi del form
      },
    };
  },
  components: {
    Cart,
  },
  methods: {
    sendCart($dish) {
        const formDataStatic = {
        name: this.formData.name,
        surname: this.formData.surname,
        email: this.formData.email,
        address: this.formData.address,
        telephone: this.formData.telephone,
        note: this.formData.note,
        dish: this.formData.dish
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
};
</script>

<template>
  <Cart @sendData="sendCart"/>
  <div class="mt-3 form-register-ctn d-flex justify-content-center">
    <div class="row justify-content-center form-register">
      <div class="card my-3 reg-card">
        <div class="card-header">Registrazione</div>

        <div class="card-body">
          <form
            @submit.prevent=""
            action=""
            enctype="multipart/form-data"
            id="register-form"
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
                    <input
                      v-model="formData.name"
                      id="name"
                      type="text"
                      class="form-control"
                      name="name"
                      autocomplete="name"
                    />
                  </div>
                </div>

                <div class="mb-4 row">
                  <label
                    for="surname"
                    class="col-md-4 col-form-label text-md-right"
                    >Cognome</label
                  >

                  <div class="col-md-6">
                    <input
                      v-model="formData.surname"
                      id="surname"
                      type="text"
                      class="form-control"
                      name="surname"
                      autocomplete="surname"
                    />
                  </div>
                </div>
                <div class="mb-4 row">
                  <label
                    for="email"
                    class="col-md-4 col-form-label text-md-right"
                    >Email</label
                  >

                  <div class="col-md-6">
                    <input
                      v-model="formData.email"
                      id="email"
                      type="email"
                      class="form-control"
                      name="email"
                      autocomplete="email"
                    />
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
                    <input
                      v-model="formData.address"
                      id="address"
                      type="text"
                      class="form-control"
                      name="address"
                      autocomplete="address"
                    />
                  </div>
                </div>

                <div class="mb-4 row">
                  <label
                    for="telephone"
                    class="col-4 col-form-label text-md-right"
                    >Telefono</label
                  >

                  <div class="col-md-6">
                    <input
                      v-model="formData.telephone"
                      id="telephone"
                      type="text"
                      class="form-control"
                      name="telephone"
                    />
                  </div>
                </div>

                <div class="mb-4 row">
                  <label
                    for="description"
                    class="col-4 col-form-label text-md-right"
                    >Note</label
                  >

                  <div class="col-md-6">
                    <textarea
                      v-model="formData.note"
                      type="text"
                      style="resize: none"
                      class="form-control"
                      name="description"
                    ></textarea>
                  </div>
                  <button
                    @click="sendCart()"
                    class="btn btn-violet me-2 p-3 mt-4"
                  >
                    Invia ordine
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  <Footer />
</template>

<style land="scss" scoped></style>
