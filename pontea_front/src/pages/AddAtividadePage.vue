<template>
  <div class="page-container row">
    <div class="col-3">
      <!-- Colocar o card do professor aqui -->
    </div>
    <div class="add-atividade col-8">
      <h5 style="margin-bottom: 16px;">Adicionando atividade</h5>
      <div class="form" style="padding: 16px 0px;">
        <q-form class="fields" @submit="onSubmit">
          <div class="field">
            <label for="titulo">Título da atividade</label>
            <q-input outlined dense name="titulo" v-model="titulo_atividade" />
          </div>
          <div class="row">
            <div class="field col-6">
              <label for="nivel-suporte">Nível de suporte de TEA</label>
              <q-select
                outlined
                dense 
                name="nivel-suporte"
                v-model="nivel_suporte"
                :options="ops_nivel_suporte"
              />
            </div>
            <div class="field col-6">
              <label for="nivel-atividade">Nível da atividade</label>
              <q-select
                outlined
                dense
                name="nivel-atividade"
                v-model="nivel_atividade"
                :options="ops_nivel_atividade"
              />
            </div>
          </div>
          <div class="row">
            <div class="field col-6">
              <label for="area">Área do conhecimento<span class="small-txt"> (de acordo com a BNCC)</span></label>
              <q-select
                outlined
                dense
                name="area"
                v-model="area_bncc"
                :options="ops_areas"
              />
            </div>
            <div class="field col-6">
              <label for="faixa-etaria">Faixa etária</label>
              <q-select
                outlined
                dense
                name="faixa-etaria"
                v-model="faixa_etaria"
                :options="ops_faixa_etaria"
              />
            </div>
          </div>
          <div class="row">
            <div class="field col-6">
              <label for="recursos">Recursos multimídias <span class="small-txt">(Sons, tablets, Tvs, etc)</span></label>
              <q-select
                outlined
                dense
                name="recursos"
                v-model="recursos"
                :options="ops_recursos"
              />
            </div>
            <div class="field col-6">
              <label for="visuais">Instruções visuais <span class="small-txt">(Manuais, mapas, ilustrações, etc)</span></label>
              <q-select
                outlined
                dense
                name="visuais"
                v-model="visuais"
                :options="ops_visuais"

              />
            </div>
          </div>
          <div class="field">
            <label for="descricao">Descrição da atividade <span class="small-txt">(como será executada)</span></label>
            <q-input outlined type="textarea" counter v-model="descricao" name="descricao" autogrow/>
          </div>
          <div class="field">
            <label for="valor">Valor da atividade <span class="small-txt">(Deve ser de R$ 0 a 100*)</span></label>
            <q-input outlined type="number" v-model="valor" name="valor"
            prefix="R$" dense hint="*para valores maiores que R$ 100, a atividade seguirá para avaliação da nossa equipe. "/>
          </div>
          <div class="field" style="margin-top: 16px;">
            <label for="multimidia" style="font-weight: 400;">Arquivos multimídias (até 4 mídias)</label>
            <input type="file" name="" id="">
          </div>
          <div class="buttons">
            <q-btn label="Cancelar" no-caps rounded unelevated outline text-color="primary"/>
            <q-btn label="Adicionar" no-caps color="primary" rounded unelevated type="submit"/>
          </div>
        </q-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AddAtividadePage",
  setup() {
    const onSubmit = () => {
      // Lógica para o envio da atividade
      console.log("Atividade enviada")
    };
    const ops_nivel_suporte = ["Nível 1","Nível 2","Nível 3"];
    const ops_nivel_atividade = ["Fácil", "Médio", "Avançado"];
    const ops_areas = ["O Eu, o outro e o nós", "Corpo, gestos e movimentos", "Traços, sons, cores e formas", "Escuta, fala, pensamentos e imaginação", "Espaços, tempos, quantidades, relações e transformações"]
    const ops_faixa_etaria = ["0 a 1 ano e 6 meses", "1 ano e 7 meses a 3 anos e 11 meses", "4 anos a 5 anos e 11 meses", "6 anos a 11 anos" ];
    const ops_recursos = ["Com", "Sem"];
    const ops_visuais = ["Com", "Sem"];


    const dados_atividade = {
      titulo_atividade: '',
      nivel_suporte: null,
      nivel_atividade: null,
      area_bncc: null,
      faixa_etaria: null,
      recursos: null,
      visuais: null,
      descricao: null,
      valor: null,
      arquivos: []
    };

    return {
      onSubmit,
      ops_nivel_suporte,
      ops_nivel_atividade,
      ops_areas,
      ops_faixa_etaria,
      ops_recursos,
      ops_visuais,

    }

  },
  data() {
    return {
      titulo_atividade: null,
      nivel_suporte: null,
      nivel_atividade: null,
      area_bncc: null,
      faixa_etaria: null,
      recursos: null,
      visuais: null,
      descricao: null,
      valor: null,
      arquivos: []
    }
  },


};
</script>

<style scoped>
* {
  font-family: "Lexend";
  padding: 0px;
  margin: 0px;
}
.page-container{
  padding-top: 30px;
}
.fields {
  display: grid;
  gap: 8px;
}
.small-txt {
  font-size: 13px;
  color: #616167;
}
.field {
  padding: 4px 0px;
}
label {
  padding: 0px 16px;
  font-weight: 300;
}

.buttons {
  display: flex;
  width: 100%;
  gap: 16px;
}

.q-btn {
  padding: 0px 32px;
}
</style>
