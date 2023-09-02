<template>
  <q-header reveal style="background-color: white; color: black;">
    <q-toolbar class="q-space-between" style="background-color: #D9DCF9; padding: 1%;">
      <div>
        <img src="/../public/images/logo.svg" alt="Logo" class="logo-image" style="max-width: 300px; min-width: 150px;  z-index: 1; "/>
      </div>
      <div class="toolbar-icons">
        <div class="search-input">
          <q-input
            outlined
            rounded
            dense
            class="rounded-input"
            label="Busca"
            v-model="searchQuery"
          >
            <template v-slot:prepend>
              <div class="search-icon">
                <q-icon name="search" />
              </div>
            </template>
          </q-input>
        </div>
        <div style="display: flex; align-items: stretch; gap: 0.75rem;">
          <div class="icon-button">
            <img src="/../public/icons/notification.svg" alt="Notifications" class="icon-svg" />
          </div>
          <div class="icon-button">
            <img src="/../public/icons/shoppingCart.svg" alt="Cart" class="icon-svg" />
          </div>
          <div class="icon-avatar">
            <q-avatar size="34px" class="custom-avatar">
              <img src="/../public/icons/favicon-96x96.png" alt="Foto de Perfil" class="avatar-image" />
            </q-avatar>
          </div>

        </div>
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
.active-button {
  font-weight: bold;
  color: #144ec0;
}
   
.toolbar-icons {
  display: flex;
  align-items: center;
  margin-left: 10px;
  padding-right: 20px;
  display: flex;
  gap: 1.5rem;
}

.icon-button {
  cursor: pointer;
  font-size: 16px;
}

.icon-svg {
  width: 24px;
  height: 24px;
}

.search-input {
  display: flex;
  align-items: center;
  gap: 0.7rem;
}

.rounded-input {
  width: 20rem;
  min-width: 5rem;
  border-radius: 30px;
  overflow: hidden;
  background-color: #FBFDFF;
  border: 0.09rem solid #144ec0;
}

.search-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 100%;
  background-color: #FBFDFF;
  border-radius: 30px 0 0 30px;
}

.icon-avatar {
  margin-left: 0.20rem;
  display: flex;
  width: 1.5rem;
  height: 1.5rem;
  justify-content: center;
  align-items: center;
}

.q-ml-sm {
  margin-left: 10px;
}

.flex-grow-1 {
  flex-grow: 1;
}

.row,
.column,
.flex {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>
