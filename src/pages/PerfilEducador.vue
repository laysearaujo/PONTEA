<template>
  <div class="container">
    <div>
      <ProfileComponent
        :showBtn="false"
        :showEditBtn="false"
        v-if="perfil"
        :user="perfil"
      />
    </div>

    <section class="activities">
      <div class="purchased-activities" v-if="created_activities">
        <h2 class="title">Atividades disponíveis</h2>
        <div class="flex" v-if="created_activities.length > 0">
          <ActivityCard
            style="cursor: pointer"
            v-for="created_activity in created_activities"
            :id="created_activity.id"
            :key="created_activity.title"
            :titulo="created_activity.title"
            :nivel="created_activity.level_id"
            :tipoDeEducacao="created_activity.age_group_id"
            faixaEtaria="0 a 1 ano e 6 meses"
            :nota="created_activity.level_id"
            :preco="created_activity.price"
            @click="redirectToDetails(created_activity)"
            class="card-atividade"
          />
        </div>
        <div v-else>
          <p class="not-found">Nenhuma atividade do educador encontrada!</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import ProfileComponent from "src/components/ProfileComponent.vue";
import ActivityCard from "src/components/ActivityCard.vue";

export default {
  name: "PerfilEducador",
  components: {
    ProfileComponent,
    ActivityCard,
  },
  async mounted() {
    try {
      await this.getPerfilEducador();
    } catch (error) {
      console.error(error);
    }
  },
  data() {
    return {
      perfil: null,
      created_activities: null,
    };
  },
  methods: {
    async gettoken_front() {
      const token_front = localStorage.getItem("token_front");
      return token_front;
    },
    async getPerfilEducador() {
      try {
        const token_front = await this.gettoken_front();
        const headers = {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token_front}`,
        };
        const response = await fetch(`/api/teacher/${this.$route.params.id}`, {
          method: "GET",
          headers,
        });
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const jsonData = await response.json(); // Aguarde a resolução da promessa e obtenha os dados JSON diretamente
        // Agora você tem acesso direto ao objeto JSON
        console.log("perfil", jsonData);
        this.perfil = jsonData.data;
        this.created_activities = jsonData.data.created_activities;
      } catch (error) {
        console.error(error);
      }
    },
    redirectToDetails(obj) {
      const objetoString = JSON.stringify(obj);
      this.$router.push({
        name: "DetailsPage",
        params: { dados: objetoString },
      });
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

.available-activities,
.purchased-activities {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 30px;
}

.activities {
  margin-left: 320px;
}

.new-activity {
  width: 186px;
  height: 260px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px dashed #144ec0;
  border-radius: 8px;
  cursor: pointer;
}

.not-found {
  font-family: Lexend;
  font-size: 20px;
  font-weight: 500;
}
</style>
