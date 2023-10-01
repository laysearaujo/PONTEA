<template>
  <div class="wrap">
    <StepComponent :currentStep="currentStep" />
    <form class="form" @submit.prevent="submitForm()" v-if="currentStep === 1">
      <div class="field">
        <label>Código do Banco</label>
        <q-input
          type="number"
          name="code"
          v-model="code"
          outlined
          dense
          required
          class="input bg-input"
        />
      </div>

      <div class="field">
        <label>Agência</label>
        <q-input
          type="number"
          name="agency"
          v-model="agency"
          outlined
          dense
          required
          class="input bg-input"
        />
      </div>

      <div class="field">
        <label>Conta corrente</label>
        <q-input
          type="number"
          name="account"
          v-model="account"
          outlined
          dense
          required
          class="input"
        />
      </div>

      <q-btn
        class="q-px-xl q-py-sm transfer-btn"
        label="Transferir"
        type="submit"
        color="primary"
      />
    </form>
  </div>

  <div v-if="currentStep === 2" class="success">
    <h3 class="success-title">Saldo transferido com sucesso!</h3>
    <p class="success-message">
      Em até 72h seu saldo estará disponivel na conta solicitada.
    </p>
  </div>
</template>

<script>
import StepComponent from "src/components/StepComponent.vue";

export default {
  name: "TransferComponent",

  data() {
    return {
      currentStep: 1,
      code: "",
      agency: "",
      account: "",
    };
  },
  components: {
    StepComponent,
  },
  methods: {
    async submitForm() {
      const url = "api/removeCredit";
      const token_front = localStorage.getItem("token_front");
      const headers = {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token_front}`,
      };

      await fetch(url, {
        method: "GET",
        headers,
      })
        .then((response) => {
          if (!response.ok) {
            console.log(response.json());
            throw new Error("Erro na resposta da API");
          } else {
          }
          return response.json();
        })
        .then(() => {
          this.currentStep++;

          this.code = "";
          this.agency = "";
          this.account = "";

          setTimeout(() => {
            this.$router.push({
              name: "HomePage",
            });
          }, 1000);
        })
        .catch((error) => {
          console.error("Erro na solicitação à API:", error);
        });
    },
  },
  props: {},
};
</script>

<style scoped>
.wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.date {
  font-family: Lexend;
  font-size: 14px;
  font-weight: 300;
  color: #3c3c3f;
}

.balance {
  font-family: Lexend;
  font-size: 14px;
  font-weight: 300;
  color: #3c3c3f;
}

.balance span {
  font-weight: 500;
}

.form {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  margin-top: 10px;
}

.field {
  text-align: center;
  font-family: Lexend;
  color: #3c3c3f;
  font-weight: 500;
}
.field label {
  margin-top: 15px;
}

.input {
  border-radius: 8px;
  border: 0.896px solid var(--textos-cinza-claro, #b8b9bc);
}

.bg-input {
  width: 389px;
}

.success {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.success-title {
  font-family: Lexend;
  font-size: 14px;
  font-weight: 500;
  line-height: 16px;
}
.success-message {
  font-family: Lexend;
  font-weight: 300;
  line-height: 16px;
  font-size: 14px;
  text-align: center;
}

.transfer-btn {
  border-radius: 20px;
}
</style>
