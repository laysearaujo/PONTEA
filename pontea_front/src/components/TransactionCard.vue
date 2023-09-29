<template>
  <div class="container">
    <div class="transaction-infos flex">
      <img src="/../icons/money.svg" alt="Money Icon" />

      <section class="transaction">
        <p class="transaction-name">Que horas tens?</p>
        <p class="transaction-value">R$ 14,80</p>
        <p class="platform-value">-R$ 4,44 <span>Plataforma Pontea</span></p>
        <p class="transaction-receiver">Laura Araújo</p>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: "TransactionCard",
  props: {},
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
