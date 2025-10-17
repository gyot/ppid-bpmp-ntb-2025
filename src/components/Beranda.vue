<template>
    <!-- Popup Maklumat Pelayanan -->
    <div v-if="showMaklumat" class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <div class="relative bg-gray-50 rounded-xl shadow-2xl px-6 py-8 text-center max-w-lg w-full mx-4">
            <!-- Paperclip decorations -->
            <div class="absolute left-4 -top-4 text-4xl text-blue-200 select-none" style="font-family: cursive; transform: rotate(-15deg);">C</div>
            <div class="absolute right-4 -top-4 text-4xl text-blue-200 select-none" style="font-family: cursive; transform: rotate(15deg);">C</div>
            <div class="mb-4">
                <span class="text-2xl md:text-3xl font-extrabold text-red-700 tracking-wide" style="letter-spacing:1px;">MAKLUMAT PELAYANAN</span>
            </div>
            <div class="text-lg md:text-xl italic font-medium text-gray-900 leading-relaxed mb-6">
                <span>“Dengan ini, kami sanggup menyelenggarakan pelayanan sesuai standar pelayanan yang telah ditetapkan dan apabila tidak menepati janji ini, kami siap menerima sanksi sesuai peraturan perundang-undangan yang berlaku”</span>
            </div>
            <button @click="showMaklumat = false" class="mt-2 px-6 py-2 bg-blue-700 hover:bg-blue-800 text-white rounded-lg font-semibold shadow transition">
                Tutup
            </button>
        </div>
    </div>

    <!-- Konten Lama -->
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

            <!-- Informasi tentang PPID -->
             
            <div class="mt-12 w-full mb-12">
                <div class="bg-white rounded-2xl shadow-lg px-8 py-8 flex flex-col md:flex-row items-center border-l-8 border-blue-500">
                    
                    <div class="flex-1 text-center md:text-left">
                        <p class="text-xl text-gray-800 leading-relaxed">
                            <span class="font-bold text-blue-700">PPID</span>
                            (<span class="italic text-blue-600">Pejabat Pengelola Informasi dan Dokumentasi</span>)
                            adalah pejabat yang bertugas mengelola dan melayani informasi publik dari badan publik seperti instansi pemerintah, BUMN, dan perguruan tinggi sesuai amanat
                            <span class="font-semibold text-blue-700">Undang-Undang Nomor 14 Tahun 2008</span>
                            tentang Keterbukaan Informasi Publik (<span class="font-semibold text-blue-700">UU KIP</span>).
                            <br>
                            <span class="block mt-4 text-blue-600 font-medium text-lg">
                                Keberadaan PPID mempermudah masyarakat memperoleh informasi karena pelayanan dilakukan melalui satu pintu.
                            </span>
                        </p>
                    </div>
                </div>
            </div>
            &nbsp;
           

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

            
            <!-- Tombol Form dan E-PPID -->
            <div class="text-center my-12 space-y-6">
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSfLoZSsUkZYnoguNd-eSJLCVub-nlisScWwWr29Zx3N8OXsiw/viewform?usp=header" target="_blank" rel="noopener"
                    class="inline-flex items-center justify-center bg-blue-700 hover:bg-blue-800 text-white text-xl font-semibold px-8 py-4 rounded-xl shadow-lg transition">
                    <i class="fas fa-play-circle mr-2"></i> FORM PERMOHONAN INFORMASI
                </a>

                <div class="flex flex-col items-center space-y-4">
                    <div class="flex items-center space-x-3">
                        <img src="https://www.bbpmpjabar.id/wp-content/uploads/2023/09/google-play-store-logo-A9F117BED5-seeklogo.com_.png"
                            alt="Google Play" class="w-10 h-10">
                        <a href="https://play.google.com/store/apps/details?id=com.dera.perman.ppidkemendikbudristek"
                            target="_blank" rel="noopener"
                            class="inline-flex items-center justify-center bg-blue-700 hover:bg-blue-800 text-white text-lg font-semibold px-6 py-3 rounded-xl shadow transition">
                            <i class="fas fa-play-circle mr-2"></i> E-PPID ANDROID
                        </a>
                    </div>
                </div>
            </div>

            <!-- PRANALA LUAR -->
            <div class="text-center mt-16">
                <h3 class="text-2xl font-semibold text-blue-700 mb-8">PRANALA LUAR</h3>

                <div class="grid grid-cols-2 md:grid-cols-4 gap-8 justify-items-center">
                    <a href="https://ppid.kemendikdasmen.go.id/" target="_blank" rel="noopener"
                        class="flex flex-col items-center space-y-3 hover:opacity-90 transition">
                        <img src="https://www.bbpmpjabar.id/wp-content/uploads/2023/09/PPID-Pusat.png"
                            alt="PPID Kemendikdasmen" class="w-28 h-28 object-contain rounded-lg shadow">
                        <span class="font-semibold text-blue-800">PPID KEMENDIKDASMEN</span>
                    </a>

                    <a href="https://bpmpntb.lapor.go.id/" target="_blank" rel="noopener"
                        class="flex flex-col items-center space-y-3 hover:opacity-90 transition">
                        <img src="https://www.bbpmpjabar.id/wp-content/uploads/2023/09/LAPOR5-1.png"
                            alt="SP4N Lapor" class="w-28 h-28 object-contain rounded-lg shadow">
                        <span class="font-semibold text-blue-800">SP4N LAPOR!</span>
                    </a>

                    <a href="https://wbs.kemdikbud.go.id/" target="_blank" rel="noopener"
                        class="flex flex-col items-center space-y-3 hover:opacity-90 transition">
                        <img src="https://www.bbpmpjabar.id/wp-content/uploads/2023/09/Sistem-Pelaporan-Pelanggaran.png"
                            alt="WBS" class="w-28 h-28 object-contain rounded-lg shadow">
                        <span class="font-semibold text-blue-800">WBS</span>
                    </a>

                    <a href="https://spse.inaproc.id/kemendikdasmen/" target="_blank" rel="noopener"
                        class="flex flex-col items-center space-y-3 hover:opacity-90 transition">
                        <img src="https://www.bbpmpjabar.id/wp-content/uploads/2025/10/inaproc-spse.png"
                            alt="LPSE" class="w-28 h-28 object-contain rounded-lg shadow">
                        <span class="font-semibold text-blue-800">LPSE</span>
                    </a>
                </div>
            </div>
            
        </section>
    </Transition>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useHead } from '@vueuse/head'

const showMaklumat = ref(true)

onMounted(() => {
    // Optional: Only show once per session
    // if (sessionStorage.getItem('maklumatShown')) {
    //     showMaklumat.value = false
    // } else {
    //     showMaklumat.value = true
    //     sessionStorage.setItem('maklumatShown', '1')
    // }
})

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

.statistik-img {
    width: 150px; /* Atur lebar gambar */
    height: 150px; /* Atur tinggi gambar */
    object-fit: cover; /* Memastikan gambar tidak terdistorsi */
    margin: 0 auto; /* Memusatkan gambar */
}
</style>
