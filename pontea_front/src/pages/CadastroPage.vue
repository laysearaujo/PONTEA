<template>
  <div class="card-container">
    <q-dialog v-model="cadastroSucesso">
      <q-card style="padding: 10px"> Cadastro realizado com sucesso! </q-card>
    </q-dialog>

    <q-dialog v-model="erroCadastro">
      <q-card style="padding: 10px">
        <span style="color: red"
          >Erro no cadastro. Verifique os dados e tente novamente.</span
        >
        <q-card-actions align="right">
          <q-btn flat label="OK" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>

    <AuthComponent
      :cadastro="true"
      titulo="Cadastre-se"
      descricao="e faça parte da comunidade Pontea."
      img_src="/images/cadastro-page.jpg"
      @cadastroSubmit="onSubmit"
    />
  </div>
</template>

<script>
import AuthComponent from "src/components/AuthComponent.vue";

export default {
  name: "CadastroPage",
  components: { AuthComponent },
  data() {
    return {
      cadastroSucesso: false,
      erroCadastro: false,
    };
  },
  methods: {
    onSubmit(dados) {
      const headers = {
        "Content-Type": "application/json",
        Accept: "application/json",
      };

      let body = {
        name: dados.nome,
        email: dados.email,
        password: dados.senha,
        password_confirmation: dados.confSenha,
      };

      fetch("/api/register", {
        method: "POST",
        headers,
        body: JSON.stringify(body),
      })
        .then((response) => {
          if (!response.ok) {
            this.erroCadastro = true;
            throw new Error("Erro na resposta da API");
          } else {
            this.showCadastroSucesso();
          }
          return response.json();
        })
        .then((data) => {
          console.log(data);
        })
        .catch((error) => {
          console.error("Erro na solicitação à API:", error);
        });
    },

    showCadastroSucesso() {
      this.cadastroSucesso = true;
      setTimeout(() => {
        this.$router.push("/login");
      }, 3000);
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
  background-image: url("/images/bg-pattern.png");
}
</style>
