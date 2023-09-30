import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: '/top',
    component: () => import('../views/TopView.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    component: () => import('../views/NotFoundView.vue'),
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

/** 画面遷移時*/
router.beforeEach((to, from, next) => {
  // 遷移元情報
  router['referrer'] = from
  // 対象画面へ遷移
  next()
})

export default router