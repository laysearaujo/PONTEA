<template>
  <div class="q-pa-md row items-start q-gutter-md">
    <div class="cards-atividades" v-if="activitys.length > 0">
      <ActivityCard
        style="cursor: pointer"
        v-for="activity in activitys"
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
        @click="redirectToDetails(activity)"
      />
    </div>
    <div v-else class="no-results-container full-width">
      <div class="no-results-container-inner">
        <h5 class="text-h5">Infelizmente não encontramos nenhuma atividade =(</h5>
        <img src="/images/layer1.png" alt="Edit Profile" />
      </div>
    </div>
  </div>
</template>

<script>
import ActivityCard from "src/components/ActivityCard.vue";

export default {
  name: "ActivitiesPage",
  components: {
    ActivityCard,
  },
  async mounted() {

    await this.getQueryParams()
    .then((query) => {

      this.getActivitys(query)
    })
  },
  data() {
    return {
      activitys: [],
    };
  },
  methods: {
    async getQueryParams(){

      const supportLevelOptions = {
        1: "Nível 1",
        2: "Nível 2",
        3: "Nível 3"
      }
      const experienceFieldsOptions = {
        1: "O Eu, o outro e o nós",
        2: "Traços, sons, cores e formas",
        3: "Espaços, tempo, quantidades, relações e transformações",
        4: "Corpo, gestos e movimento",
        5: "Escuta, fala, pensamento e imaginação",
      }
      const ageRangeOptions = {
        1: "0 a 1 ano e 6 meses",
        2: "1 ano e 7 meses a 3 anos e 11 meses",
        3: "4 anos a 5 anos e 11 meses",
        4: "6 anos a 11 anos",
      }
      const activityLevelOptions = ["Fácil", "Médio", "Avançado"];
      const multimediaResourcesOptions = {
        1: "Com",
        0: "Sem"
      }
      const visualInstructionsOptions = {
        1: "Com",
        0: "Sem"
      }

      let paramskey = {
        supportLevel: 'suporte',
        experienceFields: 'experiencia',
        ageRange: 'faixa',
        activityLevel: 'nivel',
        multimediaResources: 'multimidia',
        visualInstructions: 'instrucoes',
      }

      let paramsBackKey = {
        supportLevel: 'level_id',
        experienceFields: 'area_id',
        ageRange: 'age_group_id',
        multimediaResources: 'has_multimedia_resources',
        visualInstructions: 'has_visual_instructions',
      }

      const hash = window.location.hash;

      let queryParams = []

      if(hash.includes('#/atividades?')){

        const cleanedHash = hash.replace('#/atividades?', '');
        const splitHash = cleanedHash.split("&");

        splitHash.forEach(hash => {
          let param = hash.split("=");

          queryParams[decodeURIComponent(param[0])] = decodeURIComponent(param[1])
        });
      }

      let query = '';

      if(queryParams[paramskey.supportLevel] != null) {

        query += "&" + paramsBackKey.supportLevel + "=" + this.findKeyByValue(supportLevelOptions, queryParams[paramskey.supportLevel])
      }
      if(queryParams[paramskey.experienceFields] != null) {

        query += "&" + paramsBackKey.experienceFields + "=" + this.findKeyByValue(experienceFieldsOptions, queryParams[paramskey.experienceFields])
      }
      if(queryParams[paramskey.ageRange] != null) {

        query += "&" + paramsBackKey.ageRange + "=" + this.findKeyByValue(ageRangeOptions, queryParams[paramskey.ageRange])
      }
      if(queryParams[paramskey.multimediaResources] != null) {

        query += "&" + paramsBackKey.multimediaResources + "=" + this.findKeyByValue(multimediaResourcesOptions, queryParams[paramskey.multimediaResources])
      }
      if(queryParams[paramskey.visualInstructions] != null) {

        query += "&" + paramsBackKey.visualInstructions + "=" + this.findKeyByValue(visualInstructionsOptions, queryParams[paramskey.visualInstructions])
      }

      query = query.replace(/^&/, '');

      return query;

    },
    async getToken() {
      const token = localStorage.getItem("token");
      return token;
    },
    findKeyByValue(obj, valueToFind) {
      for (const key in obj) {
        if (obj.hasOwnProperty(key) && obj[key] === valueToFind) {
          return key; // Retorna a primeira chave que corresponde ao valor
        }
      }
      return null; // Retorna null se o valor não for encontrado
    },
    async getActivitys(query) {
      try {
        const token = await this.getToken();
        const headers = {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        };

        const response = await fetch("/api/activity/filter?" + query, {
          method: "GET",
          headers,
        });

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const jsonData = await response.json(); // Aguarde a resolução da promessa e obtenha os dados JSON diretamente

        // Agora você tem acesso direto ao objeto JSON
        console.log("activity", jsonData.data);
        this.activitys = jsonData.data;
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
