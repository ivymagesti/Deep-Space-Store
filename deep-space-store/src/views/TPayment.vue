<template>
  <v-container class="fill-height">
    <v-responsive class="align-center fill-height mx-auto" max-width="900">
      <v-row>
        <div class="text-my-requests text-body-3 font-weight-bold mb-n1">
          Pagamento
        </div>
        <v-col cols="12">
          <v-card
            class="py-4"
            color="surface-variant"
            rounded="lg"
            variant="outlined"
          >
            <v-text-field
              v-model="cpf"
              label="CPF"
              :error-messages="cpfErrors"
            ></v-text-field>
            <v-btn @click="validateCpf()"> Validar CPF </v-btn>

            <v-container>
              <v-radio-group v-model="selectedPaymentMethod">
                <v-radio label="Pix" value="pix"></v-radio>
                <v-radio label="Boleto" value="boleto"></v-radio>
                <v-radio label="Cartão de Crédito" value="card"></v-radio>
              </v-radio-group>

              <div v-if="selectedPaymentMethod === 'pix'">
                <v-img src="../assets/images/qrcode.png" height="200px"></v-img>
              </div>

              <div v-if="selectedPaymentMethod === 'boleto'">
                <v-img src="../assets/images/boleto.png" height="300px"></v-img>
              </div>

              <div v-if="selectedPaymentMethod === 'card'">
                <v-form v-model="valid">
                  <v-container>
                    <v-row>
                      <v-col cols="12" md="4">
                        <v-text-field
                          v-model="formCard.cardNumber"
                          :rules="[rules.required, rules.number]"
                          label="Número do Cartão"
                          required
                          :counter="16"
                          hide-details
                        ></v-text-field>
                      </v-col>

                      <v-col cols="12" md="4">
                        <v-text-field
                          v-model="formCard.cardCvv"
                          :rules="[rules.required, rules.number]"
                          label="CVV"
                          required
                          :counter="3"
                          hide-details
                        ></v-text-field>
                      </v-col>

                      <v-col cols="12" md="4">
                        <v-text-field
                          v-model="formCard.cardValidate"
                          :rules="[rules.required, rules.number]"
                          label="Validade"
                          required
                          :counter="10"
                          hide-details
                        ></v-text-field>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-form>
              </div>
            </v-container>
          </v-card>
        </v-col>
      </v-row>
    </v-responsive>
  </v-container>
</template>

<script>
export default {
  name: "Payment",
  data() {
    return {
      selectedPaymentMethod: "",
      cpf: "",
      cpfErrors: [],
      formCard: {
        cardNumber: "",
        cardCvv: "",
        cardValidate: "",
      },
      rules: {
        required: (value) => !!value || "Required.",
        number: (value) => {
          const pattern = /^\d+$/;
          return pattern.test(value) || "Only numbers";
        },
      },
    };
  },
  methods: {
    validateCpf() {
      const strCPF = String(this.cpf).replace(/[^\d]/g, "");
      let sum = 0;
      let rest;
      let i;
      this.cpfErrors = [];

      if (strCPF == "00000000000") {
        this.cpfErrors.push("CPF inválido.");
        return false;
    }
      for (i = 1; i <= 9; i++)
        sum = sum + parseInt(strCPF.substring(i - 1, i)) * (11 - i);
      rest = (sum * 10) % 11;

      if (rest == 10 || rest == 11) rest = 0;
      if (rest != parseInt(strCPF.substring(9, 10))) {
        this.cpfErrors.push("CPF inválido.");
        return false;
    }

      sum = 0;
      for (i = 1; i <= 10; i++)
        sum = sum + parseInt(strCPF.substring(i - 1, i)) * (12 - i);
      rest = (sum * 10) % 11;

      if (rest == 10 || rest == 11) rest = 0;
      if (rest != parseInt(strCPF.substring(10, 11))) {
        this.cpfErrors.push("CPF inválido.");
        return false;
    }
      return true;
    },
  },
};
</script>

<style lang="css">
@import "../css/payment.css";
</style>
