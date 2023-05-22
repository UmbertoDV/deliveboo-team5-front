<script>
import Cart from "../components/Cart.vue";

export default {
  data() {
    return {};
  },
  components: {
    Cart,
  },
};
</script>

<template>
  <Cart />
  <div class="mt-3 form-register-ctn d-flex justify-content-center">
    <div class="row justify-content-center form-register">
      <div class="card my-3 reg-card">
        <div class="card-header">Registrazione</div>

        <div class="card-body">
          <form
            method="POST"
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
                      id="name"
                      type="text"
                      class="form-control"
                      name="name"
                      value=""
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
                      id="surname"
                      type="text"
                      class="form-control"
                      name="surname"
                      value=""
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
                      id="email"
                      type="email"
                      class="form-control"
                      name="email"
                      value=""
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
                      id="address"
                      type="text"
                      class="form-control"
                      name="address"
                      value=""
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
                      id="telephone"
                      type="text"
                      class="form-control"
                      name="telephone"
                      value=""
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
                      type="text"
                      style="resize: none"
                      class="form-control"
                      name="description"
                      value=""
                    ></textarea>
                  </div>
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
