<template>
  <div class="container">
    <p class="date">Hoje</p>
    <p class="balance">Saldo do dia: <span>R$10,36</span></p>
  </div>
</template>

<script>
export default {
  name: "BalanceComponent",
  props: {},
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
