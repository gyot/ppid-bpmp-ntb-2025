<template>
  <section id="profil" class="section-content">
    <div class="bg-white rounded-lg shadow-md p-6 mb-6" v-if="profil">
      <h2 class="text-3xl font-bold text-gray-800 mb-6">{{ profil.title }}</h2>

      <!-- Tentang PPID -->
      <div class="grid md:grid-cols-3 gap-6 mb-8">
        <div class="md:col-span-2">
          <h3 class="text-xl font-semibold text-blue-800 mb-4">{{ profil.tentang.title }}</h3>
          <p v-for="(p, idx) in profil.tentang.descriptions" :key="idx" class="text-gray-600 mb-4">
            {{ p }}
          </p>
        </div>
        <div class="bg-white-100 rounded-lg p-4 flex items-center justify-center">
          <div class="text-center">
            <img :src="kantorDepanImg" alt="PPID Logo" class="mx-auto mb-4">
          </div>
        </div>
      </div>

      <!-- Visi & Misi -->
      <div class="grid md:grid-cols-2 gap-8 mb-8">
        <div>
          <h3 class="text-xl font-semibold text-blue-800 mb-4">Visi</h3>
          <p class="text-gray-600 bg-blue-50 p-4 rounded-lg">{{ profil.visi }}</p>
        </div>
        <div>
          <h3 class="text-xl font-semibold text-blue-800 mb-4">Misi</h3>
          <div class="bg-green-50 p-4 rounded-lg">
            <ul class="text-gray-600 space-y-2 list-decimal list-inside">
              <li v-for="(m, idx) in profil.misi" :key="idx">{{ m }}</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Tugas & Fungsi -->
      <div class="mb-8">
        <h3 class="text-xl font-semibold text-blue-800 mb-4">Tugas & Fungsi (Tupoksi)</h3>
        <div class="bg-blue-50 p-4 rounded-lg mb-4">
          <p class="text-gray-700 mb-4">{{ profil.tupoksi.intro }}</p>
          <ul class="text-gray-600 space-y-2 list-decimal list-inside">
            <li v-for="(t, idx) in profil.tupoksi.items" :key="idx">{{ t }}</li>
          </ul>
        </div>
      </div>

      <!-- Struktur Organisasi -->
      <div class="mb-8">
        <h3 class="text-xl font-semibold text-blue-800 mb-4">Struktur Organisasi</h3>
        <div class="bg-gray-50 p-6 rounded-lg">
          <div class="text-center mb-6">
            <div class="bg-blue-600 text-white p-4 rounded-lg inline-block mb-2">
              <i class="fas fa-user-tie text-2xl"></i>
            </div>
            <h4 class="font-semibold">{{ profil.struktur.kepala.jabatan }}</h4>
            <p class="text-sm text-gray-600">{{ profil.struktur.kepala.nama }}</p>
          </div>
          <div class="grid md:grid-cols-3 gap-4">
            <div v-for="(koor, idx) in profil.struktur.koordinator" :key="idx" class="text-center">
              <div :class="['text-white p-3 rounded-lg inline-block mb-2', koor.bgClass]">
                <i :class="koor.icon"></i>
              </div>
              <h5 class="font-semibold text-sm">{{ koor.jabatan }}</h5>
              <p class="text-xs text-gray-600">{{ koor.nama }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Kontak -->
      <div>
        <h3 class="text-xl font-semibold text-blue-800 mb-4">Informasi Kontak</h3>
        <div class="grid md:grid-cols-2 gap-6">
          <div v-for="(kontak, idx) in profil.kontak" :key="idx" class="space-y-4">
            <div class="flex items-center space-x-3" v-for="(item, j) in kontak.items" :key="j">
              <i :class="[item.icon, 'text-blue-600']"></i>
              <div>
                <p class="font-semibold">{{ item.label }}</p>
                <p class="text-gray-600">{{ item.value }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue"
import kantorDepanImg from '../assets/kantor_depan.jpg'

const profil = ref(null)

onMounted(async () => {
  const res = await fetch("/ppid/profil.json")
  profil.value = await res.json()
})
</script>

<style scoped>
.fade-in {
  animation: fadeIn 0.6s ease-in;
}
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>
