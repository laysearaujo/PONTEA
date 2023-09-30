<template>
  <div class="q-pa-xs row items-start q-gutter-md">
    <q-card class="my-card">
      <q-card-section class="imagem-fundo">
        <div class="icons">
          <img class="ic2" :src="defIcon" alt="Ícone de Experiência" />
          <section class="price-rating">
            <div class="price">R$ {{ preco }}</div>
            <div class="rating">
              <img src="/icons/half-star2.svg" alt="icon" />
              {{ nota }}
            </div>
          </section>
        </div>
      </q-card-section>
      <q-card-section class="textos">
        <div class="titulo">{{ titulo }}</div>
        <div class="conteudo">Nível: {{ nivel }}</div>
        <div class="conteudo">{{ tipoDeEducacao }}</div>
        <div class="conteudo">{{ faixaEtaria }}</div>
      </q-card-section>
    </q-card>
  </div>
</template>
<script>
export default {
  name: "ActivityExtra",
  props: {
    titulo: String,
    nivel: String,
    tipoDeEducacao: String,
    faixaEtaria: String,
    nota: Number,
    preco: Number,
    CampoDeExperiencia: String,
  },
  computed: {
    defIcon() {
      // Use um condicional para determinar o caminho do ícone com base em CampoDeExperiencia
      if (this.CampoDeExperiencia === "Escuta, fala, pensamento e imaginação") {
        return "/icons/area5.svg";
      } else if (this.CampoDeExperiencia === "Corpo, gestos e movimento") {
        return "/icons/area4.svg";
      } else if (
        this.CampoDeExperiencia === "Espaços, tempo e quantidades,..."
      ) {
        return "/icons/area3.svg";
      } else if (this.CampoDeExperiencia === "Traços, sons, cores e formas") {
        return "/icons/area2.svg";
      } else {
        return "/icons/area1.svg";
      }
    },
  },
};
</script>

<style scoped>
.my-card {
  display: flex;
  width: 100%;
  height: 260px;
  min-width: 186px;
  /* max-width: 186px; */
  flex-direction: column;
  align-items: flex-start;
  gap: -232px;
  border-radius: 8px;
  box-shadow: 1px 1px 3px 0px rgba(0, 0, 0, 0.15);
}

.imagem-fundo {
  display: flex;
  width: 100%;
  height: 152px;
  min-width: 186px;
  flex-direction: row-reverse;
  align-items: end;
  flex-shrink: 0;
  background-image: url("/images/presente.jpeg"); /* Substitua pelo caminho da sua imagem */
  background-size: cover; /* Ajusta o tamanho da imagem para cobrir a div */
  background-position: center; /* Centraliza a imagem na div */
  background-repeat: no-repeat; /* Evita repetição da imagem */
  margin-bottom: -5%;
}

.titulo {
  font-family: Lexend;
  font-size: 13px;
  font-weight: 500;
  line-height: 16px;
  letter-spacing: 0em;
  text-align: left;
  font-variation-settings: "slnt" 0;
  color: #3c3c3f;
  margin-left: -4%;
}

.conteudo {
  margin-left: -4%;
  font-family: Lexend;
  font-size: 10px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0em;
  text-align: left;
  color: #616167;
}

.texto {
  width: 170px;
  height: 64px;
  justify-content: space-between;
  text-align: left;
}

.icons {
  padding: 0px;
  min-width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.price-rating {
  background-color: #fbfdff;
  border-radius: 6px;
  display: flex;
  gap: 4px;
  font-family: Lexend;
  font-size: 12px;
}

.price {
  background-color: #65a115;
  border-radius: 6px;
  padding: 3px 10px;
  white-space: nowrap;
  color: #fbfdff;
}

.rating {
  display: flex;
  gap: 4px;
  align-items: center;
  padding: 3px 0px;
  padding-right: 10px;
  color: #616167;
  font-weight: 400;
}

.rating img {
  margin-top: -1px;
}
</style>
