<template>
  <div class="card-container">
    <LoginComponent/>
  </div>
</template>

<script>
import LoginComponent from 'src/components/LoginComponent.vue';

export default {
    name: "LoginPage",
    components: { LoginComponent }
};
</script>

<style scoped>
  .card-container{
    height: 80vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-size: contain;
    background-image: url("public/images/bg-pattern.png");

  }

</style>
