
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/home', component: () => import('pages/HomePage.vue') },
      { path: '/atividades', component: () => import('pages/ActivitiesPage.vue'), // Rota pai "atividades"
        children: [
          { path: 'detalhes', component: () => import('pages/DetailsPage.vue') } // Rota filha "detalhes" -> atividades/detalhes
        ]
      },
      { path: '/experiencias', component: () => import('pages/ExperiencesPage.vue') },
      { path: '/educadores', component: () => import('pages/EducatorsPage.vue') },
      { path: '/busca', component: () => import('pages/SearchPage.vue') },
      { path: '/perfilEducador', component: () => import('pages/PerfilEducador.vue') },
      { path: '/perfilCliente', component: () => import('pages/PerfilCliente.vue') },
    ]
  },
  {
    path: '/login',
    component: () => import('layouts/LandingLayout.vue'),
    children: [
      { path: '', component: () => import('pages/LoginPage.vue') } // Rota vazia corresponde a /login
    ]
  },
  {
    path: '/cadastro',
    component: () => import('layouts/LandingLayout.vue'),
    children: [
      { path: '', component: () => import('pages/CadastroPage.vue') } // Rota vazia corresponde a /cadastro
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
