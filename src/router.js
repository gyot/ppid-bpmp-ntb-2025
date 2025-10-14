import { createRouter, createWebHistory } from 'vue-router'
import Beranda from './components/Beranda.vue'
import Profil from './components/Profil.vue'
import Informasi from './components/Informasi.vue'
import Pelayanan from './components/Pelayanan.vue'
import Regulasi from './components/Regulasi.vue'
import Pos from './components/Pos.vue'
import Laporan from './components/Laporan.vue'
import SatuData from './components/SatuData.vue'

const routes = [
  { path: '/', name: 'beranda', component: Beranda },
  { path: '/profil', name: 'profil', component: Profil },
  { path: '/informasi', name: 'informasi', component: Informasi },
  { path: '/pelayanan', name: 'pelayanan', component: Pelayanan },
  { path: '/regulasi', name: 'regulasi', component: Regulasi },
  { path: '/pos', name: 'pos', component: Pos },
  { path: '/laporan', name: 'laporan', component: Laporan },
  { path: '/satu-data', name: 'satu-data', component: SatuData }
]

const router = createRouter({
  history: createWebHistory('/ppid/'),
  routes
})

export default router
