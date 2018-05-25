export default [
  {
    path: '/',
    component: require('./assets/vue/pages/home.vue')
  },
  {
    path: '/about/',
    component: require('./assets/vue/pages/about.vue')
  },
  {
    path: '/zekr/:zi/',
    component: require('./assets/vue/pages/zekr.vue')
  },
  {
    path: '/panel-left/',
    component: require('./assets/vue/pages/panel-left.vue')
  },
  {
    path: '/settings/',
    component: require('./assets/vue/pages/settings.vue')
  }
]
