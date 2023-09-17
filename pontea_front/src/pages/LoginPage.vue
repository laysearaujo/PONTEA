<template>
  <div class="card-container">
    <AuthComponent
      :cadastro="false"
      titulo="Boas-Vindas!"
      descricao="Entre na sua conta e acesse a nossa biblioteca de atividades completa."
      img_src="public/images/loginpage-image.jpg"
    />
  </div>
</template>

<script>
import AuthComponent from "src/components/AuthComponent.vue";

export default {
  name: "LoginPage",
  components: { AuthComponent },
};
</script>

<style scoped>
.card-container {
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-size: contain;
  background-image: url("public/images/bg-pattern.png");
}
</style>
