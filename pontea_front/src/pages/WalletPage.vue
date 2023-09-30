<template>
  <div class="container">
    <ProfileComponent :showBtn="false" v-if="perfil" :user="perfil" />

    <div class="historic">
      <h3 class="title">{{ title }}</h3>

      <section class="flex wallet-info">
        <div class="flex">
          <p class="label">Saldo disponível:</p>
          <span class="available-balance info">R$ 62,16</span>
        </div>
        <div class="flex">
          <p class="label">Valor pago a Pontea:</p>
          <span class="amount-paid info">R$ 26,64</span>
        </div>
        <div class="flex">
          <p class="label">Conta do Educador:</p>
          <span class="educator-account info">Verificada</span>
        </div>
      </section>

      <h3 class="title" v-if="showHistory">Histórico de vendas</h3>
      <div class="scrollable-div" v-if="showHistory">
        <BalanceComponent />
        <TransactionCard />
        <TransactionCard />
        <BalanceComponent />
        <TransactionCard />
        <TransactionCard />
        <TransactionCard />
        <TransactionCard />
        <TransactionCard />
        <TransactionCard />
        <TransactionCard />
        <TransactionCard />
        <TransactionCard />
        <TransactionCard />
        <TransactionCard />
      </div>
      <div v-else>
        <TransferComponent />
      </div>
    </div>

    <div class="bottom" v-if="showHistory">
      <q-btn
        class="q-px-xl q-py-sm rounded"
        label="Resgatar saldo"
        type="submit"
        color="primary"
        @click="changePage(showHistory)"
      />
    </div>
  </div>
</template>

<script>
import ProfileComponent from "src/components/ProfileComponent.vue";
import TransactionCard from "src/components/TransactionCard.vue";
import BalanceComponent from "src/components/BalanceComponent.vue";
import TransferComponent from "src/components/TransferComponent.vue";

export default {
  name: "WalletPage",
  components: {
    ProfileComponent,
    TransactionCard,
    BalanceComponent,
    TransferComponent,
  },
  data() {
    return {
      showHistory: true,
      title: "Minha carteira",
      perfil: null,
    };
  },
  async mounted() {
    try {
      await this.getPerfilCliente();
    } catch (error) {
      console.error(error);
    }
  },
  methods: {
    changePage(value) {
      if (value) {
        this.title = "Transferência";
      } else {
        this.title = "Minha carteira";
      }
      this.showHistory = !value;
    },
    async getToken() {
      const token = localStorage.getItem("token");
      return token;
    },
    async getPerfilCliente() {
      try {
        const token = await this.getToken();
        const headers = {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        };
        const response = await fetch("/api/profile", {
          method: "GET",
          headers,
        });
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const jsonData = await response.json(); // Aguarde a resolução da promessa e obtenha os dados JSON diretamente
        // Agora você tem acesso direto ao objeto JSON
        console.log("perfil", jsonData);
        this.perfil = jsonData.user;
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  line-height: auto !important;
}

p,
h2 {
  margin: 0;
  line-height: auto !important;
}

.container {
  display: flex;
  flex-direction: row;
}

.flex {
  display: flex;
  align-items: center;
  gap: 8px;
}

.historic {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 30px;
  margin-left: 320px;
}

.wallet-info {
  display: flex;
  justify-content: space-between;
}

.label {
  font-family: Lexend;
  font-weight: 300;
  font-size: 12.8px;
  color: #144ec0;
}

.info {
  font-size: 16px;
  font-weight: 500;
}

.available-balance {
  color: #65a115;
}

.amount-paid {
  color: #616167;
}

.educator-account {
  color: #144ec0;
  font-size: 12.8px;
}

.bottom {
  background-color: white;
  width: 100%;
  height: 150px;
  position: fixed;
  left: 0;
  bottom: 0;
  box-shadow: 0px -4px 20px 0px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: flex-start;
  justify-content: center;
  z-index: 1;
}

.rounded {
  border-radius: 20px;
  margin-top: 16px;
}
</style>
