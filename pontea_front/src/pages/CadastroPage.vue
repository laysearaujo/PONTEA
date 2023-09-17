<template>
  <div class="card-container">
    <AuthComponent
      :cadastro="true"
      titulo="Cadastre-se"
      descricao="e faça parte da comunidade Pontea."
      img_src="public/images/cadastro-page.jpg"
    />
  </div>
</template>

<script>
import AuthComponent from "src/components/AuthComponent.vue";

export default {
  name: "CadastroPage",
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
