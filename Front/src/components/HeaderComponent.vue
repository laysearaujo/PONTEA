<template>
  <q-header reveal style="background-color: white; color: black;">
    <q-toolbar class="q-space-between" style="background-color: #D9DCF9; padding: 1%;">
      <div>
        <img src="/../public/images/logo.svg" alt="Logo" class="logo-image" style="max-width: 300px; min-width: 150px;  z-index: 1; "/>
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
        :class="{ 'active-button': isActiveTab('home') }"
        @click="changeTab('home')"
      >
        Home
      </div>
    </div>
  </q-header>
</template>

<script>
import { defineComponent, ref, toRefs } from 'vue';

export default defineComponent({
  name: 'HeaderComponent',

  props: {
    tab: String // Recebe a prop 'tab' do componente pai (MainLayout.vue)
  },

  setup(props) {
    const { tab } = toRefs(props); // Convert props to reactive references
    const activeTab = ref(tab.value);

    const isActiveTab = (tabName) => {
      return activeTab.value === tabName;
    };

    const changeTab = (newTab) => {
      activeTab.value = newTab;
    };

    return {
      isActiveTab,
      changeTab
    };
  }
});
</script>

<style scoped>
/* Add any custom styles you might need */

.active-button {
  font-weight: bold;
  color: #144ec0;
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
  font-size: 16px;
}

.search-input {
  flex: 1;
  max-width: 500px;
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
