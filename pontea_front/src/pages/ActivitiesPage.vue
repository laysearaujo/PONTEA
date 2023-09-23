<template>

  <div class="q-pa-md row items-start q-gutter-md">
    <div class="cards-atividades" v-if="activitys.length > 0">
      <ActivityCard
        v-for="activity in activitys"
        :key="activity.title"
        :titulo = "activity.title"
        :nivel = "activity.level.id"
        :tipoDeEducacao = "activity.age_group.id"
        :faixaEtaria = "activity.age_group.title"
        :nota = "activity.note"
        :preco = "activity.price"
        :CampoDeExperiencia = "activity.area.title"
        class="card-atividade"
      />
    </div>
  </div>
</template>

<script>
import ActivityCard from 'src/components/ActivityCard.vue';
import axios from 'axios';

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
      activitys: [], // Inicialize 'activitys' como um array vazio
      // Resto dos seus dados
    };
  },
  methods: {
    async getActivitys() {
      const url = new URL("https://pontea.000webhostapp.com/api/activity");

      try {
        const response = await axios.get(url);
        console.log("aaaaaaaa",response.data.data);
        this.activitys = response.data.data; // Armazene os dados em 'activitys'
      } catch (error) {
        console.error(error);
      }
    }
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
