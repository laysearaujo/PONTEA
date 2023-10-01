<template>
  <div class="q-pa-md row items-start q-gutter-md">
    <div class="cards-atividades" v-if="activity.length > 0">
      <ActivityCard
        style="cursor: pointer"
        :id="activity.id"
        :key="activity.title"
        :titulo="activity.title"
        :nivel="activity.level.id"
        :tipoDeEducacao="activity.age_group.id"
        :faixaEtaria="activity.age_group.title"
        :nota="activity.note"
        :preco="activity.price"
        :CampoDeExperiencia="activity.area.title"
        class="card-atividade"
      />
    </div>
    <div v-else class="no-results-container full-width">
      <div class="no-results-container-inner">
        <h5 class="text-h5">Infelizmente não encontramos nenhuma atividade =(</h5>
        <img src="/spa/images/layer1.png" alt="Edit Profile" />
      </div>
    </div>
  </div>
</template>

<script>
import ActivityCard from "src/components/ActivityCard.vue";

export default {
  name: "ShoppingCartPage",
  components: {
    ActivityCard,
  },
  data() {
    return {
      activity: null,
    };
  },
  created() {
    const dadosString = this.$route.params.dados;
    const objeto = JSON.parse(dadosString);
    console.log(objeto)
    this.activity = objeto
  },
  async mounted() {
    await this.getQueryParams()
    .then((query) => {
      this.getActivitys(query)
    })
  },
  methods: {
    async gettoken_front() {
      const token_front = localStorage.getItem("token_front");
      return token_front;
    },
  },
};
</script>

<style scoped>

.no-results-container {
  display: flex;
  margin-top: 5%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
}
.no-results-container-inner{
  display: flex;
  width: fit-content;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
}
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

.educadores-avaliados {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}
.teacher-wrapper {
  flex-basis: calc(33.33% - 20px); /* Defina o tamanho base dos cards */
  margin: 0; /* Remova as margens padrão */
}

.cards-atividades {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}
</style>
