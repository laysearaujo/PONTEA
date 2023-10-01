<template>
  <div class="container">
    <div class="transaction-infos flex">
      <img src="/spa/icons/money.svg" alt="Money Icon" />

      <section class="transaction">
        <p class="transaction-name">{{ title }}</p>
        <p class="transaction-value">R$ {{ formatPrice }}</p>
        <p class="platform-value">
          -R$ {{ calculatePercentage }} <span>Plataforma Pontea</span>
        </p>
        <p class="transaction-receiver">{{ customer }}</p>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: "TransactionCard",
  props: {
    title: String,
    price: Number,
    customer: String,
  },
  computed: {
    formatPrice() {
      return this.price.toLocaleString("pt-BR", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });
    },
    calculatePercentage() {
      const percentage = this.price * 0.3;
      return percentage.toLocaleString("pt-BR", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });
    },
  },
};
</script>

<style scoped>
.flex {
  display: flex;
  align-items: flex-start;
  gap: 8px;
}

.flex img {
  margin-top: 4px;
}

.transaction {
  font-family: Lexend;
}

.transaction-name {
  font-size: 15px;
  font-weight: 400;
}

.transaction-value {
  font-size: 14px;
  font-weight: 500;
  color: #65a115;
}

.platform-value {
  font-size: 14px;
  font-weight: 500;
  color: #616167;
}

.transaction-receiver {
  font-size: 14px;
  font-weight: 300;
  color: #3c3c3f;
}
</style>
