<template>
  <section id="pelayanan" class="section-content">
    <h2 class="text-3xl font-bold text-gray-800 mb-6">Standar Pelayanan Informasi Publik</h2>

    <div class="grid gap-6">
      <!-- Tata Cara Permohonan -->
      <div class="bg-white rounded-lg shadow-md p-6">
        <h3 class="text-xl font-semibold text-blue-800 mb-4">
          <i class="fas fa-clipboard-list mr-2"></i>Tata Cara Permohonan Informasi Publik
        </h3>
        <div class="grid md:grid-cols-2 gap-6">
          <div>
            <h4 class="font-semibold text-gray-800 mb-3">Langkah-langkah Permohonan</h4>
            <ol class="text-gray-600 space-y-2">
              <li>1. Isi formulir permohonan informasi</li>
              <li>2. Lampirkan identitas diri (KTP/SIM)</li>
              <li>3. Serahkan ke loket PPID atau kirim online</li>
              <li>4. Tunggu konfirmasi dan proses verifikasi</li>
              <li>5. Terima informasi sesuai jadwal yang ditentukan</li>
            </ol>
          </div>
          <div>
            <h4 class="font-semibold text-gray-800 mb-3">Persyaratan</h4>
            <ul class="text-gray-600 space-y-2">
              <li>• Fotokopi identitas diri yang masih berlaku</li>
              <li>• Formulir permohonan yang telah diisi lengkap</li>
              <li>• Alasan penggunaan informasi</li>
              <li>• Cara memperoleh informasi yang diinginkan</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Formulir Online -->
      <div class="grid md:grid-cols-2 gap-6">
        <div class="bg-white rounded-lg shadow-md p-6">
          <h3 class="text-lg font-semibold text-green-800 mb-4">
            <i class="fas fa-file-alt mr-2"></i>Formulir Permohonan Informasi
          </h3>
          <form id="infoRequestForm" class="space-y-4">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Nama Lengkap</label>
              <input type="text" class="w-full border border-gray-300 rounded-lg px-3 py-2" required>
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <input type="email" class="w-full border border-gray-300 rounded-lg px-3 py-2" required>
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">No. Telepon</label>
              <input type="tel" class="w-full border border-gray-300 rounded-lg px-3 py-2" required>
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Informasi yang Diminta</label>
              <textarea class="w-full border border-gray-300 rounded-lg px-3 py-2 h-24" required></textarea>
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Tujuan Penggunaan</label>
              <textarea class="w-full border border-gray-300 rounded-lg px-3 py-2 h-20" required></textarea>
            </div>
            <button type="submit" class="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700">
              <i class="fas fa-paper-plane mr-2"></i>Kirim Permohonan
            </button>
          </form>
        </div>

        <div class="bg-white rounded-lg shadow-md p-6">
          <h3 class="text-lg font-semibold text-orange-800 mb-4">
            <i class="fas fa-exclamation-triangle mr-2"></i>Formulir Pengajuan Keberatan
          </h3>
          <form id="objectionForm" class="space-y-4">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Nama Lengkap</label>
              <input type="text" class="w-full border border-gray-300 rounded-lg px-3 py-2" required>
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <input type="email" class="w-full border border-gray-300 rounded-lg px-3 py-2" required>
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">No. Registrasi Permohonan</label>
              <input type="text" class="w-full border border-gray-300 rounded-lg px-3 py-2" required>
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Alasan Keberatan</label>
              <textarea class="w-full border border-gray-300 rounded-lg px-3 py-2 h-24" required></textarea>
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Kasus Posisi</label>
              <textarea class="w-full border border-gray-300 rounded-lg px-3 py-2 h-20" required></textarea>
            </div>
            <button type="submit" class="w-full bg-orange-600 text-white py-2 rounded-lg hover:bg-orange-700">
              <i class="fas fa-gavel mr-2"></i>Ajukan Keberatan
            </button>
          </form>
        </div>
      </div>

      <!-- Maklumat & Standar -->
      <div class="grid md:grid-cols-2 gap-6">
        <div class="bg-white rounded-lg shadow-md p-6">
          <h3 class="text-lg font-semibold text-purple-800 mb-4">
            <i class="fas fa-certificate mr-2"></i>Maklumat Pelayanan
          </h3>
          <div class="bg-purple-50 p-4 rounded-lg">
            <p class="text-gray-700 font-medium mb-3">“Dengan ini, kami sanggup menyelenggarakan pelayanan sesuai standar pelayanan yang telah ditetapkan dan apabila tidak menepati janji ini, kami siap menerima sanksi sesuai peraturan perundang-undangan yang berlaku”</p>
           
          </div>
        </div>

        <div class="bg-white rounded-lg shadow-md p-6">
          <h3 class="text-lg font-semibold text-blue-800 mb-4">
            <i class="fas fa-money-bill-wave mr-2"></i>Standar Biaya
          </h3>
          <div class="space-y-3">
            <div class="flex justify-between items-center border-b pb-2">
              <span class="text-gray-600">Permohonan Informasi</span>
              <span class="font-semibold text-green-600">GRATIS</span>
            </div>
            
            <div class="flex justify-between items-center">
              <span class="text-gray-600">Pengiriman via pos</span>
              <span class="font-semibold">Sesuai tarif pos</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Tata Cara Pengaduan -->
      <div class="bg-white rounded-lg shadow-md p-6">
        <h3 class="text-xl font-semibold text-red-800 mb-4">
          <i class="fas fa-comments mr-2"></i>Tata Cara Pengelolaan Pengaduan
        </h3>
        <div class="grid md:grid-cols-3 gap-6">
          <div class="text-center">
            <div class="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
              <i class="fas fa-edit text-red-600 text-2xl"></i>
            </div>
            <h4 class="font-semibold mb-2">1. Penyampaian</h4>
            <p class="text-sm text-gray-600">Sampaikan pengaduan melalui formulir online, email, atau datang langsung
            </p>
          </div>
          <div class="text-center">
            <div class="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
              <i class="fas fa-search text-yellow-600 text-2xl"></i>
            </div>
            <h4 class="font-semibold mb-2">2. Verifikasi</h4>
            <p class="text-sm text-gray-600">Tim PPID akan memverifikasi dan menindaklanjuti pengaduan dalam 3x24 jam
            </p>
          </div>
          <div class="text-center">
            <div class="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
              <i class="fas fa-check-circle text-green-600 text-2xl"></i>
            </div>
            <h4 class="font-semibold mb-2">3. Penyelesaian</h4>
            <p class="text-sm text-gray-600">Pengaduan diselesaikan maksimal 30 hari kerja dengan laporan tertulis</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default { name: 'Pelayanan' }
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
