<template>
  <div>
    <div class="container">
      <div class="box box1">
        <div class="sub-box">
          <img src="https://evorastudio.com.br/wp-content/uploads/2021/04/retrato-corporativo-foto-perfil-profissional-foto-linkedin-24-scaled.jpg" alt="Imagem" class="rounded-image">
        </div>
        <div class="sub-box" id="nome">  <p v-if="perfil && perfil.user">{{ perfil.user.name }}</p></div>
        <div class="sub-box">estrela e avaliação</div>
        <div class="sub-box" id="descricao"><p>Professora na Universidade Federal de Pernambuco,
           pós-graduada em educação inclusiva para crianças neuroatípicas pela UNINASSAU e licenciada
            em Pedagogia pela Universidade do Minho.</p></div>
        <div class="sub-box"><q-btn label="Ser educador" color="primary" no-caps rounded /></div>
      </div>
      <div class="box box2">
      <div>
        <h5 class="titulo">Atividades disponíveis</h5>
      </div>
      <div></div>
      </div>
    </div>
  </div>
</template>

<script>
// import ActivityCard from 'src/components/ActivityCard.vue';

export default {
  name: 'PerfilCliente',
  components:{
    // ActivityCard
  },
  async mounted () {
    try {
      await this.getPerfilCliente(); 
    } catch (error) {
      console.error(error);
    }
  },
  data() {
    return {
      perfil: null,
    };
  },
  methods: {
    async getToken() {
      const token = localStorage.getItem("token");
      return token;
    },
    async getPerfilCliente(){
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
        console.log('perfil', jsonData);
        this.perfil = jsonData
      } catch (error) {
        console.error(error);
      } 
    } 
  }

}
</script>

<style>
.container {
  display: flex;
  justify-content: space-between;
}

.box {
  gap: 40px;
}

.box1 {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding-left: 2%;
}

.box2 {
  flex: 3;
  display: flex;
  flex-direction: column;
}

.sub-box {
  margin: 5px 0;
  display: flex;
  align-items: center; 
  justify-content: center; 
}


.rounded-image {
  margin-top: 10%;
  border-radius: 50%; 
  width: 100px; 
  height: 100px; 
  width: 180px; 
  height: 180px; 
}

.titulo{
  color: var(--textos-cinza, #616167);
  font-family: Lexend;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 150% */
}

#nome {
  color: var(--textos-preto, #3C3C3F);
  font-family: Lexend;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 150% */
}

#descricao{
  align-self: stretch;
  color: var(--textos-preto, #3C3C3F);
  /* PARAGRAPH 2 */
  font-family: Lexend;
  font-size: 12.8px;
  font-style: normal;
  font-weight: 300;
  line-height: 16px; /* 125% */
}



</style>