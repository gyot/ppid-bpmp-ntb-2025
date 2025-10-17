<template>
  <div>
    <h1 class="text-2xl font-bold mb-6">Informasi Publik</h1>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

      <div
      v-for="(item, index) in informasi"
      :key="index"
      class="bg-white rounded-2xl shadow-md p-6 transition hover:shadow-lg">
      <!-- Judul -->
      <h3
        :class="[
          'text-lg font-semibold mb-4 flex items-center',
          warnaJudul(item.Uraian)
        ]"
      >
        <i :class="[ikon(item.Uraian), 'mr-2 text-xl']"></i>
        {{ item.Uraian }}
      </h3>

      <!-- Deskripsi otomatis -->
      <p class="text-gray-700 mb-4 leading-relaxed">
        {{ deskripsi(item.Uraian) }}
      </p>

      <!-- Daftar Item -->
      <ul class="text-gray-800 text-sm space-y-2">
        <li v-for="(sub, i) in item.Items" :key="i">
          •
          <template v-if="sub.Link && sub.Link.startsWith('http')">
            <a
              :href="sub.Link"
              target="_blank"
              rel="noopener noreferrer"
              class="text-blue-700 hover:underline"
            >
              {{ sub.Informasi || "Tautan" }}
            </a>
          </template>
          <template v-else>
            {{ sub.Informasi }}
          </template>
        </li>
      </ul>
      </div>
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

        <!-- <div class="bg-white rounded-lg shadow-md p-6">
          <h3 class="text-lg font-semibold text-green-800 mb-4">
            <i class="fas fa-clock mr-2"></i>Informasi Setiap Saat
          </h3>
          <p class="text-gray-600 mb-4">Informasi yang harus disediakan dan diumumkan secara berkala.</p>
          <ul class="text-sm text-gray-600 space-y-2">
            <li>• <a href="https://www.facebook.com/bpmpntb" target="_blank" rel="noopener noreferrer">Facebook BPMP
                Provinsi NTB</a></li>
            <li>• <a href="https://www.instagram.com/bpmpntb/" target="_blank" rel="noopener noreferrer">Instagram BPMP
                Provinsi NTB</a></li>
            <li>• <a href="https://www.youtube.com/@bpmp_ntb" target="_blank" rel="noopener noreferrer">YouTube BPMP
                Provinsi NTB</a></li>
            <li>• <a href="https://bpmpntb.kemendikdasmen.go.id/" target="_blank" rel="noopener noreferrer">Website
                Resmi BPMP Provinsi NTB</a></li>

          </ul>
        </div> -->

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
</template>

<script setup>
import { ref, onMounted } from "vue";

const informasi = ref([]);

// Ambil data dari file JSON (taruh di folder /public)
onMounted(async () => {
  // Set the browser tab title for this page
  try {
    document.title = "Informasi - PPID BPMP NTB";
  } catch (e) {
    // ignore in non-browser environments
  }

  try {
    const res = await fetch("/ppid/informasi_ppid.json");
    if (!res.ok) throw new Error(`Gagal memuat file JSON: ${res.status} ${res.statusText}`);

    const contentType = (res.headers.get("content-type") || "").toLowerCase();
    if (!contentType.includes("application/json")) {
      // If server returned HTML or plain text (an error page), log it and avoid parse error
      const body = await res.text();
      console.error("Diterima response bukan JSON:", body);
      throw new Error("Response is not valid JSON");
    }

    informasi.value = await res.json();
  } catch (error) {
    console.error("Gagal memuat data:", error);
  }
});

// --- Utility Fungsi ---

const warnaJudul = (uraian = "") => {
  uraian = uraian.toLowerCase();
  if (uraian.includes("berkala")) return "text-blue-800";
  if (uraian.includes("serta merta")) return "text-orange-800";
  if (uraian.includes("setiap saat")) return "text-green-800";
  if (uraian.includes("dikecualikan")) return "text-red-800";
  if (uraian.includes("komitmen")) return "text-indigo-700";
  if (uraian.includes("digitalisasi")) return "text-teal-700";
  return "text-gray-800";
};

const ikon = (uraian = "") => {
  uraian = uraian.toLowerCase();
  if (uraian.includes("berkala")) return "fas fa-calendar-alt";
  if (uraian.includes("serta merta")) return "fas fa-bolt";
  if (uraian.includes("setiap saat")) return "fas fa-clock";
  if (uraian.includes("dikecualikan")) return "fas fa-ban";
  if (uraian.includes("komitmen")) return "fas fa-handshake";
  if (uraian.includes("digitalisasi")) return "fas fa-laptop-code";
  return "fas fa-folder";
};

const deskripsi = (uraian = "") => {
  uraian = uraian.toLowerCase();
  if (uraian.includes("berkala"))
    return "Informasi yang wajib disediakan dan diumumkan secara berkala.";
  if (uraian.includes("serta merta"))
    return "Informasi yang dapat mengancam hajat hidup orang banyak dan ketertiban umum.";
  if (uraian.includes("setiap saat"))
    return "Informasi yang harus disediakan dan diumumkan setiap saat.";
  if (uraian.includes("dikecualikan"))
    return "Daftar informasi yang dikecualikan dari keterbukaan informasi publik.";
  if (uraian.includes("komitmen"))
    return "Aspek yang menunjukkan komitmen organisasi terhadap keterbukaan informasi.";
  if (uraian.includes("digitalisasi"))
    return "Inisiatif digitalisasi dalam pengelolaan dan penyebarluasan informasi publik.";
  return "";
};
</script>

<style scoped>
div:hover {
  transform: translateY(-3px);
  transition: all 0.2s ease-in-out;
}
</style>
