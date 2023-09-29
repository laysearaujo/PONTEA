<template>
  <div class="container">
    <div>
      <ProfileComponent :showBtn="true" />
    </div>

    <div class="available-activities">
      <h2 class="title">Atividades disponíveis</h2>

      <div class="flex">
        <ActivityCard
          titulo="Dominó de Sílabas"
          nivel="2"
          tipoDeEducacao="Educação Infantil"
          faixaEtaria="4 anos a 5 anos"
          class="card-atividade"
          nota="2,2"
          preco="25,00"
        />
        <ActivityCard
          titulo="Dominó de Sílabas"
          nivel="2"
          tipoDeEducacao="Educação Infantil"
          faixaEtaria="4 anos a 5 anos"
          class="card-atividade"
          nota="3,0"
          preco="32,00"
        />
        <ActivityCard
          titulo="Dominó de Sílabas"
          nivel="2"
          tipoDeEducacao="Educação Infantil"
          faixaEtaria="4 anos a 5 anos"
          class="card-atividade"
          nota="1,0"
          preco="10,00"
        />
        <ActivityCard
          titulo="Dominó de Sílabas"
          nivel="2"
          tipoDeEducacao="Educação Infantil"
          faixaEtaria="4 anos a 5 anos"
          class="card-atividade"
          nota="5,0"
          preco="55,00"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ProfileComponent from "src/components/ProfileComponent.vue";
import ActivityCard from "src/components/ActivityCard.vue";

export default {
  name: "PerfilCliente",
  components: {
    ProfileComponent,
    ActivityCard,
  },
  async mounted() {
    try {
      await this.getPerfilCliente();
    } catch (error) {
      console.error(error);
    }
  },
  data() {
    return {
      perfil: null,
    };
  },
  methods: {
    async getToken() {
      const token = localStorage.getItem("token");
      return token;
    },
    async getPerfilCliente() {
      try {
        const token = await this.getToken();
        const headers = {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        };
        const response = await fetch("/api/profile", {
          method: "GET",
          headers,
        });
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const jsonData = await response.json(); // Aguarde a resolução da promessa e obtenha os dados JSON diretamente
        // Agora você tem acesso direto ao objeto JSON
        console.log("perfil", jsonData);
        this.perfil = jsonData;
      } catch (error) {
        console.error(error);
      }
    },
  },
  data() {},
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  line-height: auto !important;
}

p,
h2 {
  margin: 0;
  line-height: auto !important;
}

.container {
  display: flex;
  flex-direction: row;
}

.available-activities {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 30px;
  margin-left: 320px;
}
</style>
