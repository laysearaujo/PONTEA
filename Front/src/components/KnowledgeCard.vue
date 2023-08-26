<template>
  <div class="my-card">
    <q-card>
      <div class="card-image">
        <img src="/../public/images/knowledgeCard.svg" alt="Knowledge Card">
        <div class="title-overlay">{{ title }}</div>
      </div>
      <q-card-section class="q-pt-none">
        <div class="icon-and-quantity q-mt-sm">
          <img src="/../public/images/notebook.svg" class="icon" alt="Icon" />
          <span class="quantity">{{ quantity }}</span>
        </div>
      </q-card-section>
    </q-card>
    <img src="/images/corner.svg" class="corner-image" alt="Catavento">
  </div>
</template>

<script>
export default {
  name: 'KnowledgeCard',
  props: {
    title: String,
    quantity: Number,
  },
};
</script>

<style scoped>
.my-card {
  position: relative;
  display: inline-block; /* Ajusta o tamanho do bloco conforme o conteúdo */
}

.corner-image {
  position: absolute;
  bottom: 0; /* Posiciona a imagem no canto inferior */
  left: 0; /* Posiciona a imagem no canto esquerdo */
  width: 50px; /* Defina a largura desejada para a imagem do catavento */
  height: 35%; /* Define a altura desejada para a imagem do catavento */
  object-fit: cover; /* Ajusta a imagem para preencher o espaço mantendo a proporção */
  object-position: top; /* Posiciona a imagem no topo */
  z-index: 1; /* Coloca a imagem sobre o cartão */
}

.icon-and-quantity {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%; /* Certifica-se de que ocupa toda a altura disponível */
}

.icon {
  width: 1rem; /* Largura da imagem do ícone */
  height: auto;
  margin-right: 8px; /* Espaçamento entre o ícone e o número */
}

.quantity {
  font-size: 1rem; /* Mesmo tamanho do ícone */
  display: flex;
  align-items: center;
}

.card-image {
  position: relative;
  text-align: center; /* Centraliza o título horizontalmente */
}

.title-overlay {
  position: absolute;
  top: 50%; /* Move o título para o centro vertical */
  left: 50%; /* Move o título para o centro horizontal */
  transform: translate(-50%, -50%); /* Centraliza o título precisamente */
  font-size: 1.2rem; /* Tamanho do título */
  color: white; /* Cor do título, ajuste conforme necessário */
}
</style>
