<template>
  <div class="page-container row" >
    <div class="col-3">
        <ProfileComponent :showBtn="false" v-if="perfil" :user="perfil" style="max-width: 15vw;"/>
    </div>
    <div class="add-atividade col-9">
      <h5 style="margin-bottom: 16px">Adicionando atividade</h5>
      <div class="form" style="padding: 16px 0px">
        <q-form class="fields" @submit="onSubmit()">
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
                option-value="id"
                option-label="desc"
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
                option-value="id"
                option-label="desc"
              />
            </div>
          </div>
          <div class="row">
            <div class="field col-6">
              <label for="area"
                >Área do conhecimento<span class="small-txt">
                  (de acordo com a BNCC)</span
                ></label
              >
              <q-select
                outlined
                dense
                name="area"
                v-model="area_bncc"
                :options="ops_areas"
                option-value="id"
                option-label="desc"
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
                option-value="id"
                option-label="desc"
              />
            </div>
          </div>
          <div class="row">
            <div class="field col-6">
              <label for="recursos"
                >Recursos multimídias
                <span class="small-txt">(Sons, tablets, Tvs, etc)</span></label
              >
              <q-select
                outlined
                dense
                name="recursos"
                v-model="recursos"
                :options="ops_recursos"
                option-value="id"
                option-label="desc"
              />
            </div>
            <div class="field col-6">
              <label for="visuais"
                >Instruções visuais
                <span class="small-txt"
                  >(Manuais, mapas, ilustrações, etc)</span
                ></label
              >
              <q-select
                outlined
                dense
                name="visuais"
                v-model="visuais"
                :options="ops_visuais"
                option-value="id"
                option-label="desc"
              />
            </div>
          </div>
          <div class="field">
            <label for="descricao"
              >Descrição da atividade
              <span class="small-txt">(como será executada)</span></label
            >
            <q-input
              outlined
              type="textarea"
              counter
              v-model="descricao"
              name="descricao"
              autogrow
            />
          </div>
          <div class="field">
            <label for="valor"
              >Valor da atividade
              <span class="small-txt">(Deve ser de R$ 0 a 100*)</span></label
            >
            <q-input
              outlined
              type="number"
              v-model="valor"
              name="valor"
              prefix="R$"
              dense
              hint="*para valores maiores que R$ 100, a atividade seguirá para avaliação da nossa equipe. "
            />
          </div>
          <div class="field" style="margin-top: 16px">
            <label for="multimidia" style="font-weight: 400"
              >Arquivos multimídias (até 4 mídias)</label
            >
            <div class="files row">
              <div class="file cursor-pointer col" v-for="(e, i) in 4" :key="i">
                <q-file
                  v-model="medias[i]"
                  borderless
                  clearable
                  clear-icon="close"
                  @update:model-value="updateFile(i)"
                  ref="qfile"
                />
                <q-img
                  :src="medias_paths[i]"
                  ratio="1"
                  placeholder-src="public/icons/add-circle-outline.svg"
                  @click="this.$refs.qfile[i].pickFiles()"
                />
              </div>
            </div>
          </div>
          <div class="buttons">
            <q-btn
              label="Cancelar"
              no-caps
              rounded
              unelevated
              outline
              text-color="primary"
            />
            <q-btn
              label="Adicionar"
              no-caps
              color="primary"
              rounded
              unelevated
              type="submit"
            />
          </div>
        </q-form>
      </div>
    </div>
  </div>
</template>

<script>
import { useQuasar } from "quasar";
import ProfileComponent from "src/components/ProfileComponent.vue";

