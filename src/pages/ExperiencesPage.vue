<template>
  <div>
    <div
      class="q-pa-md row items-start q-gutter-md"
      v-for="(experience, index) in experienceFieldsOptions"
      :key="index"
    >
      <h5
        class="sub-title col-12 q-mb-sm"
        v-if="hasMatchingActivities(experience.area.id)"
      >
        {{ experience.area.title }}
      </h5>
      <div
        class="cards-atividades"
        v-if="hasMatchingActivities(experience.area.id)"
      >
        <ActivityCard
          v-for="activity in filteredActivities(experience.area.id)"
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
    </div>
  </div>
</template>

<script>
import ActivityCard from "src/components/ActivityCard.vue";

export default {
  name: "ExperiencesPage",
  components: {
    ActivityCard,
  },
  async mounted() {
    try {
      await this.getActivitys();
    } catch (error) {
      console.error(error);
    }
  },
  data() {
    return {
      activitys: [],
      experienceFieldsOptions: [
        { area: { title: "O Eu, o outro e o nós", id: 1 } },
        { area: { title: "Traços, sons, cores e formas", id: 5 } },
        {
          area: {
            title: "Espaços, tempo, quantidades, relações e transformações",
            id: 3,
          },
        },
        { area: { title: "Corpo, gestos e movimento", id: 2 } },
        { area: { title: "Escuta, fala, pensamento e imaginação", id: 4 } },
      ],
    };
  },
  methods: {
    async gettoken_front() {
      const token_front = localStorage.getItem("token_front");
      console.log("token_front", token_front);
      return token_front;
    },
    async getActivitys() {
      try {
        const token_front = await this.gettoken_front();
        const headers = {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token_front}`,
        };

        const response = await fetch("/api/activity", {
          method: "GET",
          headers,
        });

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const jsonData = await response.json();
        console.log("activity", jsonData.data);
        this.activitys = jsonData.data;
      } catch (error) {
        console.error(error);
      }
    },
    hasMatchingActivities(areaTitle) {
      return this.activitys.some((activity) => activity.area.id === areaTitle);
    },
    filteredActivities(areaTitle) {
      return this.activitys.filter(
        (activity) => activity.area.id === areaTitle
      );
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
.cards-atividades {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}
</style>
