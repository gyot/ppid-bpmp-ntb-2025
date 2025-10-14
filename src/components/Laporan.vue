<template>
  <section id="laporan" class="section-content">
    <h2 class="text-3xl font-bold text-gray-800 mb-6">
      Laporan Layanan Informasi Publik
    </h2>

    <div class="grid gap-6">
      <!-- Laporan Tahunan -->
      <div class="bg-white rounded-lg shadow-md p-6">
        <h3 class="text-xl font-semibold text-blue-800 mb-4">
          <i class="fas fa-chart-line mr-2"></i>Laporan Tahunan
        </h3>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div
            v-for="laporan in data.laporanTahunan"
            :key="laporan.tahun"
            class="border border-gray-200 rounded-lg p-4 hover:bg-gray-50"
          >
            <div class="flex items-center justify-between mb-3">
              <h4 class="font-semibold text-gray-800">
                Laporan Tahun {{ laporan.tahun }}
              </h4>
              <i class="fas fa-file-pdf text-red-500 text-xl"></i>
            </div>
            <p class="text-gray-600 text-sm mb-3">
              {{ laporan.deskripsi }}
            </p>
            <div class="flex space-x-2">
              <a
                :href="laporan.file"
                target="_blank"
                class="bg-green-500 text-white px-3 py-1 rounded text-sm hover:bg-green-600"
              >
                <i class="fas fa-eye"></i> Lihat
              </a>
              <a
                :href="laporan.file"
                download
                class="bg-blue-500 text-white px-3 py-1 rounded text-sm hover:bg-blue-600"
              >
                <i class="fas fa-download"></i> Unduh
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Statistik Permohonan -->
      <div class="bg-white rounded-lg shadow-md p-6" v-if="data.statistik">
        <h3 class="text-xl font-semibold text-green-800 mb-4">
          <i class="fas fa-chart-bar mr-2"></i>Statistik Permohonan Informasi
        </h3>

        <div class="grid md:grid-cols-4 gap-4 mb-6">
          <div class="bg-blue-50 p-4 rounded-lg text-center">
            <div class="text-2xl font-bold text-blue-600 mb-1">
              {{ data.statistik.total }}
            </div>
            <div class="text-sm text-gray-600">Total Permohonan 2024</div>
          </div>
          <div class="bg-green-50 p-4 rounded-lg text-center">
            <div class="text-2xl font-bold text-green-600 mb-1">
              {{ data.statistik.selesai }}
            </div>
            <div class="text-sm text-gray-600">Permohonan Selesai</div>
          </div>
          <div class="bg-yellow-50 p-4 rounded-lg text-center">
            <div class="text-2xl font-bold text-yellow-600 mb-1">
              {{ data.statistik.proses }}
            </div>
            <div class="text-sm text-gray-600">Dalam Proses</div>
          </div>
          <div class="bg-red-50 p-4 rounded-lg text-center">
            <div class="text-2xl font-bold text-red-600 mb-1">
              {{ data.statistik.keberatan }}
            </div>
            <div class="text-sm text-gray-600">Keberatan</div>
          </div>
        </div>

        <div class="grid md:grid-cols-2 gap-6">
          <!-- per bulan -->
          <div>
            <h4 class="font-semibold text-gray-800 mb-3">
              Permohonan per Bulan (2024)
            </h4>
            <div class="space-y-2">
              <div
                v-for="(item, idx) in data.statistik.perBulan"
                :key="idx"
                class="flex justify-between items-center"
              >
                <span class="text-sm text-gray-600">{{ item.bulan }}</span>
                <div class="flex items-center space-x-2">
                  <div class="w-24 bg-gray-200 rounded-full h-2">
                    <div
                      class="bg-blue-600 h-2 rounded-full"
                      :style="{ width: item.persen + '%' }"
                    ></div>
                  </div>
                  <span class="text-sm font-semibold">{{ item.jumlah }}</span>
                </div>
              </div>
            </div>
          </div>

          <!-- kategori -->
          <div>
            <h4 class="font-semibold text-gray-800 mb-3">
              Kategori Informasi Diminta
            </h4>
            <div class="space-y-2">
              <div
                v-for="(kat, idx) in data.statistik.kategori"
                :key="idx"
                class="flex justify-between items-center"
              >
                <span class="text-sm text-gray-600">{{ kat.nama }}</span>
                <div class="flex items-center space-x-2">
                  <div class="w-24 bg-gray-200 rounded-full h-2">
                    <div
                      class="bg-green-600 h-2 rounded-full"
                      :style="{ width: kat.persen + '%' }"
                    ></div>
                  </div>
                  <span class="text-sm font-semibold">{{ kat.persen }}%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Tingkat Kepuasan -->
      <div class="bg-white rounded-lg shadow-md p-6" v-if="data.kepuasan">
        <h3 class="text-xl font-semibold text-purple-800 mb-4">
          <i class="fas fa-star mr-2"></i>Tingkat Kepuasan Layanan
        </h3>

        <div class="grid md:grid-cols-3 gap-6">
          <div class="text-center">
            <div class="text-4xl font-bold text-purple-600 mb-2">
              {{ data.kepuasan.total }}
            </div>
            <div class="text-gray-600 mb-4">Tingkat Kepuasan Keseluruhan</div>
            <div class="flex justify-center space-x-1">
              <i class="fas fa-star text-yellow-400" v-for="n in 5" :key="n"></i>
            </div>
          </div>

          <div>
            <h4 class="font-semibold text-gray-800 mb-3">Aspek Penilaian</h4>
            <div class="space-y-2">
              <div
                v-for="(asp, idx) in data.kepuasan.aspek"
                :key="idx"
                class="flex justify-between"
              >
                <span class="text-sm text-gray-600">{{ asp.nama }}</span>
                <span class="text-sm font-semibold">{{ asp.nilai }}</span>
              </div>
            </div>
          </div>

          <div>
            <h4 class="font-semibold text-gray-800 mb-3">Waktu Respon Rata-rata</h4>
            <div class="space-y-2">
              <div
                v-for="(res, idx) in data.kepuasan.respon"
                :key="idx"
                class="flex justify-between"
              >
                <span class="text-sm text-gray-600">{{ res.jenis }}</span>
                <span class="text-sm font-semibold">{{ res.waktu }}</span>
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

const data = ref({})

onMounted(async () => {
  const res = await fetch("/ppid/laporan.json")
  data.value = await res.json()
})
</script>
