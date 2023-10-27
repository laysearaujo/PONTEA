<template>
  <div>
    <q-card class="card-container" flat>
      <q-card-section horizontal>
        <q-card-section class="left-card">
          <q-card-section>
            <q-form class="form" @submit.prevent="submitForm()">
              <q-card-section class="descr">
                <span class="title">{{ titulo }}</span>
                <p>{{ descricao }}</p>
              </q-card-section>

              <q-card-section class="fields">
                <slot>
                  <!-- slot para mostrar a mensagem de erro -->
                </slot>
                <q-input
                  type="text"
                  v-if="cadastro"
                  placeholder="Nome Completo"
                  name="nome"
                  v-model="nome"
                  outlined
                  dense
                  required
                />
                <q-input
                  type="text"
                  v-if="cadastro"
                  placeholder="Profissão"
                  name="profissao"
                  v-model="profissao"
                  outlined
                  dense
                />
                <q-input
                  type="email"
                  placeholder="Email"
                  name="email"
                  v-model="email"
                  outlined
                  dense
                  required
                />
                <q-input
                  :type="senhaOculta ? 'password' : 'text'"
                  placeholder="Senha"
                  name="senha"
                  v-model="senha"
                  dense
                  outlined
                  required
                >
                  <template v-slot:append>
                    <p
                      @click="senhaOculta = !senhaOculta"
                      class="cursor-pointer"
                    >
                      {{ senhaOculta ? "Mostrar" : "Ocultar" }}
                    </p>
                  </template>
                </q-input>

                <q-input
                  :type="confSenhaOculta ? 'password' : 'text'"
                  placeholder="Cofirmar senha"
                  name="confirmar-senha"
                  v-model="confSenha"
                  dense
                  outlined
                  required
                  v-if="cadastro"
                >
                  <template v-slot:append>
                    <p
                      @click="confSenhaOculta = !confSenhaOculta"
                      class="cursor-pointer"
                    >
                      {{ confSenhaOculta ? "Mostrar" : "Ocultar" }}
                    </p>
                  </template>
                </q-input>

                <q-btn
                  label="Esqueceu a senha?"
                  flat
                  no-caps
                  disable
                  v-show="!cadastro"
                  style="color: #616167"
                />
              </q-card-section>

              <q-card-section>
                <q-btn
                  :label="cadastro ? 'Cadastrar' : 'Entrar'"
                  type="submit"
                  no-caps
                  class="submit-btn"
                />
              </q-card-section>
            </q-form>
          </q-card-section>
          <q-card-section class="footer" v-show="!cadastro">
            <span>Não tem uma conta?</span>
            <q-btn
              label="Cadastre-se agora"
              no-caps
              flat
              style="color: #144ec0"
              to="cadastro"
            />
          </q-card-section>
        </q-card-section>

        <q-card-section class="imagem">
          <q-img
            :src="url"
            width="392px"
            height="100%"
            style="border-radius: 0px 20px 20px 0px"
          />
        </q-card-section>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
export default {
  name: "AuthComponent",
  props: {
    cadastro: Boolean, // Define se o componente é usado para cadastro ou login
    titulo: String, // Título do componente
    descricao: String, // Descrição do componente
    img_src: String, // src para imagem que será usada
  },
  data() {
    return {
      nome: "",
      profissao: "",
      email: "",
      senha: "",
      senhaOculta: true,
      confSenha: "",
      confSenhaOculta: true,
      url: this.img_src,
    };
  },
  methods: {
    submitForm() {
      if (this.cadastro) {
        // Lógica para o formulário de cadastro do usuário
        let dados = {
          nome: this.nome,
          email: this.email,
          senha: this.senha,
          confSenha: this.confSenha,
        };
        this.$emit("cadastroSubmit", dados);
      } else {
        // Lógica para o formulário de login
        let dados = {
          email: this.email,
          senha: this.senha,
        };
        this.$emit("loginSubmit", dados);
      }
    },
  },
};
</script>

<style scoped>
* {
  margin: 0%;
  padding: 0%;
  font-family: "Lexend";
}

.card-container {
  border-radius: 20px;
}
.left-card {
  width: 392px;
  display: grid;
  padding: 16px;
  gap: 40px;
  background-color: #fbfdff;
  margin-right: 20px;
}

.form {
  display: grid;
  gap: 48px;
  padding: 32px 0px;
}

.descr {
  display: grid;
  gap: 8px;
  text-align: center;
}

.title {
  color: #144ec0;
  font-size: 20px;
  font-weight: 500;
}

p {
  font-size: 12.8px;
  font-weight: 500;
}

.fields {
  display: grid;
  gap: 16px;
  justify-items: left;
}

.q-input {
  width: 100%;
}

.submit-btn {
  width: 100%;
  background-color: #144ec0;
  color: #fbfdff;
  border-radius: 8px;
}

.footer {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}
</style>
