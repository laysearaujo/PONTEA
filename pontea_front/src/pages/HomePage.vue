<template>
  <div class="q-pa-md row items-start q-gutter-md container">
    <h5 class="sub-title col-12 q-mb-sm">Atividades bem avaliadas</h5>
    <div class="cards-atividades" v-if="activitys.length > 0">
      <q-carousel
        v-model="slide"
        transition-prev="scale"
        transition-next="scale"
        swipeable
        animated
        control-color="white"
        navigation="false"
        arrows="false"
        padding
        class="text-white shadow-1 rounded-borders full-width-carousel"
        height="310px"
      >
        <q-carousel-slide name="style" class="row no-wrap slide scroll">
          <ActivityCard
            v-for="activity in activitys"
            :key="activity.title"
            :titulo="activity.title"
            :nivel="activity.level.id"
            :tipoDeEducacao="activity.age_group.id"
            :faixaEtaria="activity.age_group.title"
            :nota="activity.note"
            :preco="activity.price"
            :CampoDeExperiencia="activity.area.title"
            @click="redirectToDetails(activity)"
          />
        </q-carousel-slide>
      </q-carousel>
    </div>
    <h5 class="sub-title col-12 q-mb-sm">Por área do conhecimento</h5>
    <div class="cards-container scroll" v-if="areas.length > 0">
      <KnowledgeCard
        v-for="item in areas"
        :key="item.title"
        :title="item.title"
        :quantity="item.activities_count"
        class="card-wrapper"
      />
    </div>
    <h5 class="sub-title col-12 q-mb-sm">Educadores Bem Avaliados</h5>
    <div class="educadores-avaliados scroll" v-if="teachers.length > 0">
      <TeacherCard
        v-for="teacher in teachers"
        :key="teacher.name"
        :name="teacher.name"
        :rating="teacher.note"
        :quantity="teacher.countActivities"
        :img_src="teacher.photo_path"
        class="teacher-wrapper col-3"
      />
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import KnowledgeCard from "components/KnowledgeCard.vue";
import TeacherCard from "src/components/TeacherCard.vue";
import ActivityCard from "src/components/ActivityCard.vue";

export default {
  name: "HomePage",
  components: {
    KnowledgeCard,
    TeacherCard,
    ActivityCard,
  },
  setup() {
    return {
      slide: ref("style"),
    };
  },
  async mounted() {
    try {
      await this.getAreas(); // Chame a função getAreas e aguarde sua conclusão
      await this.getTeachers(); // Chame a função getTeachers e aguarde sua conclusão
      await this.getActivitys(); // Chame a função getActivitys e aguarde sua conclusão
    } catch (error) {
      console.error(error);
    }
  },
  data() {
    return {
      areas: [],
      teachers: [],
      activitys: [],
    };
  },
  methods: {
    async getToken() {
      const token = localStorage.getItem("token");
      console.log("token", token);
      return token;
    },
    async getAreas() {
      try {
        const token = await this.getToken();
        const headers = {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        };

        const response = await fetch("/api/area", {
          method: "GET",
          headers,
        });

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const jsonData = await response.json(); // Aguarde a resolução da promessa e obtenha os dados JSON diretamente

        // Agora você tem acesso direto ao objeto JSON
        console.log("area", jsonData.data);
        this.areas = jsonData.data;
      } catch (error) {
        console.error(error);
      }
    },
    async getTeachers() {
      try {
        const token = await this.getToken();
        const headers = {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        };

        const response = await fetch("/api/teacher", {
          method: "GET",
          headers,
        });

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const jsonData = await response.json(); // Aguarde a resolução da promessa e obtenha os dados JSON diretamente

        // Agora você tem acesso direto ao objeto JSON
        console.log("teachers", jsonData.data);

        // Puxar teachers de acordo com a nota
        // var teachers = jsonData.data.sort((a, b) => b.note - a.note);
        // const arrayLimitado = teachers.slice(0, 4);

        this.teachers = jsonData.data;
      } catch (error) {
        console.error(error);
      }
    },
    async getActivitys() {
      try {
        const token = await this.getToken();
        const headers = {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        };

        const response = await fetch("/api/activity", {
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
      this.$router.push({
        name: "DetailsPage",
        params: { dados: obj.title },
      });
    },
  },
};
</script>

<style scoped>
.carousel-margin {
  width: 60px;
}

.q-panel > div {
  height: 100%;
  width: 100%;
}

.cards-container {
  display: flex;
  width: 100%;
  gap: 10px;
  overflow-y: auto;
}

.card-wrapper {
  flex-basis: calc(33.33% - 20px);
  margin: 10px;
  box-sizing: border-box;
}

.teacher-wrapper.col-3 {
  flex-basis: calc(25% - 20px); /* Largura de 25% para ocupar 4 colunas */
  margin: 10px; /* Espaçamento entre os cards */
  box-sizing: border-box;
}

.educadores-avaliados {
  display: flex;
  overflow-y: auto;
  gap: 10px;
}

.teacher-wrapper {
  flex-basis: calc(25% - 20px);
  margin: 0;
}

.slide {
  gap: 15px;
}

.cards-atividades {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  overflow-x: auto;
  white-space: nowrap;
  margin-top: 0px;
}

.full-width-carousel {
  width: 100%;
  overflow: hidden;
}

.q-carousel .q-carousel-slide.row.no-wrap.flex-center {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
}

.q-carousel {
  display: inline-block;
  max-width: 100%;
}

.scroll::-webkit-scrollbar {
  width: 8px;
  height: 10px;
}

.scroll::-webkit-scrollbar-thumb {
  background-color: #888;
  border-radius: 6px;
}

.scroll::-webkit-scrollbar-thumb:hover {
  background-color: #555;
}

.scroll::-webkit-scrollbar-track {
  background-color: #f0f0f0;
  border-radius: 6px;
}
</style>
