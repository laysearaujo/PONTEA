<template>
  <div class="q-pa-md example-row-all-breakpoints">
    <div class="row">
      <div class="col-3">
        <div class="flex" style="width: 100%; justify-content: center; margin: 0;">
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
            />
          </div>
        </div>
        <div class="row" style="padding: 10px 15px; margin-top: 0px;">
          <text-caption>Por {{ activity.created_by_user.name }}</text-caption>
        </div>
        <div class="row" style="padding: 10px 15px; margin-top: 0px;">
          <text-body1 style="font-size: 1rem;">Por {{ activity.description }}</text-body1>
        </div>
        <h6 style="padding: 10px 15px; margin: 0px;">Comentários sobre a atividade</h6>
        <h6 style="padding: 10px 15px; margin: 0px;">Atividades semelhantes</h6>
      </div>
    </div>
  </div>
</template>
  
<script>
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
  created() {
    const dadosString = this.$route.params.dados;
    const objeto = JSON.parse(dadosString);
    console.log(objeto)
    this.activity = objeto
  },
  async mounted () {
    await this.getActivitys(); 
  },
};
</script>

  
<style scoped>
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

