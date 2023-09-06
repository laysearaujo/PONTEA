<template>
  <q-header reveal style="background-color: white; color: black;">
    <q-toolbar class="q-space-between" style="background-color: #D9DCF9; padding: 1%;">
      <div>
        <img src="/../public/images/logo.svg" alt="Logo" class="logo-image" style="max-width: 300px; min-width: 150px; z-index: 1;" />
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
              <img src="/../public/images/profile.jpeg" alt="Foto de Perfil" class="avatar-image" />
            </q-avatar>
          </div>
        </div>
      </div>
    </q-toolbar>

    <!-- Use v-if para ocultar a div quando a rota estiver na raiz -->
    <div class="breadcrumb" style="margin-top: 1%; margin-left: 15px;" v-if="route.path !== '/' && route.path !== '/home'">
      <router-link to="/" class="breadcrumb-link">Home</router-link>
      <span v-if="route.path !== '/'">|</span>
      <router-link v-if="route.path !== '/'" :to="route.path" class="breadcrumb-link">{{ getBreadcrumbLabel(route) }}</router-link>
    </div>

    <div class="toolbar-options" style="margin-top: 1%; margin-left: 15px;">
      <router-link
        to="/atividades"
        class="icon-button-option"
        :class="{ 'active-button': isActiveTab('/atividades') }"
      >
        Atividades
      </router-link>
      <router-link
        to="/experiencias"
        class="icon-button-option"
        :class="{ 'active-button': isActiveTab('/experiencias') }"
      >
        Campos de experiências
      </router-link>
      <router-link
        to="/educadores"
        class="icon-button-option"
        :class="{ 'active-button': isActiveTab('/educadores') }"
      >
        Educadores
      </router-link>
    </div>
  </q-header>
</template>

<script>
import { defineComponent } from 'vue';
import { useRoute } from 'vue-router';

export default defineComponent({
  name: 'HeaderComponent',

  setup() {
    const route = useRoute();

    const getBreadcrumbLabel = (route) => {
      // Mapeie suas rotas e os rótulos correspondentes aqui
      const routeLabels = {
        '/atividades': 'Atividades',
        '/experiencias': 'Campos de Experiências',
        '/educadores': 'Educadores',
        // Adicione mais rotas e rótulos conforme necessário
      };

      return routeLabels[route.path] || '';
    };

    const isActiveTab = (tabRoute) => {
      return route.path === tabRoute;
    };

    // Verificar se deve mostrar o breadcrumb
    const shouldShowBreadcrumb = () => {
      return route.path !== '/' && route.path !== '/home';
    };

    return {
      route,
      getBreadcrumbLabel,
      isActiveTab,
      shouldShowBreadcrumb,
    };
  },
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
  gap: 1.5rem;
}

.toolbar-options {
  display: flex;
  width: 76rem;
  align-items: center;
  gap: 1rem;
}

.icon-button-option {
  color: var(--textos-cinza, #616167);
  text-decoration: none;
  cursor: pointer;
  font-size: 0.90rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1rem; /* 125% */
}

.icon-button-option.active-button {
  text-decoration: underline; /* Adiciona um sublinhado quando ativo */
  color: #144EC0; /* Cor azul para ativo */
  text-decoration-skip-ink: auto; /* Controlar a posição do sublinhado */
  text-underline-offset: 0.5rem; /* Ajustar o deslocamento vertical (aumente conforme necessário) */
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

.breadcrumb {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  color: var(--textos-cinza, #616167); /* Cor cinza para o breadcrumb */
}

.breadcrumb-link {
  text-decoration: none; /* Remover sublinhado dos links do breadcrumb */
  color: var(--textos-cinza, #616167); /* Cor cinza para os links do breadcrumb */
  cursor: pointer;
}

/* Estilo hover para os links do breadcrumb */
.breadcrumb-link:hover {
  text-decoration: underline; /* Adicionar sublinhado quando o mouse estiver sobre o link */
  color: #144ec0; /* Cor azul quando o mouse estiver sobre o link */
}
</style>
