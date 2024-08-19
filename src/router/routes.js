const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: 'apropos', component: () => import('pages/AproposPage.vue') },
      { path: 'dons', component: () => import('pages/DonationPage.vue') }
    ]
  },
  {
    path: '/arbitrage',
    component: () => import('layouts/ArbitrageLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Arbitrage/ConnexionPage.vue') },
      { path: 'jugea', component: () => import('pages/Arbitrage/JugeaPage.vue') },
      { path: 'jugeb', component: () => import('pages/Arbitrage/JugebPage.vue') },
      { path: 'jugec', component: () => import('pages/Arbitrage/JugecPage.vue') },
      { path: 'ecran', component: () => import('pages/Arbitrage/EcranPage.vue') },
      { path: 'chrono', component: () => import('pages/Arbitrage/ChronoPage.vue') }
    ]
  },
  {
    path: '/administration',
    component: () => import('layouts/AdministrationLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Administration/IdentificationPage.vue') },
      { path: 'athlete', component: () => import('pages/Administration/AthletePage.vue') },
      { path: 'categorie', component: () => import('pages/Administration/CategoriePage.vue') },
      { path: 'discipline', component: () => import('pages/Administration/DisciplinePage.vue') },
      { path: 'techandcode', component: () => import('pages/Administration/TechAndCodePage.vue') },
      { path: 'mvtandtr', component: () => import('pages/Administration/MvtAndTrPage.vue') },
      { path: 'liaison', component: () => import('pages/Administration/LiaisonPage.vue') },
      { path: 'juge', component: () => import('pages/Administration/JugePage.vue') },
      { path: 'prestation', component: () => import('src/pages/Administration/PrestationPage.vue') },
      { path: 'passageorder', component: () => import('src/pages/Administration/PassageOrderPage.vue') },
      { path: 'classement', component: () => import('src/pages/Administration/ClassementPage.vue') },
      { path: 'configuration', component: () => import('pages/Administration/ConfigurationPage.vue') }
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
