<template>
  <div class="container">
    <div>
      <ProfileComponent :showBtn="true" v-if="perfil" :user="perfil" />
    </div>

    <div class="available-activities" v-if="purchased_activities">
      <h2 class="title">Atividades disponíveis</h2>

      <div class="flex" v-if="purchased_activities.length > 0">
        <ActivityCard
          style="cursor: pointer"
          v-for="purchased_activity in purchased_activities"
          :id="purchased_activity.id"
          :key="purchased_activity.title"
          :titulo="purchased_activity.title"
          :nivel="purchased_activity.level_id"
          :tipoDeEducacao="purchased_activity.age_group_id"
          faixaEtaria="0 a 1 ano e 6 meses"
          :nota="purchased_activity.level_id"
          :preco="purchased_activity.price"
          @click="redirectToDetails(purchased_activity)"
          class="card-atividade"
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
      purchased_activities: null,
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
        this.perfil = jsonData.user;
        this.purchased_activities = jsonData.purchased_activities;

        console.log(this.purchased_activities);
      } catch (error) {
        console.error(error);
      }
    },
  },
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
