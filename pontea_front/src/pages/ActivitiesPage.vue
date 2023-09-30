<template>

  <div class="q-pa-md row items-start q-gutter-md">
    <div class="cards-atividades" v-if="activitys.length > 0">
      <ActivityCard
        style="cursor: pointer;"
        v-for="activity in activitys"
        :id = "activity.id"
        :key="activity.title"
        :titulo = "activity.title"
        :nivel = "activity.level.id"
        :tipoDeEducacao = "activity.age_group.id"
        :faixaEtaria = "activity.age_group.title"
        :nota = "activity.note"
        :preco = "activity.price"
        :CampoDeExperiencia = "activity.area.title"
        class="card-atividade"
        @click="redirectToDetails(activity)"
      />
    </div>
  </div>
</template>

<script>
import ActivityCard from 'src/components/ActivityCard.vue';

export default {
  name: 'ActivitiesPage',
  components: {
    ActivityCard
  },
  async mounted () {
    await this.getActivitys(); // Chame a função getActivitys e aguarde sua conclusão
  },
  data() {
    return {
      activitys: [],
    };
  },
  methods: {
    async getToken() {
      const token = localStorage.getItem("token");
      return token;
    },
    async getActivitys() {
      try {
        const token = await this.getToken();
        const headers = {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        };

        const response = await fetch("/api/activity", {
          method: "GET",
          headers,
        });

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const jsonData = await response.json(); // Aguarde a resolução da promessa e obtenha os dados JSON diretamente

        // Agora você tem acesso direto ao objeto JSON
        console.log('activity', jsonData.data);
        this.activitys = jsonData.data
      } catch (error) {
        console.error(error);
      }
    },
    redirectToDetails(obj) {
      const objetoString = JSON.stringify(obj);
      this.$router.push({ name: 'DetailsPage', params: { dados: objetoString } });
    },
  }
}
</script>

<style scoped>

.cards-container {
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  gap: 20px; /* Espaçamento entre os cards */
}

.card-wrapper {
  flex-basis: calc(33.33% - 20px); /* Defina o tamanho base dos cards */
  margin: 0; /* Remova as margens padrão */
}

.educadores-avaliados{
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}
.teacher-wrapper {
  flex-basis: calc(33.33% - 20px); /* Defina o tamanho base dos cards */
  margin: 0; /* Remova as margens padrão */
}

.cards-atividades{
  display: flex;
  flex-wrap: wrap;
}
</style>
