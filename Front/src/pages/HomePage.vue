<template>
  <div class="q-pa-md row items-start q-gutter-md">
    <h5 class="sub-title col-12 q-mb-sm">Por área do conhecimento</h5>
    <div class="cards-container">
      <KnowledgeCard
        v-for="item in items"
        :key="item.title"
        :title="item.title"
        :quantity="item.quantity"
        class="card-wrapper"
      />
    </div>
  </div>
</template>

<script>
import KnowledgeCard from 'components/KnowledgeCard.vue';

export default {
  name: 'HomePage',
  components: {
    KnowledgeCard,
  },
  data() {
    return {
      items: [
        { title: 'Escuta, fala, pensamento e imaginação', quantity: 5 },
        { title: 'Corpo, gestos e movimento', quantity: 2 },
        { title: 'Espaços, tempo, quantidades, relações e transformações', quantity: 3 },
        { title: 'Traços, sons, cores e formas', quantity: 7 },
        { title: 'O Eu, o outro e o nós', quantity: 1 },
        { title: 'Espaços, tempo, quantidades, relações e transformações', quantity: 3 },
        { title: 'Traços, sons, cores e formas', quantity: 7 },
        { title: 'O Eu, o outro e o nós', quantity: 1 },
        // ... more items ...
      ],
    };
  }
  // ... outras configurações do componente ...
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

</style>
