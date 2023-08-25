<template>
  <q-layout view="lHh Lpr lFf">
    <q-header reveal style="background-color: white; color: black; margin-top: 1%;">
      <q-toolbar class="q-space-between">
        <div>
          <img src="/../public/images/logo.svg" alt="Logo" class="logo-image" style="max-width: 300px; min-width: 150px;"/>
        </div>
        <div class="toolbar-icons">
          <q-btn flat round dense icon="filter_list" class="q-mr-md" />
          <q-input outlined rounded dense class="search-input" label="Busca" style="max-width: 700px; min-width: 300px;">
            <template #prepend>
              <q-icon name="search" />
            </template>
          </q-input>
          <q-avatar size="36px" class="q-ml-sm">
            <q-icon name="account_circle" size="36px" />
          </q-avatar>
        </div>
      </q-toolbar>
      <div class="toolbar-icons" style="margin-top: 2%; margin-left: 15px;">
        <div
          class="icon-button"
          :class="{ 'active-button': tab === 'home' }"
          @click="tab = 'home'"
        >
          Home
        </div>
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

.active-button {
  font-weight: bold; /* Exemplo: deixa o texto em negrito quando o botão está ativo */
  color: #144ec0; /* Exemplo: muda a cor do texto quando o botão está ativo */
}
 
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
.row, .column, .flex {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}

</style>