export default {
  name: "AddAtividadePage",
  data() {
    return {
      $q: useQuasar(),
      titulo_atividade: null,
      nivel_suporte: null,
      nivel_atividade: null,
      area_bncc: null,
      faixa_etaria: null,
      recursos: null,
      visuais: null,
      descricao: null,
      valor: null,
      medias: [null, null, null, null],
      medias_paths: [null, null, null, null],
      ops_nivel_suporte: [
        { id: 1, desc: "Nível 1" },
        { id: 2, desc: "Nível 2" },
        { id: 3, desc: "Nível 3" },
      ],
      ops_nivel_atividade: [
        { id: 1, desc: "Fácil" },
        { id: 2, desc: "Médio" },
        { id: 3, desc: "Avançado" },
      ],
      ops_areas: [
        { id: 1, desc: "O Eu, o outro e o nós" },
        { id: 2, desc: "Corpo, gestos e movimentos" },
        { id: 3, desc: "Traços, sons, cores e formas" },
        { id: 4, desc: "Escuta, fala, pensamentos e imaginação" },
        {
          id: 5,
          desc: "Espaços, tempos, quantidades, relações e transformações",
        },
      ],
      ops_faixa_etaria: [
        { id: 1, desc: "0 a 1 ano e 6 meses" },
        { id: 2, desc: "1 ano e 7 meses a 3 anos e 11 meses" },
        { id: 3, desc: "4 anos a 5 anos e 11 meses" },
        { id: 4, desc: "6 anos a 11 anos" },
      ],
      ops_recursos: [
        { id: true, desc: "Com" },
        { id: false, desc: "Sem" },
      ],
      ops_visuais: [
        { id: true, desc: "Com" },
        { id: false, desc: "Sem" },
      ],
      perfil: null,
      purchased_activities: null,
    };
  },
  async mounted() {
    try {
      await this.getPerfilCliente();
    } catch (error) {
      console.error(error);
    }
  },
  methods: {
    async getToken() {
      const token = localStorage.getItem("token");
      return token;
    },
    async onSubmit() {
      const token = this.getToken()
      const url = "/api/activity/store";

      const headers = {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      };

      let body = {
        title: this.titulo_atividade,
        description: this.descricao,
        age_group_id: this.faixa_etaria.id,
        area_id: this.area_bncc.id,
        level_id: this.nivel_suporte.id,
        has_multimedia_resources: this.recursos.id,
        has_visual_instructions: this.visuais.id,
        price: this.valor,
      };

      // Adiciona os media_path se existirem
      if (this.medias_paths[0] !== null) {
        body.media_path_1 = this.medias_paths[0];
      }

      if (this.medias_paths[1] !== null) {
        body.media_path_2 = this.medias_paths[1];
      }

      if (this.medias_paths[2] !== null) {
        body.media_path_3 = this.medias_paths[2];
      }

      if (this.medias_paths[3] !== null) {
        body.media_path_4 = this.medias_paths[3];
      }

      let resposta = await fetch(url, {
        method: "POST",
        headers,
        body: JSON.stringify(body),
      })
        .then((response) => {
          let msg = "";
          if (!response.ok) {
            msg = "Não foi possível anexar a atividade";
            console.log(response.json());

            throw new Error("Erro na resposta da API");
          } else {
            msg = "Atividade anexada com sucesso!";
          }
          this.$q.notify(msg);
          return response.json();
        })
        .then((data) => {
          console.log(data);
        })
        .catch((error) => {
          console.error("Erro na solicitação à API:", error);
        });

      console.log(body);
      console.log(resposta);
    },
    updateFile(nFile) {
      console.log("handleUpload is triggered");
      if (this.medias[nFile]) {
        this.medias_paths[nFile] = URL.createObjectURL(this.medias[nFile]);
      } else {
        this.medias_paths[nFile] = null;
      }
      console.log(this.medias[nFile]);
      console.log(this.medias_paths[nFile]);
    },
    escolherArquivo(index) {
      // Acesse o componente q-file usando a referência
      const fileInput = document.querySelectorAll('input[type="file"]')[index];
      if (fileInput) {
        fileInput.click();
      }
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
  components: {
    ProfileComponent
  }
};
</script>

<style scoped>
* {
  font-family: "Lexend";
  padding: 0px;
  margin: 0px;
}
.page-container {
  padding: 10vh 10vw 0vh 10vw;
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
  align-self: flex-end;
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

.file {
  border: 1px dashed #b8b9bc;
  border-radius: 20px;
  display: grid;
  justify-content: center;
  padding: 8px;
  gap: 8px;
}

.files {
  display: flex;
  gap: 16px;
}
</style>
