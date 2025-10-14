<template>
  <section id="satu-data" class="section-content">
    <h2 class="text-3xl font-bold text-gray-800 mb-6">Integrasi Satu Data Kemendikdasmen</h2>

    <div class="bg-white rounded-lg shadow-md p-6 mb-6">
      <div class="text-center mb-6">
        <div class="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <i class="fas fa-database text-white text-3xl"></i>
        </div>
        <h3 class="text-2xl font-semibold text-gray-800 mb-2">Portal Satu Data Kemendikdasmen</h3>
        <p class="text-gray-600 max-w-2xl mx-auto">
          Portal Satu Data Kemendikdasmen menyediakan akses terpadu ke berbagai data dan informasi pendidikan dasar dan
          menengah di Indonesia.
          Platform ini mendukung transparansi dan akuntabilitas dalam pengelolaan data pendidikan.
        </p>
      </div>

      <div class="grid md:grid-cols-3 gap-6 mb-8">
        <div class="text-center p-4 bg-blue-50 rounded-lg">
          <i class="fas fa-school text-blue-600 text-2xl mb-3"></i>
          <h4 class="font-semibold text-gray-800 mb-2">Data Sekolah</h4>
          <p class="text-sm text-gray-600">Informasi lengkap tentang sekolah dasar dan menengah di seluruh Indonesia</p>
        </div>
        <div class="text-center p-4 bg-green-50 rounded-lg">
          <i class="fas fa-users text-green-600 text-2xl mb-3"></i>
          <h4 class="font-semibold text-gray-800 mb-2">Data Siswa</h4>
          <p class="text-sm text-gray-600">Statistik dan informasi siswa pendidikan dasar dan menengah</p>
        </div>
        <div class="text-center p-4 bg-orange-50 rounded-lg">
          <i class="fas fa-chalkboard-teacher text-orange-600 text-2xl mb-3"></i>
          <h4 class="font-semibold text-gray-800 mb-2">Data Guru</h4>
          <p class="text-sm text-gray-600">Informasi guru dan tenaga kependidikan di Indonesia</p>
        </div>
      </div>

      <div class="bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg p-8 text-white text-center">
        <h4 class="text-xl font-semibold mb-4">Akses Portal Satu Data Kemendikdasmen</h4>
        <p class="mb-6">Kunjungi portal resmi untuk mengakses data pendidikan terlengkap dan terkini</p>
        <a href="https://data.kemendikdasmen.go.id/" target="_blank"
          class="bg-white text-blue-800 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center">
          <i class="fas fa-external-link-alt mr-2"></i>
          Kunjungi Portal Satu Data
        </a>
      </div>
    </div>

    <!-- Fitur Unggulan -->
    <div class="grid md:grid-cols-2 gap-6 mt-6">
      <div class="bg-white rounded-lg shadow-md p-6">
        <h3 class="text-lg font-semibold text-gray-800 mb-4">
          <i class="fas fa-chart-line mr-2 text-blue-600"></i>Fitur Unggulan
        </h3>
        <ul class="space-y-3 text-gray-600">
          <li class="flex items-start">
            <i class="fas fa-check-circle text-green-500 mr-3 mt-1"></i>
            <span>Dashboard interaktif dengan visualisasi data yang menarik</span>
          </li>
          <li class="flex items-start">
            <i class="fas fa-check-circle text-green-500 mr-3 mt-1"></i>
            <span>Filter data berdasarkan wilayah, jenjang, dan kategori</span>
          </li>
          <li class="flex items-start">
            <i class="fas fa-check-circle text-green-500 mr-3 mt-1"></i>
            <span>Export data dalam berbagai format (Excel, PDF, CSV)</span>
          </li>
          <li class="flex items-start">
            <i class="fas fa-check-circle text-green-500 mr-3 mt-1"></i>
            <span>API terbuka untuk integrasi dengan sistem lain</span>
          </li>
          <li class="flex items-start">
            <i class="fas fa-check-circle text-green-500 mr-3 mt-1"></i>
            <span>Update data secara real-time dan berkala</span>
          </li>
        </ul>
      </div>

      <div class="bg-white rounded-lg shadow-md p-6">
        <h3 class="text-lg font-semibold text-gray-800 mb-4">
          <i class="fas fa-info-circle mr-2 text-blue-600"></i>Informasi Penting
        </h3>
        <div class="space-y-4">
          <div class="bg-blue-50 p-3 rounded-lg">
            <h4 class="font-semibold text-blue-800 text-sm mb-1">Akses Data</h4>
            <p class="text-blue-700 text-sm">Sebagian besar data dapat diakses secara bebas, namun beberapa data
              sensitif memerlukan permohonan khusus</p>
          </div>
          <div class="bg-green-50 p-3 rounded-lg">
            <h4 class="font-semibold text-green-800 text-sm mb-1">Update Data</h4>
            <p class="text-green-700 text-sm">Data diperbarui secara berkala sesuai dengan siklus pelaporan
              masing-masing unit kerja</p>
          </div>
          <div class="bg-orange-50 p-3 rounded-lg">
            <h4 class="font-semibold text-orange-800 text-sm mb-1">Dukungan Teknis</h4>
            <p class="text-orange-700 text-sm">Tim teknis siap membantu untuk pertanyaan terkait penggunaan portal dan
              akses data</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default { name: 'SatuData' }
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
