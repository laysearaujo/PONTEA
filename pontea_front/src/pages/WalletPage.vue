<template>
  <div class="container">
    <ProfileComponent
      :showBtn="false"
      :showEditBtn="true"
      v-if="perfil"
      :user="perfil"
    />

    <div class="historic">
      <h3 class="title">{{ title }}</h3>

      <section class="flex wallet-info" v-if="perfil">
        <div class="flex">
          <p class="label">Saldo disponível:</p>
          <span class="available-balance info"
            >R$ {{ formatPrice(perfil.credit) }}</span
          >
        </div>
        <div class="flex">
          <p class="label">Valor pago a Pontea:</p>
          <span class="amount-paid info"
            >R$ {{ calculatePercentage(perfil.credit) }}</span
          >
        </div>
        <div class="flex">
          <p class="label">Conta do Educador:</p>
          <span class="educator-account info">
            {{
              perfil.email_verified_at ? "Verificada" : "Não Verificada"
            }}</span
          >
        </div>
      </section>

      <h3 class="title" v-if="showHistory">Histórico de vendas</h3>
      <section v-if="showHistory && sales_history && sales_history.length > 0">
        <div
          class="scrollable-div margin"
          v-for="(transactions, date) in groupedSales(sales_history)"
          :key="date"
        >
          <BalanceComponent
            :date="date"
            :totalPrice="calculateTotalPrice(transactions)"
          />
          <div v-for="sale in transactions" :key="sale.id">
            <TransactionCard
              :title="sale.activity.title"
              :price="sale.activity.price"
              :customer="sale.user.name"
            />
          </div>
        </div>
      </section>
      <div v-if="!showHistory">
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
      sales_history: null,
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
        console.log(jsonData);
        this.perfil = jsonData.user;
        this.sales_history = jsonData.sales_history;
      } catch (error) {
        console.error(error);
      }
    },
    formatPrice(value) {
      return value.toLocaleString("pt-BR", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });
    },
    groupedSales(sales_history) {
      const grouped = {};
      sales_history.forEach((sale) => {
        const date = new Date(sale.created_at).toLocaleDateString();
        if (!grouped[date]) {
          grouped[date] = [];
        }
        grouped[date].push(sale);
      });

      return grouped;
    },
    calculateTotalPrice(transactions) {
      return transactions
        .reduce((total, sale) => total + parseFloat(sale.bought_by), 0)
        .toFixed(2);
    },
    calculatePercentage(value) {
      const percentage = value * 0.3;
      return percentage.toLocaleString("pt-BR", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });
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

.margin {
  padding-bottom: 10px;
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
