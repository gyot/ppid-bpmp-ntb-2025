import { createRouter, createWebHistory } from 'vue-router'
import Beranda from './components/Beranda.vue'
import Profil from './components/Profil.vue'
import Informasi from './components/Informasi.vue'
import Pelayanan from './components/Pelayanan.vue'
import Regulasi from './components/Regulasi.vue'
import Pos from './components/Pos.vue'
import Laporan from './components/Laporan.vue'
import SatuData from './components/SatuData.vue'
import ProfilPejabat from './components/ProfilPejabat.vue'
import ProfilPegawai from './components/ProfilPegawai.vue'

// Tambahkan komponen NotFound sederhana
const NotFound = { template: '<div style="text-align:center;padding:60px 0"><h1>404</h1><p>Halaman tidak ditemukan.</p></div>' }

const routes = [
  { path: '/', name: 'beranda', component: Beranda },
  { path: '/profil', name: 'profil', component: Profil },
  { path: '/profil-pejabat', name: 'profil-pejabat', component: ProfilPejabat },
  { path: '/profil-pegawai', name: 'profil-pegawai', component: ProfilPegawai },
  { path: '/informasi', name: 'informasi', component: Informasi },
  { path: '/pelayanan', name: 'pelayanan', component: Pelayanan },
  { path: '/regulasi', name: 'regulasi', component: Regulasi },
  { path: '/pos', name: 'pos', component: Pos },
  { path: '/laporan', name: 'laporan', component: Laporan },
  { path: '/satu-data', name: 'satu-data', component: SatuData },
  // Route 404
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound }
]

const router = createRouter({
  history: createWebHistory('/ppid/'),
  routes
})

export default router
