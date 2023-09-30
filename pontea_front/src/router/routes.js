const routes = [
  {
    path: '/',
    redirect: '/landing',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: 'home', name: 'HomePage', component: () => import('pages/HomePage.vue'), props: true },
      { path: 'carteira', component: () => import('pages/WalletPage.vue') },
      { path: 'atividades', component: () => import('pages/ActivitiesPage.vue') },
      { path: 'detalhes/:dados', name: 'DetailsPage', component: () => import('pages/DetailsPage.vue'), props: true },
      { path: 'experiencias', component: () => import('pages/ExperiencesPage.vue') },
      { path: 'educadores', component: () => import('pages/EducatorsPage.vue') },
      { path: 'busca', component: () => import('pages/SearchPage.vue') },
      { path: 'perfilEducador', component: () => import('pages/PerfilEducador.vue') },
      { path: 'perfilCliente', component: () => import('pages/PerfilCliente.vue') },
      { path: 'ser-educador', component: () => import('pages/SerEducadorPage.vue') },
      { path: 'adicionar-atividade', component: () => import('pages/AddAtividadePage.vue') },
    ]
  },
  {
    path:'/landing',
    component: () => import('layouts/LandingLayout.vue'),
    children: [
      { path: '', component: () => import('pages/LandingPage.vue') }
    ]
  },
  {
    path: '/login',
    beforeEnter: (to, from, next) => {
      const token = localStorage.getItem("token");
      if (token) {
        next('/home');
      } else {
        next();
      }
    },
    component: () => import('layouts/LandingLayout.vue'),
    children: [
      { path: '', component: () => import('pages/LoginPage.vue') },
    ]
  },
  {
    path: '/cadastro',
    beforeEnter: (to, from, next) => {
      const token = localStorage.getItem("token");
      if (token) {
        next('/home');
      } else {
        next();
      }
    },
    component: () => import('layouts/LandingLayout.vue'),
    children: [
      { path: '', component: () => import('pages/CadastroPage.vue') },
    ]
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
