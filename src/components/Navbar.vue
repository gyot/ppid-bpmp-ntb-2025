<template>
  <header class="bg-blue-900 text-white shadow-lg">
        <div class="container mx-auto px-4 py-4">
            <div class="flex items-center justify-between">
                <div class="flex items-center space-x-4">
                    <div class="w-12 h-12 flex items-center justify-center">
                        <img :src="logo" alt="Kemendikdasmen Logo" class="w-10 h-10 object-contain" />
                    </div>
                    <div>
                        <h1 class="text-xl font-bold">PPID BPMP Provinsi NTB</h1>
                        <p class="text-blue-200 text-sm">Pejabat Pengelola Informasi dan Dokumentasi</p>
                    </div>
                </div>
                <div class="hidden md:flex items-center space-x-4">
                    <i class="fas fa-phone text-blue-200"></i>
                    <span class="text-sm">Hotline: +62 811-3906-669</span>
                </div>
            </div>
        </div>
    </header>

    <!-- Navigation -->
    <nav class="bg-blue-800 text-white sticky top-0 z-50">
        <div class="container mx-auto px-4">
            <div class="flex items-center justify-between">
                <!-- Desktop Navigation -->
                <div class="hidden lg:flex space-x-1">
                    <router-link to="/" class="nav-btn px-4 py-3 hover:bg-blue-700 transition-colors whitespace-nowrap" exact-active-class="bg-blue-700">
                        <i class="fas fa-home mr-2"></i>Beranda
                    </router-link>
                    <router-link to="/profil" class="nav-btn px-4 py-3 hover:bg-blue-700 transition-colors whitespace-nowrap" exact-active-class="bg-blue-700">
                        <i class="fas fa-user-circle mr-2"></i>Profil PPID
                    </router-link>
                    <router-link to="/informasi" class="nav-btn px-4 py-3 hover:bg-blue-700 transition-colors whitespace-nowrap" exact-active-class="bg-blue-700">
                        <i class="fas fa-info-circle mr-2"></i>Jenis Informasi
                    </router-link>
                    <router-link to="/pelayanan" class="nav-btn px-4 py-3 hover:bg-blue-700 transition-colors whitespace-nowrap" exact-active-class="bg-blue-700">
                        <i class="fas fa-cogs mr-2"></i>Standar Pelayanan
                    </router-link>
                    <router-link to="/regulasi" class="nav-btn px-4 py-3 hover:bg-blue-700 transition-colors whitespace-nowrap" exact-active-class="bg-blue-700">
                        <i class="fas fa-gavel mr-2"></i>Regulasi
                    </router-link>
                    <router-link to="/pos" class="nav-btn px-4 py-3 hover:bg-blue-700 transition-colors whitespace-nowrap" exact-active-class="bg-blue-700">
                        <i class="fas fa-clipboard-list mr-2"></i>POS
                    </router-link>
                    <router-link to="/laporan" class="nav-btn px-4 py-3 hover:bg-blue-700 transition-colors whitespace-nowrap" exact-active-class="bg-blue-700">
                        <i class="fas fa-chart-bar mr-2"></i>Laporan
                    </router-link>
                    <router-link to="/satu-data" class="nav-btn px-4 py-3 hover:bg-blue-700 transition-colors whitespace-nowrap" exact-active-class="bg-blue-700">
                        <i class="fas fa-database mr-2"></i>Satu Data
                    </router-link>
                </div>

                <!-- Mobile Menu Button -->
                <div class="flex items-center justify-between w-full lg:hidden">
                    <span class="font-semibold" @click="toggleMobileMenu">Menu <i :class="mobileMenuOpen ? 'fas fa-times text-sm' : 'fas fa-bars text-sm'"></i></span>
                </div>
            </div>

            <!-- Mobile Navigation Menu -->
            <div v-if="mobileMenuOpen" class="lg:hidden bg-blue-900 border-t border-blue-700">
                <div class="py-2">
                    <router-link to="/" class="nav-btn w-full text-left px-4 py-3 hover:bg-blue-700 transition-colors border-b border-blue-700" exact-active-class="bg-blue-700">
                        <i class="fas fa-home mr-3"></i>Beranda
                    </router-link>
                    <router-link to="/profil" class="nav-btn w-full text-left px-4 py-3 hover:bg-blue-700 transition-colors border-b border-blue-700" exact-active-class="bg-blue-700">
                        <i class="fas fa-user-circle mr-3"></i>Profil PPID
                    </router-link>
                    <router-link to="/informasi" class="nav-btn w-full text-left px-4 py-3 hover:bg-blue-700 transition-colors border-b border-blue-700" exact-active-class="bg-blue-700">
                        <i class="fas fa-info-circle mr-3"></i>Jenis Informasi
                    </router-link>
                    <router-link to="/pelayanan" class="nav-btn w-full text-left px-4 py-3 hover:bg-blue-700 transition-colors border-b border-blue-700" exact-active-class="bg-blue-700">
                        <i class="fas fa-cogs mr-3"></i>Standar Pelayanan
                    </router-link>
                    <router-link to="/regulasi" class="nav-btn w-full text-left px-4 py-3 hover:bg-blue-700 transition-colors border-b border-blue-700" exact-active-class="bg-blue-700">
                        <i class="fas fa-gavel mr-3"></i>Regulasi
                    </router-link>
                    <router-link to="/pos" class="nav-btn w-full text-left px-4 py-3 hover:bg-blue-700 transition-colors border-b border-blue-700" exact-active-class="bg-blue-700">
                        <i class="fas fa-clipboard-list mr-3"></i>POS
                    </router-link>
                    <router-link to="/laporan" class="nav-btn w-full text-left px-4 py-3 hover:bg-blue-700 transition-colors border-b border-blue-700" exact-active-class="bg-blue-700">
                        <i class="fas fa-chart-bar mr-3"></i>Laporan
                    </router-link>
                    <router-link to="/satu-data" class="nav-btn w-full text-left px-4 py-3 hover:bg-blue-700 transition-colors" exact-active-class="bg-blue-700">
                        <i class="fas fa-database mr-3"></i>Satu Data
                    </router-link>
                </div>
            </div>
        </div>
    </nav>
</template>

<script setup>
import kemendikdasmenImg from '../assets/kemendikdasmen.png'
import { ref } from 'vue'

const logo = kemendikdasmenImg
const mobileMenuOpen = ref(false)
function toggleMobileMenu() {
  mobileMenuOpen.value = !mobileMenuOpen.value
}
function closeMobileMenu() {
  mobileMenuOpen.value = false
}
</script>

<style scoped>

.nav-btn {
  display: flex;
  align-items: center;
  font-weight: 500;
  border: none;
  background: none;
  cursor: pointer;
  transition: background 0.2s;
}
.nav-btn.bg-blue-700 {
  background: #1e3a8a;
}
@media (max-width: 1277px) {
  .hidden.lg\:flex {
    display: none !important;
  }
  .lg\:hidden {
    display: block !important;
  }
}
@media (min-width: 1278px) {
  .lg\:hidden {
    display: none !important;
  }
}
.mobile-menu-enter-active, .mobile-menu-leave-active {
  transition: max-height 0.3s cubic-bezier(.4,0,.2,1);
}
.mobile-menu-enter, .mobile-menu-leave-to {
  max-height: 0;
  overflow: hidden;
}
.mobile-menu-enter-to, .mobile-menu-leave {
  max-height: 500px;
}
.nav-btn:focus {
  outline: 2px solid #2563eb;
}
.nav-btn i {
  min-width: 1.5rem;
  text-align: center;
}
.nav-btn.bg-blue-700 {
  color: #fff;
}

</style>
