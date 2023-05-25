<script>
// import HelloWorld from './components/HelloWorld.vue'
import axios from "axios"
let pagamentoConfermato = false;
export default {
  data() {
    return {
      showDropIn: true,
      pagamentoConfermato: false
    };
    
  },
  methods: {
    
  },
  mounted() {
    var button = document.querySelector('#submit-button');
    let pagamentoConfermato = false;
    braintree.dropin.create({
      authorization: 'sandbox_g42y39zw_348pk9cgf3bgyw2b',
      selector: '#dropin-container',
      locale : 'it_IT',
    },
    function (err, instance) {
      button.addEventListener('click', function () {
        instance.requestPaymentMethod(function (err, payload) {
          if(err){
            alert("Inserisci i dati corretti")
          } else {
            window.location.href = "conf-payment.html";
          }
        });
      })
    });
  },
};
</script>

<template>
  <div class="container pt-personal">
    <div v-if="!pagamentoConfermato">
      <div id="dropin-container"></div>
      <button id="submit-button" class="btn btn-success">Purchase</button> <br>
    </div>

    <!-- <div v-if="showDropIn">
      <div id="dropin-container"></div>
      <button @click="processPayment">Conferma pagamento</button>
    </div> -->
    <!-- <div >
      <h1 v-if="pagamentoConfermato">Pagamento confermato!</h1>
      <h1 v-else>Pagamento non confermato</h1>
    </div> -->

    <div v-if="pagamentoConfermato" class="card">
      <div style="border-radius:200px; height:200px; width:200px; background: #F8FAF5; margin:0 auto;">
        <i class="checkmark">✓</i>
      </div>
      <h1>Perfetto</h1> 
      <p>Ti abbiamo preso i soldi<br/> Adios! Ariba Ariba</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
//SCSS
        h1 {
          color: #88B04B;
          font-family: "Nunito Sans", "Helvetica Neue", sans-serif;
          font-weight: 900;
          font-size: 40px;
          margin-bottom: 10px;
        }
        p {
          color: #404F5E;
          font-family: "Nunito Sans", "Helvetica Neue", sans-serif;
          font-size:20px;
          margin: 0;
        }
      i {
        color: #9ABC66;
        font-size: 100px;
        line-height: 200px;
        margin-left:-15px;
      }
      .card {
        text-align: center;
        padding: 40px 0;
        background: #EBF0F5;
        padding: 60px;
        border-radius: 4px;
        box-shadow: 0 2px 3px #C8D0D8;
        display: inline-block;
        margin: 0 auto;
      }
</style>