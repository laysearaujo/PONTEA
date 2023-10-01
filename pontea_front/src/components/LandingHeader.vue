<template>
  <div>
    <q-header view="lHh Lpr lFf">
      <q-toolbar style="height: 80px; background-color: #fbfbfb">
        <q-btn flat to="/landing">
          <img
            src="/spa/images/logo.svg"
            alt="Logo"
            class="logo-image"
            style="max-width: 300px; min-width: 150px; z-index: 1"
          />
        </q-btn>
        <q-space />

        <q-tabs v-model="tab">
          <q-route-tab
            name="sobre"
            label="Sobre nós"
            to="/landing"
            style="color: #616167"
            no-caps
          />
          <q-route-tab v-show="token_front == null"
            name="entrar"
            label="Entrar"
            to="/login"
            style="color: #144ec0"
            no-caps
          />
          <q-route-tab v-show="token_front != null"
            name="home"
            label="Home"
            to="/home"
            style="color: #144ec0"
            no-caps
          />
          <q-route-tab v-show="token_front == null" name="cadastro" to="/cadastro">
            <q-btn  label="Cadastre-se" color="primary" no-caps rounded />
          </q-route-tab>
        </q-tabs>
      </q-toolbar>
    </q-header>
  </div>
</template>

<script>
export default {
  name: "LandingHeader",
  data() {
    return {
      tab: "",
      token_front: localStorage.getItem("token_front")
    };
  },
};
</script>

<style scoped>
* {
  font-family: "Lexend";
}
</style>
