<template>
  <div class="row q-py-xl">
    <div class="col-4">
      <div class="q-pa-md" style="max-width: 400px">
        <q-form
          @submit="onSubmit"
          @reset="onReset"
          class="q-gutter-md">

          <h5 class="sub-title col-12 q-my-none"> Filtre sua busca por</h5>
          <h6 class="sub-title col-12 q-mb-sm"> Atividades</h6>

          <div class="column ">
            <p class="text-body1">Nível de suporte do TEA</p>
            <q-radio name="nivel" v-model="level" val="1" label="Nível 1" />
            <q-radio name="nivel" v-model="level" val="2" label="Nível 2" />
            <q-radio name="nivel" v-model="level" val="3" label="Nível 3" />
          </div>

          <div class="column q-mt-lg">

            <div class="q-mb-none">
              <p class="q-mb-none text-body1 mb-sm">Campos de experiências</p>
              <p class="text-body2">De acordo com a BNCC</p>
            </div>
            <q-radio name="area" v-model="area" val="1" label="O eu, o outro e o nós" />
            <q-radio name="area" v-model="area" val="2" label="Corpo, gestos e movimentos" />
            <q-radio name="area" v-model="area" val="3" label="Traços, sons, cores e formas" />
            <q-radio name="area" v-model="area" val="4" label="Escuta, fala, pensamento e imaginação " />
            <q-radio name="area" v-model="area" val="5" label="Espaços, tempos, quantidades, relações e transformações" />
          </div>

          <div class="column q-mt-lg">
            <p class="text-body1">Faixa etária</p>
            <q-radio name="age_groups" v-model="age_groups" val="1" label="0 a 1 ano e 6 meses" />
            <q-radio name="age_groups" v-model="age_groups" val="2" label="1 ano e 7 meses a 3 anos e 11 meses" />
            <q-radio name="age_groups" v-model="age_groups" val="3" label="4 anos a 5 anos e 11 meses" />
            <q-radio name="age_groups" v-model="age_groups" val="4" label="6 anos a 11 anos" />
          </div>

          <div class="column q-mt-lg">
            <div class="q-mb-none">
              <p class="q-mb-none text-body1 mb-sm">Recursos Multimídias</p>
              <p class="text-body2">atividades que necessitam de sons, tablets, tvs, etc.</p>
            </div>
            <q-radio name="has_multimedia_resources" v-model="has_multimedia_resources" val="1" label="Com" />
            <q-radio name="has_multimedia_resources" v-model="has_multimedia_resources" val="0" label="Sem" />

          </div>

          <div class="column q-mt-lg">
            <div class="q-mb-none">
              <p class="q-mb-none text-body1 mb-sm">Instruções Visuais</p>
              <p class="text-body2">Recursos disponíveis como manuais, mapas e ilustrações.</p>
            </div>
            <q-radio name="has_visual_instructions" v-model="has_visual_instructions" val="1" label="Com" />
            <q-radio name="has_visual_instructions" v-model="has_visual_instructions" val="0" label="Sem" />
          </div>

          <div class="q-pt-xl row justify-center full-width" style=" width: 100%;">
            <q-btn class="q-px-xl q-py-sm " label="Buscar" type="submit" color="primary"/>
          </div>
        </q-form>
    </div>
    </div>

    <div class="col-8">

      <h5 class="sub-title col-12 q-my-none"> Para melhores resultados  em “{{searchText}}” utilize o filtro ao lado. </h5>

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


    </div>

  </div>
</template>

<script>
import axios from 'axios'
import { ref } from 'vue';
import ActivityCard from "src/components/ActivityCard.vue";

export default {
  name: 'EmptyPage',
  components: {
    ActivityCard,
  },
  async mounted() {

    const hash = window.location.hash;
    const cleanedHash = hash.replace('#/busca?', '');

    await this.getActivitys(cleanedHash)

  },
  methods: {
    async getToken() {
      const token = localStorage.getItem("token");
      return token;
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
  },
  data() {
    return {
      activitys: [],
    };
  },
  setup() {
    const hash = window.location.hash;
    let queryParams = []
    const cleanedHash = hash.replace('#/busca?', '');
    const splitHash = cleanedHash.split("&");

    splitHash.forEach(hash => {
      let param = hash.split("=");

      queryParams[decodeURIComponent(param[0])] = decodeURIComponent(param[1])
    });

    let searchText = ''

    if(queryParams['text']){

      searchText = queryParams['text']
    }

    let level = ref(null);
    let area = ref(null);
    let age_groups = ref(null);
    let has_multimedia_resources = ref(null);
    let has_visual_instructions = ref(null);

    if(queryParams['age_group_id']){

      age_groups.value = queryParams['age_group_id']
    }
    if(queryParams['area_id']){

      area.value = queryParams['area_id']
    }
    if(queryParams['level_id']){

      level.value = queryParams['level_id']
    }
    if(queryParams['has_multimedia_resources']){

      has_multimedia_resources.value = queryParams['has_multimedia_resources']
    }
    if(queryParams['has_visual_instructions']){

      has_visual_instructions.value = queryParams['has_visual_instructions']
    }

    return {
      level,
      area,
      age_groups,
      has_multimedia_resources,
      has_visual_instructions,
      cleanedHash,
      searchText,
      onSubmit() {

        let text_url = 'text=' + searchText

        if(age_groups.value != null){

          text_url += "&age_group_id=" + age_groups.value
        }
        if(area.value != null){

          text_url += "&area_id=" + area.value
        }
        if(level.value != null){

          text_url += "&level_id=" + level.value
        }
        if(has_multimedia_resources.value != null){

          text_url += "&has_multimedia_resources=" + has_multimedia_resources.value
        }
        if(has_visual_instructions.value != null){

          text_url += "&has_visual_instructions=" + has_visual_instructions.value
        }

        text_url = text_url.replace(/^&/, '');

        text_url = text_url.replace(/^&/, '');

        window.location.href = "/#/busca?" + text_url;

        window.location.reload(true);
      }
    };
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
.cards-atividades {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}
</style>
