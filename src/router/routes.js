
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Dashboard.vue') },
      { path: 'optic', component: () => import('pages/Optic.vue') },
      { path: 'transcoder', component: () => import('pages/Transcoder.vue') },
      { path: 'settings', component: () => import('pages/settings.vue') },
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
