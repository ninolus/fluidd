import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

// Views
import Dashboard from '@/views/Dashboard.vue'
import Jobs from '@/views/Jobs.vue'
import Configure from '@/views/Configure.vue'
import Tune from '@/views/Tune.vue'
import Interface from '@/views/Interface.vue'
import SettingsBar from '@/components/SettingsBar.vue'
import NotFound from '@/views/NotFound.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/jobs',
    name: 'Jobs',
    component: Jobs
  },
  {
    path: '/tune',
    name: 'Tune',
    component: Tune
  },
  {
    path: '/configure',
    name: 'Printer Configuration',
    component: Configure
  },
  {
    path: '/interface',
    name: 'Interface',
    components: {
      default: Interface,
      navigation: SettingsBar
    }
  },
  {
    path: '*',
    name: '404',
    component: NotFound
  }
]

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes
})

export default router
