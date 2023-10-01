<template>
  <div class="q-pa-md example-row-all-breakpoints">
    <div class="row">
      <div class="col-3 column" style="height: 100%;">
        <div class="flex col" style="width: 100%; justify-content: center; margin: 0;">
          <ActivityExtra
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
          />
        </div>
        <div class="col flex q-ma-md" style="justify-content: center; cursor: pointer;" @click="dialog = true">
          <img src="/spa/icons/share.svg" alt="Compartilhar" class="icon-svg" />
          <text-caption>Compartilhar atividade</text-caption>
        </div>
        <q-dialog v-model="dialog">
          <q-card>
            <q-card-section class="items-center">
              <h5 style="margin: 10px;">Compartilhe a atividade.</h5>
              <span class="flex" style="justify-content: center">Copie o link da atividade</span>
            </q-card-section>
          </q-card>
        </q-dialog>
        <div class="col">
          <div class="duvidas">
            <h6 style="margin: 0px; font-size: 1rem;">Duvidas da atividade ({{ activity.questions.length }})</h6>
            <div class="duvida row" v-for="act in activity.questions" :key="act.created_at">
              <div style="display: flex; justify-content: space-between; align-items: center; width: 100%; padding-bottom: 0px;">
                <div>
                  <q-avatar class="avatar" size="25px">
                    <img v-if="img_src" :src="img_src">
                    <img v-else src="/spa/images/user-icon.jpg">
                  </q-avatar>
                  <text-subtitle2 class="text-weight-medium" style="margin-left: 0.8rem;">{{ act.user.name }}</text-subtitle2>
                </div>
                <text-subtitle1 style="display: flex; text-align: right; color: gray;">em {{ formatDate(act.created_at) }}</text-subtitle1>
              </div>
              <text-subtitle1 class="flex" style="margin-top: -30px; margin-bottom: 10px; margin: 3px; width: 100%; justify-content: center; padding-right: 1rem; white-space: pre-wrap;">{{ act.question }}</text-subtitle1>
              <div class="column">
                <div class="col-4">
                  <img src="/spa/icons/mesage.svg" alt="mensagem" class="icon-svg"/>
                </div>
                <div class="col-10 q-ml-sm" style="color: var(--Azul, #144EC0);">
                  {{ act.response }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-9">
        <div class="row">
          <div class="col-10">
            <h4 style="margin-top: 0px; margin-bottom: 0px;">{{ activity.title }}</h4>
            <text-subtitle1 class="text-weight-bold">{{ activity.area.title }}</text-subtitle1>
          </div>
          <div class="col-2">
            <q-btn
              label="Comprar"
              type="submit"
              no-caps
              class="submit-btn"
              @submit="onSubmit()"
            />
          </div>
        </div>
        <div class="row" style="padding: 10px 15px; margin-top: 0px; cursor: pointer;" @click="redirectToEducator(activity.created_by_user)">
          <text-caption>Por {{ activity.created_by_user.name }}</text-caption>
        </div>
        <div class="row" style="padding: 10px 15px; margin-top: 0px;">
          <text-body1 style="font-size: 1rem;">Por {{ activity.description }}</text-body1>
        </div>
        <h6 style="padding: 10px 15px; margin: 0px;">Comentários sobre a atividade</h6>
        <div class="row" style="flex-wrap: nowrap;">
          <div v-for="act in activity.comments" :key="act.created_at" style="width: 30%;">
            <q-card>
              <div class="duvida row" style="width: 100%;"> 
                <div style="width: 100%;">
                  <div style="display: flex; justify-content: space-between; align-items: center; width: 100%; padding-bottom: 0px;">
                    <div style="width: 100%;">
                      <q-avatar class="avatar" size="25px">
                        <img v-if="img_src" :src="img_src">
                        <img v-else src="/spa/images/user-icon.jpg">
                      </q-avatar>
                      <text-subtitle2 class="text-weight-medium" style="margin-left: 0.8rem;">{{ act.user.name }}</text-subtitle2>
                    </div>
                    <text-subtitle1 style="display: flex; text-align: right; color: gray; white-space: nowrap;">em {{ formatDate(act.created_at) }}</text-subtitle1>
                  </div>
                  <div class="info row rating flex" style="justify-content: flex-start; align-items: center; margin-left: 2rem; padding-top: 0;">
                    <span>{{ act.note }}</span>
                    <img src="/spa/icons/half-star.svg" alt="icon" class="icon" style="width: 15px; height: 15px; margin-left: 5px;">
                    <span style="margin-left: 10px; margin-right: 0;">Recomendo</span>
                  </div>
                </div>
                <text-subtitle1 class="flex" style="margin-top: -30px; margin-bottom: 10px; margin: 3px; width: 100%; justify-content: center; padding-right: 1rem; white-space: pre-wrap;">{{ act.text }}</text-subtitle1>
              </div>
            </q-card>
          </div>
        </div>
        <h6 style="padding: 10px 15px; margin: 0px;">Atividades semelhantes</h6>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import ActivityExtra from 'src/components/ActivityExtra.vue';

export default {
  name: 'DetailsPage',
  components: {
    ActivityExtra
  },
  data() {
    return {
      activity: null,
    };
  },
  setup () {
    return {
      dialog: ref(false),
      cancelEnabled: ref(false)
    }
  },
  created() {
    const dadosString = this.$route.params.dados;
    const objeto = JSON.parse(dadosString);
    console.log(objeto)
    this.activity = objeto
  },
  async mounted () {
    await this.getActivitys();
  },
  methods: {
    formatDate(date) {
      const formattedDate = new Date(date).toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
      });
      return formattedDate;
    },
    async gettoken_front() {
      const token_front = localStorage.getItem("token_front");
      return token_front;
    },
    async onSubmit() {

      const token_front = this.gettoken_front()
      const url = "api/shopping_carts/store";

      const headers = {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token_front}`,
      };

      let body = {
        activity_id: this.activity.id
      };

      let resposta = await fetch(url, {
        method: "POST",
        headers,
        body: JSON.stringify(body),
      }).then((response) => {
        console.log('compra', response)
        let msg = "";
        if (!response.ok) {
          msg = "Não foi possível comprar a atividade";
          console.log(response.json());

          throw new Error("Erro na resposta da API");
        } else {
          msg = "Atividade comprada com sucesso!";
        }
        this.$q.notify(msg);
        return response.json();
      }).then((data) => {
        console.log(data);
      }).catch((error) => {
        console.error("Erro na solicitação à API:", error);
      });

      console.log(body);
      console.log(resposta);
    },
    redirectToEducator(obj) {
      this.$router.push({
        name: "PerfilEducador",
        params: { id: obj.id },
      });
    },
  },
};
</script>


<style scoped>
.duvida {
  display: flex;
  min-height: 5rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
  flex: 1 0 0;
  align-self: stretch;
  border-radius: 0.5rem;
  background: var(--white, #fbfdff);
}
.duvidas {
  display: flex;
  padding: 1rem;
  height: 100%;
  min-height: 250px;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
  flex: 1 0 0;
  align-self: stretch;
  border-radius: 0.5rem;
  background: var(--Lils, #C2C6EC);
}
.example-row-all-breakpoints {
  .row > div {
    padding: 10px 15px;
    background: rgba(#999, .15);
    border: 1px solid rgba(#999, .2);
  }
  .row + .row {
    margin-top: 1rem;
  }
}

.submit-btn {
  width: 100%;
  background-color: #144ec0;
  color: #fbfdff;
  border-radius: 30px;
}

.card-atividade {
  width: 100%;
}

.row > div {
  padding: 10px 0px;
}
</style>
