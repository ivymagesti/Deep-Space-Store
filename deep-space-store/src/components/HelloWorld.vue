<template>
  <v-container class="fill-height">
    <v-responsive class="align-center fill-height mx-auto" max-width="900">
      <div class="text-center">
        <div class="text-body-2 font-weight-bold mb-n1">Bem-vindo a</div>
        <h1 class="text-h2 font-weight-bold">Deep Space Store</h1>
      </div>

      <div class="py-4" />

      <v-row>
        <div class="text-my-requests text-body-3 font-weight-bold mb-n1">
          Meus Pedidos
        </div>
        <v-col
          cols="12"
        >
          <v-card
            class="py-4"
            color="surface-variant"
            rounded="lg"
            variant="outlined"
            @click="goToAbout"
          >
            <template v-slot:title>
              <h2 class="text-h5 font-weight-bold name-purchase">Nome do pedido</h2>
            </template>
            <template v-slot:subtitle>
              <div class="text-subtitle-1 font-weight-bold value-purchase">Valor do pedido</div>
            </template>
          </v-card>
        </v-col>
      </v-row>
    </v-responsive>
  </v-container>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  methods: {
    goToAbout() {
      this.$router.push("/001");
    },
  },
});
</script>

<style lang="css">
@import "../css/index.css";
</style>
