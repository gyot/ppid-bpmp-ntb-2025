<template>
  <section id="informasi" class="section-content">
    <h2 class="text-3xl font-bold text-gray-800 mb-6">Jenis Informasi Publik</h2>

    <div class="grid gap-6">
      <!-- Informasi Berkala -->
      <div class="bg-white rounded-lg shadow-md p-6">
        <h3 class="text-xl font-semibold text-blue-800 mb-4">
          <i class="fas fa-calendar-alt mr-2"></i>Informasi Berkala
        </h3>

        <!-- Filter -->
        <div class="mb-4 flex flex-wrap gap-4">
          <select v-model="yearFilter" class="border border-gray-300 rounded-lg px-4 py-2">
            <option value="">Semua Tahun</option>
            <option v-for="year in availableYears" :key="year" :value="year">{{ year }}</option>
          </select>
          <select v-model="categoryFilter" class="border border-gray-300 rounded-lg px-4 py-2">
            <option value="">Semua Kategori</option>
            <option v-for="cat in availableCategories" :key="cat" :value="cat">{{ cat }}</option>
          </select>
          <button
            class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
            @click="page = 1"
          >
            <i class="fas fa-filter mr-2"></i>Filter
          </button>
        </div>

        <!-- Tabel -->
        <div class="overflow-x-auto">
          <table class="w-full border-collapse border border-gray-300">
            <thead>
              <tr>
                <th class="border border-gray-300 px-4 py-2 text-left">No</th>
                <th class="border border-gray-300 px-4 py-2 text-left">Judul Dokumen</th>
                <th class="border border-gray-300 px-4 py-2 text-left">Kategori</th>
                <th class="border border-gray-300 px-4 py-2 text-left">Tahun</th>
                <th class="border border-gray-300 px-4 py-2 text-left">Penanggung Jawab</th>
                <th class="border border-gray-300 px-4 py-2 text-left">Aksi</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(doc, idx) in pagedDocuments" :key="doc.id">
                <td class="border border-gray-300 px-4 py-2">{{ idx + 1 + (page-1)*pageSize }}</td>
                <td class="border border-gray-300 px-4 py-2">{{ doc.title }}</td>
                <td class="border border-gray-300 px-4 py-2">{{ doc.category }}</td>
                <td class="border border-gray-300 px-4 py-2">{{ doc.year }}</td>
                <td class="border border-gray-300 px-4 py-2">{{ doc.responsible }}</td>
                <td class="border border-gray-300 px-4 py-2">
                  <a
                    :href="doc.viewUrl"
                    target="_blank"
                    class="bg-green-500 text-white px-3 py-1 rounded mr-2 hover:bg-green-600"
                  >
                    <i class="fas fa-eye"></i> Lihat
                  </a>
                  <a
                    :href="doc.downloadUrl"
                    class="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                  >
                    <i class="fas fa-download"></i> Unduh
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- Pagination -->
        <div class="flex justify-end items-center mt-4 space-x-2">
          <button
            class="px-3 py-1 rounded bg-gray-200 hover:bg-gray-300"
            :disabled="page === 1"
            @click="page--"
          >Prev</button>
          <span>Halaman {{ page }} dari {{ totalPages }}</span>
          <button
            class="px-3 py-1 rounded bg-gray-200 hover:bg-gray-300"
            :disabled="page === totalPages"
            @click="page++"
          >Next</button>
        </div>
      </div>

      <!-- Informasi lainnya (statis) -->
      <div class="grid md:grid-cols-3 gap-6">
        <div class="bg-white rounded-lg shadow-md p-6">
          <h3 class="text-lg font-semibold text-orange-800 mb-4">
            <i class="fas fa-bolt mr-2"></i>Informasi Serta Merta
          </h3>
          <p class="text-gray-600 mb-4">Informasi yang dapat mengancam hajat hidup orang banyak dan ketertiban umum.</p>
          <ul class="text-sm text-gray-600 space-y-2">
            <li>• Pengumuman darurat pendidikan</li>
            <li>• Peringatan keamanan sekolah</li>
            <li>• Informasi bencana alam</li>
          </ul>
        </div>

        <div class="bg-white rounded-lg shadow-md p-6">
          <h3 class="text-lg font-semibold text-green-800 mb-4">
            <i class="fas fa-clock mr-2"></i>Informasi Setiap Saat
          </h3>
          <p class="text-gray-600 mb-4">Informasi yang harus disediakan dan diumumkan secara berkala.</p>
          <ul class="text-sm text-gray-600 space-y-2">
            <li>• Data statistik pendidikan</li>
            <li>• Informasi anggaran</li>
            <li>• Profil pejabat</li>
          </ul>
        </div>

        <div class="bg-white rounded-lg shadow-md p-6">
          <h3 class="text-lg font-semibold text-red-800 mb-4">
            <i class="fas fa-ban mr-2"></i>Informasi Dikecualikan
          </h3>
          <p class="text-gray-600 mb-4">Daftar informasi yang dikecualikan dari keterbukaan informasi publik.</p>
          <ul class="text-sm text-gray-600 space-y-2">
            <li>• Informasi rahasia negara</li>
            <li>• Data pribadi siswa</li>
            <li>• Informasi yang sedang dalam proses hukum</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted } from "vue"

const page = ref(1)
const pageSize = ref(5)
const yearFilter = ref("")
const categoryFilter = ref("")
const documents = ref([])

onMounted(async () => {
  try {
    const res = await fetch("/ppid/informasi.json")
    documents.value = await res.json()
  } catch (err) {
    console.error("Gagal memuat data:", err)
  }
})

const availableYears = computed(() => {
  const years = new Set(documents.value.map(d => d.year))
  return [...years].sort((a, b) => b - a)
})

const availableCategories = computed(() => {
  const cats = new Set(documents.value.map(d => d.category))
  return [...cats]
})

const filteredDocuments = computed(() => {
  return documents.value.filter(doc => {
    const matchYear = yearFilter.value === "" || String(doc.year) === String(yearFilter.value)
    const matchCategory = categoryFilter.value === "" || doc.category === categoryFilter.value
    return matchYear && matchCategory
  })
})

const totalPages = computed(() => Math.ceil(filteredDocuments.value.length / pageSize.value))

const pagedDocuments = computed(() => {
  const start = (page.value - 1) * pageSize.value
  return filteredDocuments.value.slice(start, start + pageSize.value)
})
</script>
