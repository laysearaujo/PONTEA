<template>
  <div class="q-pa-md row items-start q-gutter-md">
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
import TeacherCard from 'src/components/TeacherCard.vue';

export default {
  name: 'EducatorsPage',
  components: {
    TeacherCard,
  },
  async mounted () {
    await this.getTeachers(); // Chame a função getTeachers e aguarde sua conclusão
  },
  data() {
    return {
      teachers: [], // Inicialize 'teachers' como um array vazio
      // Resto dos seus dados
    };
  },
  methods: {
    async getToken() {
      const token = localStorage.getItem("token");
      console.log('OLHA AQUI PORRA', token)
      return token;
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
  flex-basis: calc(25% - 20px); /* Defina o tamanho base dos cards */
  margin: 0; /* Remova as margens padrão */
}

.educadores-avaliados{
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
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
