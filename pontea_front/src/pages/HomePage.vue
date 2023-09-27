<template>

  <div class="q-pa-md row items-start q-gutter-md">
    <h5 class="sub-title col-12 q-mb-sm">Atividades bem avaliadas</h5>
    <div class="cards-atividades" v-if="activitys.length > 0">
      <ActivityCard
        v-for="activity in activitys"
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
    <h5 class="sub-title col-12 q-mb-sm">Por área do conhecimento</h5>
    <div class="cards-container" v-if="areas.length > 0">
      <KnowledgeCard
        v-for="item in areas"
        :key="item.title"
        :title="item.title"
        :quantity="item.activities_count"
        class="card-wrapper"
      />
    </div>
    <h5 class="sub-title col-12 q-mb-sm"> Educadores Bem Avaliados</h5>
    <div class="educadores-avaliados" v-if="teachers.length > 0">
      <TeacherCard  v-for="teacher in teachers"
      :key="teacher.name"
      :name="teacher.name"
      :rating="teacher.note"
      :quantity="teacher.credit"
      :img_src="teacher.photo_path"
      class="teacher-wrapper"/>
    </div>
  </div>
</template>

<script>
import KnowledgeCard from 'components/KnowledgeCard.vue';
import TeacherCard from 'src/components/TeacherCard.vue';
import ActivityCard from 'src/components/ActivityCard.vue';

export default {
  name: 'HomePage',
  components: {
    KnowledgeCard,
    TeacherCard,
    ActivityCard
  },
  async mounted () {
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
      console.log('token', token)
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
        console.log('area', jsonData.data);
        this.areas = jsonData.data
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
        console.log('teachers', jsonData.data);
        this.teachers = jsonData.data
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
        console.log('activity', jsonData.data);
        this.activitys = jsonData.data
      } catch (error) {
        console.error(error);
      }
    }
  }
}
</script>

<style scoped>

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

.educadores-avaliados{
  display: flex;
  flex-wrap: wrap;
  gap: 25px;
}
.teacher-wrapper {
  flex-basis: calc(25% - 20px); /* Defina o tamanho base dos cards */
  margin: 0; /* Remova as margens padrão */
}

.cards-atividades{
  display: flex;
  flex-wrap: wrap;
}

</style>