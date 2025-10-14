<template>
  <section id="regulasi" class="section-content">
    <h2 class="text-3xl font-bold text-gray-800 mb-6">
      Regulasi Terkait Informasi Publik
    </h2>

    <div class="bg-white rounded-lg shadow-md p-6 mb-6">
      <!-- Filter -->
      <div class="flex flex-wrap gap-4 mb-6">
        <input
          v-model="search"
          type="text"
          placeholder="Cari regulasi..."
          class="flex-1 min-w-64 border border-gray-300 rounded-lg px-4 py-2"
        />

        <select
          v-model="category"
          class="border border-gray-300 rounded-lg px-4 py-2"
        >
          <option value="">Semua Kategori</option>
          <option value="Undang-Undang">Undang-Undang</option>
          <option value="Peraturan Pemerintah">Peraturan Pemerintah</option>
          <option value="Permendikbud">Permendikbud</option>
          <option value="Surat Edaran">Surat Edaran</option>
          <option value="Peraturan KI">Peraturan KI</option>
        </select>
      </div>

      <!-- List -->
      <div class="space-y-4">
        <div
          v-for="item in filteredRegulations"
          :key="item.id"
          class="border border-gray-200 rounded-lg p-4 hover:bg-gray-50"
        >
          <div class="flex justify-between items-start">
            <div class="flex-1">
              <h3 class="font-semibold text-gray-800 mb-2">
                {{ item.title }}
              </h3>
              <p class="text-gray-600 text-sm mb-2">
                {{ item.description }}
              </p>
              <div class="flex items-center space-x-4 text-sm text-gray-500">
                <span>
                  <i class="fas fa-tag mr-1"></i>{{ item.category }}
                </span>
                <span>
                  <i class="fas fa-calendar mr-1"></i>{{ item.year }}
                </span>
              </div>
            </div>
            <div class="flex space-x-2 ml-4">
              <a
                :href="item.viewUrl"
                target="_blank"
                class="bg-green-500 text-white px-3 py-1 rounded text-sm hover:bg-green-600"
              >
                <i class="fas fa-eye"></i> Lihat
              </a>
              <a
                :href="item.downloadUrl"
                class="bg-blue-500 text-white px-3 py-1 rounded text-sm hover:bg-blue-600"
              >
                <i class="fas fa-download"></i> Unduh
              </a>
            </div>
          </div>
        </div>

        <!-- Jika tidak ada data -->
        <p
          v-if="filteredRegulations.length === 0"
          class="text-gray-500 text-center py-4"
        >
          Tidak ada regulasi ditemukan.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";

const regulations = ref([]);
const search = ref("");
const category = ref("");

// Ambil data JSON dari folder public
onMounted(async () => {
  const res = await fetch("/ppid/regulations.json");
  regulations.value = await res.json();
});

// Filter data sesuai pencarian & kategori
const filteredRegulations = computed(() => {
  return regulations.value.filter((item) => {
    const matchSearch =
      item.title.toLowerCase().includes(search.value.toLowerCase()) ||
      item.description.toLowerCase().includes(search.value.toLowerCase());
    const matchCategory = category.value
      ? item.category === category.value
      : true;
    return matchSearch && matchCategory;
  });
});
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
