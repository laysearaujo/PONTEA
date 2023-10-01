<template>
  <div class="container">
    <p class="date">{{ date }}</p>
    <p class="balance">
      Saldo do dia: <span>R${{ totalPrice }}</span>
    </p>
  </div>
</template>

<script>
export default {
  name: "BalanceComponent",
  props: {
    date: Date,
    totalPrice: Number,
  },
  methods: {
    formatDate(value) {
      const date = new Date(value);
      const day = String(date.getDate()).padStart(2, "0");
      const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are zero-based
      const year = date.getFullYear();
      const hours = String(date.getHours()).padStart(2, "0");
      const minutes = String(date.getMinutes()).padStart(2, "0");
      return `${month}/${day}/${year} ${hours}:${minutes}`;
    },
  },
};
</script>

<style scoped>
.container {
  width: 100%;
  border-bottom: 1px solid black;
  display: flex;
  justify-content: space-between;
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
</style>
