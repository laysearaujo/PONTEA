<template>
    <div>
      <q-card class="card-container">
        <q-card-section horizontal>
          <q-card-section class="left-card">
            <q-card-section>
              <q-form class="form"
                @submit="submitForm"
              >
                <q-card-section class="descr">
                  <span class="boas-vindas">Boas-Vindas!</span>
                  <p>
                    Entre na sua conta e acesse a nossa bibilioteca de atividades
                    completa.
                  </p>
                </q-card-section>

                <q-card-section class="fields">
                  <q-input type="email" placeholder="Email" name="email" v-model="email" outlined dense/>
                  <q-input :type="senhaOculta? 'password': 'text'" placeholder="Senha" name="senha" v-model="senha" dense outlined style="margin: 16px 0px;">
                    <template v-slot:append >
                      <p @click="senhaOculta=!senhaOculta" class="cursor-pointer">
                        {{ senhaOculta ? 'Mostrar' : 'Ocultar' }}
                      </p>
                    </template>
                  </q-input>

                  <q-btn label="Esqueceu a senha?" flat no-caps disable />
                </q-card-section>

                <q-card-section>
                  <q-btn
                    label="Entrar"
                    type="submit"
                    no-caps
                    class="btn-entrar"
                  />
                </q-card-section>
              </q-form>
            </q-card-section>

            <q-card-section class="footer">
              <span>Não tem uma conta?</span>
              <q-btn label="Cadastre-se agora" no-caps flat style="color:#144EC0 ;"/>
            </q-card-section>
          </q-card-section>

          <q-card-section class="imagem"> <q-img :src="url" width="392px" height="100%" style="border-radius: 0px 20px 20px 0px;"/> </q-card-section>
        </q-card-section>
      </q-card>
    </div>
</template>

<script>
export default {
  name: "LoginComponent",
  data() {
    return {
      email: "",
      senha: "",
      senhaOculta: true,
      url: "public/images/loginpage-image.jpg"
    }
  },
  methods: {
    submitForm(){
      console.log(this.email, this.senha)
    }
  },
};
</script>

<style scoped>
* {
  margin: 0%;
  padding: 0%;
  font-family: "Lexend";
}

.card-container{
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

.descr{
  display: grid;
  gap: 8px;
  text-align: center;

}

.boas-vindas{
  color: #144EC0;
  font-size: 20px;
}

p{
  font-size: 12.8px;
}

.btn-entrar {
  width: 100%;
  background-color: #144EC0;
  color: #fbfdff;
  border-radius: 8px;
}

.footer{
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}

</style>
