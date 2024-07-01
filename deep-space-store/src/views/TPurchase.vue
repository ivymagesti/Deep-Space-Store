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
            Nome do pedido
          </v-card-title>
          <div class="description">
            <v-card-subtitle class="font-weight-bold details-purchase">
              Quantidade de itens</v-card-subtitle
            >
            <v-card-subtitle class="font-weight-bold details-purchase">
              Valor do Pedido</v-card-subtitle
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
export default {
  name: "Purchase",

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
