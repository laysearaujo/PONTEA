<template>
  <div class="card-container">
    <q-dialog v-model="erroSenha">
      <q-card style="padding: 10px">
        Senha incorreta
        <q-card-actions align="right">
          <q-btn flat label="OK" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>

    <q-dialog v-model="erroEmail">
      <q-card style="padding: 10px">
        Email não cadastrado
        <q-card-actions align="right">
          <q-btn flat label="OK" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>

    <AuthComponent
      :cadastro="false"
      titulo="Boas-Vindas!"
      descricao="Entre na sua conta e acesse a nossa biblioteca de atividades completa."
      img_src="public/images/loginpage-image.jpg"
      @loginSubmit="onSubmit"
    />
  </div>
</template>

<script>
import AuthComponent from "src/components/AuthComponent.vue";

export default {
  name: "LoginPage",
  components: { AuthComponent },
  data() {
    return {
      erroSenha: false,
      erroEmail: false,
    };
  },
  methods: {
    onSubmit(dados) {
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
            this.erroLogin = true;
            throw new Error("Erro na resposta da API");
          } else {
          }
          return response.json();
        })
        .then((data) => {
          console.log(data);
          if (data.message === "Incorrect password") {
            this.erroSenha = true;
          } else if (
            data.message === "We could not find a user with that email"
          ) {
            this.erroEmail = true;
          }
          if (data.token) {
            // Armazene o token no localStorage
            localStorage.setItem("token", data.token);
            this.$router.push("/home");
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
