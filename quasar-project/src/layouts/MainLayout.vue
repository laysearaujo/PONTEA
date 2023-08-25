<template>
  <q-layout view="lHh Lpr lFf">
    <q-header reveal style="background-color: white; color: black;">
      <q-toolbar>
        <q-toolbar-title>
          Pontea.
        </q-toolbar-title>
        <q-btn flat round dense icon="filter_list" class="q-mr-md" />
        <q-input outlined rounded dense class="search-input" label="Busca" style="max-width: 400px;">
          <template #prepend>
            <q-icon name="search" />
          </template>
        </q-input>
        <q-avatar size="36px">
          <q-icon name="account_circle" size="36px" />
        </q-avatar>
      </q-toolbar>
      <div class="toolbar-icons">
        <div class="icon-button" @click="tab = 'home'">Início</div>
        <div class="icon-button" @click="tab = 'search'">Buscar</div>
      </div>
    </q-header>

    <q-page-container class="page-container">
      <!-- Conteúdo da página aqui -->
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'MainLayout',

  setup() {
    const leftDrawerOpen = ref(false)
    const tab = ref('home') // Definindo "Home" como tab ativa

    return {
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value
      },
      tab
    }
  }
})
</script>

<style scoped>
/* Add any custom styles you might need */
.toolbar-icons {
  display: flex;
  align-items: center;
  margin-left: 10px;
  padding-right: 20px;
}

.icon-button {
  cursor: pointer;
  margin-right: 10px;
  font-size: 16px; /* Aumentar o tamanho da fonte */
}

.page-container {
  margin: 0 3px; /* 3px de margem nas laterais da página */
}

.search-input {
  flex: 1; /* Ocupar o espaço disponível */
  max-width: 500px; /* Aumentar a largura máxima */
}
.q-mr-md {
    margin-right: 0px;
}

</style>
