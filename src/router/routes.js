const Index = () => import('@/pages/index').then(m => m.default || m)
const NotFound = () => import('@/pages/errors/404').then(m => m.default || m)

export default [
  { path: '/', name: 'index', component: Index },

  { path: '*', component: NotFound }
]
