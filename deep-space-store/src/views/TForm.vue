<template>
  <v-container class="fill-height">
    <v-card class="mx-auto">
      <v-form v-model="valid" @submit.prevent="checkForm">
        <v-container>
          <v-card-title class="text-h5 name-purchase font-weight-bold">
            Dados Pessoais
          </v-card-title>
          <v-row>
            <v-col cols="12" md="4">
              <v-text-field
                v-model="formData.name"
                :rules="[rules.required, rules.name]"
                label="Name"
                required
                :counter="10"
                hide-details
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="4">
              <v-text-field
                v-model="formData.lastName"
                :rules="[rules.required, rules.name]"
                label="Sobrenome"
                required
                :counter="10"
                hide-details
              ></v-text-field>
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="12" md="4">
              <v-text-field
                v-model="formData.email"
                :rules="[rules.email]"
                hide-details
                label="E-mail (opcional)"
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="4">
              <v-text-field
                v-model="formData.phone"
                :rules="[rules.required, rules.phone]"
                label="Telefone"
                hide-details
                required
              ></v-text-field>
            </v-col>
          </v-row>
        </v-container>

        <v-container>
          <v-card-title class="text-h5 name-purchase font-weight-bold">
            Dados de Entrega
          </v-card-title>
          <v-row>
            <v-col cols="12" md="4">
              <v-text-field
                v-model="cep"
                :rules="[rules.required, rules.cep]"
                label="CEP"
                maxlength="8"
                required
              ></v-text-field>
              <v-btn @click="getCep()">Buscar Endereço</v-btn>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" md="4">
              <v-text-field
                v-model="formData.address.street"
                :rules="[rules.required]"
                label="Rua"
                hide-details
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="4">
              <v-text-field
                v-model="formData.address.number"
                :rules="[rules.required]"
                label="Número"
                hide-details
                required
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" md="4">
              <v-text-field
                v-model="formData.address.complement"
                label="Complemento (opcional)"
                hide-details
              ></v-text-field>
            </v-col>
          </v-row>
        </v-container>

      </v-form>
      <div class="line"></div>
      <div class="checkout">
        <v-btn type="submit" :disabled="!valid" @click="checkForm()"
          >Submit</v-btn
        >
      </div>
    </v-card>
  </v-container>
</template>

<script>
import axios from "axios";

export default {
  name: "Form",

  data() {
    return {
      valid: false,
      code: '001',
      formData: {
        name: "",
        lastName: "",
        email: "",
        phone: "",
        cep: "",
        address: {
          street: "",
          number: "",
          complement: "",
        },
      },
      rules: {
        required: (value) => !!value || "Required.",
        email: (value) => {
          const pattern = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
          return pattern.test(value) || "Invalid e-mail.";
        },
        name: (value) => {
          const pattern = /^[a-zA-Z\s]+$/;
          return (
            pattern.test(value) || "Name must only contain letters and spaces."
          );
        },
        phone: (value) => {
          const pattern = /^\d{11}$/;
          return pattern.test(value) || "Phone must be 11 digits.";
        },
        cep: (value) => {
          const pattern = /^[0-9]{8}$/;
          return pattern.test(value) || "Invalid address.";
        },
      },
    };
  },

  methods: {
    getCep() {
      const url = `https://viacep.com.br/ws/${this.cep}/json/`;
      axios
        .get(url)
        .then((response) => {
          const data = response.data;
          if (!data.erro) {
            this.address = data;
          } else {
            alert("Cep não encontrado");
          }
        })
        .catch((error) => {
          console.error(error);
        });
    },
    watch: {
      cep: function (newCep, oldCep) {
        if (newCep.length === 8) this.getCep();
        else this.address = null;
      },
    },

    checkForm() {
      fetch(`https://api.deepspacestore.com/offers/${this.code}/create_order`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(this.formData),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Success:", data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });

        this.$router.push("/payment");
    },
  },
};
</script>

<style lang="css">
@import "../css/form.css";
</style>
