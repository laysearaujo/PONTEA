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

          <div class="q-pt-xl row justify-center full-width" style=" width: 100%;">
            <q-btn class="q-px-xl q-py-sm " label="Buscar" type="submit" color="primary"/>
          </div>
        </q-form>
    </div>
    </div>

    <div class="col-8">

      <h5 class="sub-title col-12 q-my-none"> Para melhores resultados  em “{{searchText}}” utilize o filtro ao lado. </h5>

    </div>

  </div>
</template>

<script>
import axios from 'axios'
import { ref } from 'vue';
export default {
  name: 'EmptyPage',
  setup() {
    const getActivitys = (hash) => {
      const url = new URL("http://pontea.000webhostapp.com/api/activity/filter" + "?" + hash);

      axios.get(url)
      .then((res) => {
        //console.log(res);
        return res.data
      })
      .catch(err => console.log(err))
    }

    const hash = window.location.hash;
    const cleanedHash = hash.replace('#/busca?', '');
    const searchText = cleanedHash.replace('text=', '');
    const url = new URL("http://pontea.000webhostapp.com/api/activity/filter" + "?" + cleanedHash);

    let level = ref(null);
    let area = ref(null);
    let age_groups = ref(null);
    let activitys = ref(null);

    return {
      level,
      area,
      age_groups,
      activitys,
      cleanedHash,
      searchText,
      onSubmit() {

        let text_url = "http://pontea.000webhostapp.com/api/activity/filter" + "?" + cleanedHash

        if(age_groups.value != null){

          text_url += "&age_group_id=" + age_groups.value
        }
        if(area.value != null){

          text_url += "&area_id=" + area.value
        }
        if(level.value != null){

          text_url += "&level_id=" + level.value
        }

        const url = new URL(text_url);

        axios.get(url )
        .then((res) => {

          console.log(res);
        })
        .catch(err => console.log(err))
      }
    };
  },
};
</script>

<style scoped>

/* Estilos específicos para esta página, se necessário */
</style>
