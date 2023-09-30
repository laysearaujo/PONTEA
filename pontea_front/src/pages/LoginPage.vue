<template>
  <div class="card-container">
    <AuthComponent
      :cadastro="false"
      titulo="Boas-Vindas!"
      descricao="Entre na sua conta e acesse a nossa biblioteca de atividades completa."
      img_src="public/images/loginpage-image.jpg"
      @loginSubmit="onSubmit">
    <span v-if="erroLogin" style="color: red;"> {{ errorMessage }}</span>
    </AuthComponent>
  </div>
</template>

<script>
import AuthComponent from "src/components/AuthComponent.vue";
localStorage.clear();

export default {
  name: "LoginPage",
  components: { AuthComponent },
  data() {
    return {
      erroLogin: false,
      errorMessage: ''
    };
  },
  methods: {
    onSubmit(dados) {
      this.erroLogin = false
      this.errorMessage = ''
      const headers = {
        "Content-Type": "application/json",
        Accept: "application/json",
      };

      let body = {
        email: dados.email,
        password: dados.senha,
      };

      fetch("/api/login", {
        method: "POST",
        headers,
        body: JSON.stringify(body),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Erro na resposta da API");
          } else {
          }
          return response.json();
        })
        .then((data) => {
          console.log(data);
          if (data.token) {
            // Armazene o token no localStorage
            localStorage.setItem("token", data.token);
            this.$router.push("/home");
          } else{
            this.erroLogin = true
            this.errorMessage = data.message
          }
        })
        .catch((error) => {
          console.error("Erro na solicitação à API:", error);
        });
    },
  },
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
