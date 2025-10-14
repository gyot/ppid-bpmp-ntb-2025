<template>
  <section id="pos" class="section-content">
    <h2 class="text-3xl font-bold text-gray-800 mb-6">
      Prosedur Operasional Standar (POS)
    </h2>

    <div class="bg-white rounded-lg shadow-md p-6">
      <p class="text-gray-600 mb-6">
        Berikut adalah daftar Prosedur Operasional Standar (POS) yang berkaitan
        dengan pengelolaan dan pelayanan informasi publik di PPID Kemendikdasmen.
      </p>

      <div class="grid gap-4">
        <div
          v-for="(item, index) in posList"
          :key="index"
          class="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 fade-in"
        >
          <div class="flex justify-between items-center">
            <div class="flex-1">
              <h3 class="font-semibold text-gray-800 mb-2">
                <i class="fas fa-file-pdf text-red-500 mr-2"></i>
                {{ item.title }}
              </h3>
              <p class="text-gray-600 text-sm mb-2">
                {{ item.description }}
              </p>
              <div class="flex items-center space-x-4 text-sm text-gray-500">
                <span>
                  <i class="fas fa-calendar mr-1"></i>Diperbarui: {{ item.updated }}
                </span>
                <span>
                  <i class="fas fa-file mr-1"></i>{{ item.fileType }}, {{ item.fileSize }}
                </span>
              </div>
            </div>
            <div class="flex space-x-2 ml-4">
              <a
                :href="item.viewUrl"
                target="_blank"
                class="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 flex items-center"
              >
                <i class="fas fa-eye mr-2"></i>Lihat
              </a>
              <a
                :href="item.downloadUrl"
                download
                class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 flex items-center"
              >
                <i class="fas fa-download mr-2"></i>Unduh
              </a>
            </div>
          </div>
        </div>

        <!-- loading state -->
        <div v-if="loading" class="text-center text-gray-500">
          Memuat data POS...
        </div>
      </div>

      <div class="mt-8 bg-blue-50 p-4 rounded-lg">
        <h4 class="font-semibold text-blue-800 mb-2">
          <i class="fas fa-info-circle mr-2"></i>Informasi Penting
        </h4>
        <ul class="text-blue-700 text-sm space-y-1">
          <li>• Semua POS ini telah disesuaikan dengan peraturan perundang-undangan yang berlaku</li>
          <li>• POS akan diperbarui secara berkala sesuai dengan perkembangan regulasi</li>
          <li>• Untuk pertanyaan lebih lanjut, silakan hubungi PPID melalui kontak yang tersedia</li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue"

const posList = ref([])
const loading = ref(true)

onMounted(async () => {
  try {
    const res = await fetch("/ppid/pos.json") // file JSON diletakkan di /public/ppid/pos.json
    if (!res.ok) throw new Error("Gagal ambil data")
    posList.value = await res.json()
  } catch (err) {
    console.error("Error:", err)
  } finally {
    loading.value = false
  }
})
</script>

<style scoped>
.fade-in {
  animation: fadeIn 0.6s ease-in;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
