<template>
  <div class="q-pa-md items-center q-gutter-md">
    <h6 class="flex" style="margin: 2rem;">Atividade no carrinho</h6>
    <div class="cards-atividades">
      <ActivityCard
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
    <text-body2 class="flex q-mb-lg" style="margin: 1rem;">Total: R${{ activity.price }}</text-body2>
    <div class="flex row q-mt-lg">
      <q-btn
        label="Comprar"
        type="button"
        no-caps
        class="submit-btn"
        @click="redirectToBuy(activity.id)"
      />
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
    async redirectToBuy() {

      const token_front = await this.gettoken_front();

      const headers = {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token_front}`,
      };

      let body = {
        activity_id: this.activity.id,
        pontea_credit_payment: false
      };

      fetch("/api/purchase", {
        method: "POST",
        headers,
        body: JSON.stringify(body),
      })
      .then((response) => {
        let msg = ''
        if (!response.ok) {
            msg = "Não foi possível comprar a atividade";
            console.log(response.json());

        } else {
            msg = "Atividade Comprada com sucesso!";
        }

          this.$q.notify(msg);
          this.$router.push('/perfilCliente')
        })

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

.cards-atividades {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center
}

.row, .column, .flex {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
}

.submit-btn {
  width: 15%;
  background-color: #144ec0;
  color: #fbfdff;
  border-radius: 30px;
}
</style>
