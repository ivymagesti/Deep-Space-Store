<template>
  <v-container class="fill-height">
    <v-card class="mx-auto" max-width="344">
      <v-row>
        <v-col class="image">
          <v-img
            height="200px"
            src="../assets/images/youshop_brasil_logo.jpeg"
            cover
          ></v-img>
        </v-col>

        <v-col class="description">
          <v-card-title class="text-h5 name-purchase font-weight-bold">
            {{ purchaseDetails.name }}
          </v-card-title>
          <div class="description">
            <v-card-subtitle class="font-weight-bold details-purchase">
              Quantidade de itens:
              {{ purchaseDetails.quantity }}</v-card-subtitle
            >
            <v-card-subtitle class="font-weight-bold details-purchase">
              Valor do Pedido: R${{ purchaseDetails.price }}</v-card-subtitle
            >
          </div>
        </v-col>
      </v-row>
      <div class="line"></div>
      <div class="checkout">
        <v-btn class="btn-checkout" @click="goToForm"> Finalizar Compra </v-btn>
      </div>
    </v-card>
  </v-container>
</template>

<script>
import { useRoute } from "vue-router";
import { fetchOrder } from "@/services/fetchers";

export default {
  name: "Purchase",

  data() {
    return {
      purchaseDetails: [],
    };
  },

  async created() {
    const route = useRoute();
    const codes = route.params.code;
    const data = await fetchOrder(codes);
    this.purchaseDetails = data;
  },

  methods: {
    goToForm() {
      this.$router.push("/form");
    },
  },
};
</script>
<style lang="css">
@import "../css/purchase.css";
</style>
