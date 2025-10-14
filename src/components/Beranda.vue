<template>
    <!-- Laporan Section -->
    <Transition name="fade-in" mode="out-in">
        <section id="beranda" class="section-content fade-in">
            <!-- Hero Slider -->
            <!-- Hero Section -->
            <div
                class="bg-blue-800 text-white sticky rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 mb-10">
                <!-- Gambar kanan -->
                <div class="flex-1 flex justify-center">
                    <img src="/src/assets/IMG_7232.webp" alt="Penganugerahan Penghargaan"
                        class="rounded-2xl shadow-lg w-full max-w-md md:max-w-lg" />
                </div>
                <!-- Teks kiri -->
                <div class="flex-1 space-y-4">
                    <h1 class="text-3xl md:text-4xl font-bold leading-tight">
                        Laman Informasi Publik <br />
                        <span class="text-blue-100">BPMP Provinsi NTB</span>
                    </h1>
                    <p class="text-lg leading-relaxed text-blue-100">
                        Informasi Publik adalah informasi yang dihasilkan, disimpan, dikelola, dikirim,
                        dan/atau diterima oleh suatu badan publik yang berkaitan dengan penyelenggara
                        dan penyelenggaraan negara dan/atau penyelenggaraan badan publik lainnya yang
                        sesuai dengan Undang-Undang.
                    </p>
                    <a href="https://peraturan.bpk.go.id/Details/163827/permendikbud-no-41-tahun-2020"
                        class="inline-block bg-white text-blue-900 px-5 py-3 rounded-lg font-semibold shadow hover:bg-gray-100 transition">
                        Permendikbud 41/2020
                    </a>
                </div>

                
            </div>


            <!-- Visi Misi -->
            <div class="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                    <h3 class="text-xl font-semibold text-blue-800 mb-4">Visi</h3>
                    <p class="text-gray-600 bg-blue-50 p-4 rounded-lg">
                        Terwujudnya pelayanan informasi yang transparan dan akuntabel untuk memenuhi hak pemohon
                        informasi sesuai dengan ketentuan peraturan perundang-undangan yang berlaku.
                    </p>
                </div>
                <div>
                    <h3 class="text-xl font-semibold text-blue-800 mb-4">Misi</h3>
                    <div class="bg-green-50 p-4 rounded-lg">
                        <ul class="text-gray-600 space-y-2 list-decimal list-inside">
                            <li>Menyediakan informasi publik yang akurat dan dapat dipertanggungjawabkan;</li>
                            <li>Membangun dan mengembangkan sistem penyediaan dan layanan informasi;</li>
                            <li>Meningkatkan pengelolaan informasi dan dokumentasi secara baik, efisien, mudah diakses
                                dan bersifat desentralisasi; dan</li>
                            <li>Memanfaatkan teknologi informasi dalam memberikan layanan informasi publik
                                kepada masyarakat dan mendukung pengelolaan keterbukaan informasi publik.</li>
                        </ul>
                    </div>
                </div>
            </div>

            <!-- Quick Links -->
            <div class="grid md:grid-cols-4 gap-4 mb-8">
                <button onclick="showSection('informasi')"
                    class="bg-green-500 hover:bg-green-600 text-white p-6 rounded-lg text-center hover-scale transition-all">
                    <i class="fas fa-file-alt text-3xl mb-3"></i>
                    <h4 class="font-semibold">Informasi Berkala</h4>
                </button>
                <button onclick="showSection('pelayanan')"
                    class="bg-blue-500 hover:bg-blue-600 text-white p-6 rounded-lg text-center hover-scale transition-all">
                    <i class="fas fa-clipboard-check text-3xl mb-3"></i>
                    <h4 class="font-semibold">Permohonan Informasi</h4>
                </button>
                <button onclick="showSection('regulasi')"
                    class="bg-purple-500 hover:bg-purple-600 text-white p-6 rounded-lg text-center hover-scale transition-all">
                    <i class="fas fa-balance-scale text-3xl mb-3"></i>
                    <h4 class="font-semibold">Regulasi</h4>
                </button>
                <button onclick="showSection('laporan')"
                    class="bg-orange-500 hover:bg-orange-600 text-white p-6 rounded-lg text-center hover-scale transition-all">
                    <i class="fas fa-chart-line text-3xl mb-3"></i>
                    <h4 class="font-semibold">Laporan</h4>
                </button>
            </div>

            <!-- Statistics -->
            <div class="bg-white rounded-lg shadow-md p-6">
                <h3 class="text-2xl font-bold text-gray-800 mb-6">Statistik Layanan</h3>
                <div class="grid md:grid-cols-4 gap-6">
                    <div class="text-center">
                        <div class="text-3xl font-bold text-blue-600 mb-2">2,847</div>
                        <div class="text-gray-600">Total Dokumen</div>
                    </div>
                    <div class="text-center">
                        <div class="text-3xl font-bold text-green-600 mb-2">1,523</div>
                        <div class="text-gray-600">Permohonan Selesai</div>
                    </div>
                    <div class="text-center">
                        <div class="text-3xl font-bold text-orange-600 mb-2">98.5%</div>
                        <div class="text-gray-600">Tingkat Kepuasan</div>
                    </div>
                    <div class="text-center">
                        <div class="text-3xl font-bold text-purple-600 mb-2">24 Jam</div>
                        <div class="text-gray-600">Rata-rata Respon</div>
                    </div>
                </div>
            </div>
        </section>
    </Transition>
</template>
<script setup>
// name: Beranda
import { useHead } from '@vueuse/head'

const title = 'PPID BPMP Provinsi NTB'
const description = 'Melayani kebutuhan informasi publik dengan transparansi dan akuntabilitas di BPMP Provinsi NTB.'
const url = window.location.origin + '/'
import kemendikdasmenImg from '../assets/kemendikdasmen.png'
const image = kemendikdasmenImg
useHead({
    title,
    meta: [
        // Primary Meta Tags
        { name: 'title', content: title },
        { name: 'description', content: description },
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
        { name: 'keywords', content: 'PPID BPMP NTB, Standar Pelayanan Informasi Publik, Tata Cara Permohonan Informasi, Formulir Permohonan Informasi, Formulir Pengajuan Keberatan, Biaya Layanan Informasi Publik, Tata Cara Pengelolaan Pengaduan, Layanan PPID BPMP NTB, Permohonan Informasi Pendidikan, Keterbukaan Informasi Publik, Maklumat Pelayanan PPID, Prosedur Permohonan Informasi, Transparansi Layanan Publik NTB' },

        // Open Graph / Facebook
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: url },
        { property: 'og:title', content: title },
        { property: 'og:description', content: description },
        { property: 'og:image', content: image },

        // Twitter
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:url', content: url },
        { name: 'twitter:title', content: title },
        { name: 'twitter:description', content: description },
        { name: 'twitter:image', content: image }
    ],
    link: [
        { rel: 'icon', type: 'image/x-icon', href: '/src/assets/kemendikdasmen.ico' }
    ]
})
</script>
<style scoped>
.fade-in-enter-active,
.fade-in-leave-active {
    transition: opacity 0.6s, transform 0.6s;
}

.fade-in-enter-from,
.fade-in-leave-to {
    opacity: 0;
    transform: translateY(20px);
}

.fade-in-enter-to,
.fade-in-leave-from {
    opacity: 1;
    transform: translateY(0);
}
</style>
