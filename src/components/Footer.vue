<template>
  <footer class="bg-gray-800 text-white py-8 mt-12">
        <div class="container mx-auto px-4">
            <div class="grid md:grid-cols-4 gap-6">
                <div>
                    <h4 class="font-semibold mb-4">{{ title }}</h4>
                    <p class="text-gray-300 text-sm">Pejabat Pengelola Informasi dan Dokumentasi BPMP Provinsi NTB</p>
                </div>
                <div>
                    <h4 class="font-semibold mb-4">Kontak</h4>
                    <div class="space-y-2 text-sm text-gray-300">
                        <p><i class="fas fa-phone mr-2"></i>+62 811-3906-669</p>
                        <p><i class="fas fa-envelope mr-2"></i>ntblpmp@gmail.com</p>
                        <p><i class="fas fa-clock mr-2"></i>Senin - Jumat: 08:00 - 16:00 WIB</p>
                    </div>
                </div>
                <div>
                    <h4 class="font-semibold mb-4">Layanan</h4>
                    <div class="space-y-2 text-sm text-gray-300">
                        <p>• Permohonan Informasi Publik</p>
                        <p>• Pengajuan Keberatan</p>
                        <p>• Konsultasi Informasi</p>
                        <p>• Pengaduan Layanan</p>
                    </div>
                </div>
                <div>
                    <h4 class="font-semibold mb-4">Tautan Terkait</h4>
                    <div class="space-y-2 text-sm text-gray-300">
                        <a href="https://kemendikdasmen.go.id" class="hover:text-white">• Kemendikdasmen</a>
                        <a href="https://data.kemendikdasmen.go.id" class="hover:text-white">• Satu Data</a>
                        <a href="#" class="hover:text-white">• Komisi Informasi</a>
                        <a href="#" class="hover:text-white">• Portal Nasional RI</a>
                    </div>
                </div>
            </div>
            <div class="border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-300">
                <p>&copy; {{ yearNow }} {{title}}.</p>
            </div>
        </div>
    </footer>
</template>

<script setup>
// name: Footer
import { ref } from 'vue'
const title = ref('PPID BPMP Provinsi NTB')
const yearNow = new Date().getFullYear()
</script>

<style scoped>
/* Gunakan Tailwind, tidak perlu custom style */
</style>
