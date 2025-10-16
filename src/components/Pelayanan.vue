<template>
  <div class="container">
    <!-- Header -->
    <header class="header shadow-xl">
      <div>
        <h1>Standar Pelayanan BPMP Provinsi Nusa Tenggara Barat</h1>
        <p>Ditetapkan di Mataram • 6 Januari 2025</p>
      </div>
    </header>

    <!-- Tabs -->
    <nav class="tabs">
      <button
        v-for="tab in tabs"
        :key="tab.id"
        class="tab"
        :class="{ active: currentTab === tab.id }"
        @click="currentTab = tab.id"
        type="button"
      >
        {{ tab.name }}
      </button>
    </nav>

    <!-- Panels -->
    <section
      v-for="panel in panels"
      :key="panel.id"
      v-show="currentTab === panel.id"
      class="panel animate-fade"
    >
      <div class="grid">
        <div>
          <div class="section-title flex items-center gap-2">
            <span class="icon-title"></span>
            {{ panel.title }}
          </div>
          <div class="muted">{{ panel.subtitle }}</div>

          <div class="box" v-if="panel.summary">
            <strong>Ringkasan Mekanisme</strong>
            <ol>
              <li v-for="(step, i) in panel.summary" :key="i">{{ step }}</li>
            </ol>
          </div>

          <div class="acc">
            <div
              v-for="(acc, i) in panel.accordion"
              :key="i"
              class="item"
            >
              <div class="head" @click="toggleAccordion(panel.id, i)">
                <h4>{{ acc.title }}</h4>
                <span class="chip">{{ acc.badge }}</span>
                <span class="arrow" :class="{ open: acc.show }">&#9660;</span>
              </div>
              <div class="body" :class="{ show: acc.show }">
                <p v-if="typeof acc.content === 'string'">{{ acc.content }}</p>
                <ul v-else>
                  <li v-for="(c, j) in acc.content" :key="j">{{ c }}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <!-- Sidebar -->
        <aside>
          <div class="kpi">
            <div
              v-for="(k, i) in panel.kpi"
              :key="i"
              class="card"
            >
              <div class="num">{{ k.value }}</div>
              <div class="small">{{ k.label }}</div>
            </div>
          </div>

          <div class="contact">
            <strong>Kontak & Pengaduan</strong>
            <div class="small">
              {{ panel.contact }}
            </div>
          </div>
        </aside>
      </div>
    </section>

    <footer>
      Dokumen sumber: Draft "Standar Pelayanan 2025" — BPMP Provinsi Nusa Tenggara Barat.
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const currentTab = ref('data')

const tabs = [
  { id: 'data', name: 'Data & Informasi' },
  { id: 'pemetaan', name: 'Pemetaan & Supervisi' },
  { id: 'kemitraan', name: 'Kemitraan' },
  { id: 'fasilitasi', name: 'Fasilitasi' },
  { id: 'sarpras', name: 'Peminjaman Sarpras' },
  { id: 'pengaduan', name: 'Pengaduan Masyarakat' },
  { id: 'magang', name: 'Penerimaan Magang' }
]

// Data panel (disingkat sebagian; bisa dilengkapi sesuai dokumen)
const panels = ref([
  {
    "id": "data",
    "title": "Standar Pelayanan — Data & Informasi Mutu Pendidikan",
    "subtitle": "Layanan permintaan data/informasi melalui ULT dan SPIP. Tidak dipungut biaya.",
    "summary": [
      "Pemohon mengajukan permohonan melalui ULT BPMP NTB.",
      "ULT memeriksa dokumen dan meneruskan ke SPIP.",
      "SPIP berkoordinasi dengan pengelola data dan informasi.",
      "Data diserahkan ke pemohon, arsip disimpan."
    ],
    "accordion": [
      {
        "title": "Persyaratan",
        "badge": "Surat / ID",
        "show": false,
        "content": [
          "Surat permohonan resmi dari instansi/organisasi.",
          "Surat tugas bagi pemohon yang datang langsung.",
          "Tanda pengenal/ID card."
        ]
      },
      {
        "title": "Jangka Waktu",
        "badge": "Maks. 5 hari kerja",
        "show": false,
        "content": "Paling lama 5 hari kerja atau sesuai jenis data dan informasi yang diminta."
      },
      {
        "title": "Biaya",
        "badge": "Gratis",
        "show": false,
        "content": "Tidak dipungut biaya untuk layanan data & informasi mutu pendidikan."
      }
    ],
    "kpi": [
      { "value": "5 hrk", "label": "Maks. waktu" },
      { "value": "Gratis", "label": "Biaya" },
      { "value": "SPIP", "label": "Penanggung jawab" }
    ],
    "contact": "Kepala BPMP NTB — Jl. Panji Tilarnegara No.8, Mataram\nTelepon/WA: 0811-390-6669"
  },
  {
    "id": "pemetaan",
    "title": "Standar Pelayanan — Pemetaan & Supervisi Mutu Pendidikan",
    "subtitle": "Pelayanan sesuai disposisi Kepala → Kasubbag → Tim Pemetaan & Supervisi.",
    "summary": [
      "Pemohon mengajukan permohonan melalui ULT BPMP NTB.",
      "Disposisi Kepala kepada Kasubbag Umum.",
      "Kasubbag koordinasi Tim Pemetaan & Supervisi.",
      "Laporan hasil disampaikan ke dinas/yayasan."
    ],
    "accordion": [
      {
        "title": "Persyaratan",
        "badge": "Permohonan & Data",
        "show": false,
        "content": [
          "Permohonan supervisi mutu oleh pihak berkepentingan.",
          "Data sekolah & alamat lengkap.",
          "Permohonan diajukan 1 tahun sebelumnya."
        ]
      },
      {
        "title": "Jangka Waktu",
        "badge": "5 hari kerja",
        "show": false,
        "content": "Pelaksanaan pemetaan dan supervisi maksimal 5 hari kerja atau sesuai kesepakatan."
      },
      {
        "title": "Biaya",
        "badge": "Sesuai SBM",
        "show": false,
        "content": "Biaya ditentukan berdasarkan standar biaya masukan atau kesepakatan."
      }
    ],
    "kpi": [
      { "value": "5 hr", "label": "Estimasi admin" },
      { "value": "Tim Pemetaan", "label": "Pelaksana" }
    ],
    "contact": "Kasubbag Umum — Koordinasi Tim Pemetaan & Supervisi"
  },
  {
    "id": "kemitraan",
    "title": "Standar Pelayanan — Kemitraan Penjaminan Mutu Pendidikan",
    "subtitle": "Layanan kerjasama peningkatan mutu pendidikan melalui MoU dan proposal kegiatan.",
    "summary": [
      "Pemohon mengajukan surat dan proposal kemitraan melalui ULT.",
      "Disposisi Kepala ke Kasubbag Umum.",
      "Tim menyusun MoU dan jadwal kegiatan.",
      "Kegiatan dilaksanakan sesuai kesepakatan."
    ],
    "accordion": [
      {
        "title": "Persyaratan",
        "badge": "Surat & Proposal",
        "show": false,
        "content": [
          "Surat resmi lembaga pengusul.",
          "Proposal kemitraan penjaminan mutu pendidikan.",
          "Adanya MoU antara BPMP dan pengguna layanan."
        ]
      },
      {
        "title": "Jangka Waktu",
        "badge": "Sesuai kegiatan",
        "show": false,
        "content": "Durasi mengikuti jenis kegiatan kerjasama sesuai proposal yang disetujui."
      },
      {
        "title": "Biaya",
        "badge": "Sesuai RAB",
        "show": false,
        "content": "Mengacu pada Standar Biaya Masukan APBN atau kesepakatan."
      }
    ],
    "kpi": [
      { "value": "MoU", "label": "Produk layanan" },
      { "value": "Sesuai RAB", "label": "Biaya" }
    ],
    "contact": "Kepala BPMP NTB — Jl. Panji Tilarnegara No.8, Mataram\nTelepon/WA: 0811-390-6669"
  },
  {
    "id": "fasilitasi",
    "title": "Standar Pelayanan — Fasilitasi Penjaminan Mutu Pendidikan",
    "subtitle": "Pelayanan fasilitasi peningkatan mutu pendidikan sesuai permohonan dan kesepakatan.",
    "summary": [
      "Pemohon mengajukan surat permohonan fasilitasi melalui ULT.",
      "Disposisi Kepala kepada Kasubbag Umum.",
      "Kasubbag koordinasi Tim Fasilitasi.",
      "Fasilitasi dilaksanakan sesuai jadwal."
    ],
    "accordion": [
      {
        "title": "Persyaratan",
        "badge": "Surat & Jadwal",
        "show": false,
        "content": [
          "Surat permohonan fasilitasi kepada Kepala BPMP.",
          "Melampirkan jadwal dan materi kegiatan."
        ]
      },
      {
        "title": "Jangka Waktu",
        "badge": "2 hari kerja",
        "show": false,
        "content": "Paling lama 2 hari kerja sejak surat diterima."
      },
      {
        "title": "Biaya",
        "badge": "Sesuai SBM",
        "show": false,
        "content": "Sesuai standar biaya masukan APBN/APBD/kemampuan pemohon."
      }
    ],
    "kpi": [
      { "value": "2 hrk", "label": "Maks. waktu" },
      { "value": "SBM", "label": "Biaya" },
      { "value": "Tim Fasilitasi", "label": "Pelaksana" }
    ],
    "contact": "Kasubbag Umum — Koordinasi Tim Fasilitasi Penjaminan Mutu"
  },
  {
    "id": "sarpras",
    "title": "Standar Pelayanan — Peminjaman Sarana & Prasarana",
    "subtitle": "Layanan peminjaman ruang dan fasilitas dengan tarif PNBP sesuai ketentuan.",
    "summary": [
      "Pemohon mengajukan permohonan melalui ULT BPMP NTB.",
      "Kasubbag Umum koordinasi dengan Koordinator HTK.",
      "Petugas mencatat data peminjaman.",
      "Pemohon menggunakan fasilitas sesuai jadwal."
    ],
    "accordion": [
      {
        "title": "Persyaratan",
        "badge": "Surat / ID",
        "show": false,
        "content": [
          "Surat permohonan peminjaman dari instansi (organisasi).",
          "Kartu identitas bagi perorangan."
        ]
      },
      {
        "title": "Jangka Waktu",
        "badge": "2 hari kerja",
        "show": false,
        "content": "Jawaban diberikan maksimal 2 hari kerja sejak permohonan masuk."
      },
      {
        "title": "Biaya",
        "badge": "PNBP",
        "show": false,
        "content": "Mengacu pada tarif PNBP yang disetujui Kementerian Keuangan."
      }
    ],
    "kpi": [
      { "value": "2 hrk", "label": "Respon" },
      { "value": "PNBP", "label": "Biaya" },
      { "value": "HTK", "label": "Koordinator" }
    ],
    "contact": "Kasubbag Umum — Koordinator Urusan Humas & Kerumahtanggaan"
  },
  {
    "id": "pengaduan",
    "title": "Standar Pelayanan — Pengaduan Masyarakat",
    "subtitle": "Layanan penerimaan dan penanganan pengaduan masyarakat tanpa biaya.",
    "summary": [
      "Pengguna layanan menyampaikan aduan secara langsung atau daring.",
      "SPIP menerima dan mencatat pengaduan.",
      "Bukti penerimaan aduan diberikan kepada pelapor.",
      "SPIP menindaklanjuti sesuai ketentuan."
    ],
    "accordion": [
      {
        "title": "Persyaratan",
        "badge": "Identitas / Buku Tamu",
        "show": false,
        "content": [
          "Mengisi buku tamu elektronik atau manual.",
          "Menunjukkan tanda pengenal/ID Card."
        ]
      },
      {
        "title": "Jangka Waktu",
        "badge": "1 hari kerja",
        "show": false,
        "content": "Pengaduan ditindaklanjuti paling lama 1 hari kerja."
      },
      {
        "title": "Biaya",
        "badge": "Gratis",
        "show": false,
        "content": "Tidak dikenakan biaya."
      }
    ],
    "kpi": [
      { "value": "1 hrk", "label": "Maks. waktu" },
      { "value": "Gratis", "label": "Biaya" },
      { "value": "SPIP", "label": "Pelaksana" }
    ],
    "contact": "Unit Layanan Terpadu BPMP NTB — Jl. Panji Tilarnegara No.8, Mataram\nTelepon/WA: 0811-390-6669"
  },
  {
    "id": "magang",
    "title": "Standar Pelayanan — Penerimaan Peserta Magang",
    "subtitle": "Layanan penerimaan mahasiswa/siswa magang di BPMP NTB.",
    "summary": [
      "Lembaga pendidikan mengirim surat permohonan ke Kepala BPMP.",
      "Kepala BPMP menugaskan staf pembimbing magang.",
      "Surat persetujuan dikirim ke pemohon.",
      "Peserta magang diterima sesuai jadwal yang disetujui."
    ],
    "accordion": [
      {
        "title": "Persyaratan",
        "badge": "Surat Permohonan",
        "show": false,
        "content": [
          "Surat permohonan dari pimpinan lembaga pendidikan.",
          "Menyebutkan jumlah peserta dan jadwal pelaksanaan."
        ]
      },
      {
        "title": "Jangka Waktu",
        "badge": "5 hari kerja",
        "show": false,
        "content": "Proses maksimal 5 hari kerja sejak permohonan diterima."
      },
      {
        "title": "Biaya",
        "badge": "Gratis",
        "show": false,
        "content": "Tidak dikenakan biaya."
      }
    ],
    "kpi": [
      { "value": "5 hrk", "label": "Maks. waktu" },
      { "value": "Gratis", "label": "Biaya" },
      { "value": "BPMP NTB", "label": "Penanggung jawab" }
    ],
    "contact": "Kepala BPMP NTB — Jl. Panji Tilarnegara No.8, Mataram\nTelepon/WA: 0811-390-6669"
  }
]
)

const toggleAccordion = (panelId, index) => {
  const panel = panels.value.find(p => p.id === panelId)
  if (panel) {
    panel.accordion[index].show = !panel.accordion[index].show
  }
}
</script>

<style scoped>
:root {
  --green-1: #0f2c7b;
  --green-2: #11178c;
  --gold: #f2c94c;
  --bg: #f6f7fb;
  --card: #ffffff;
  --text: #070d37;
  --shadow: 0 8px 32px rgba(16, 28, 123, 0.08);
}
.container {
  max-width: 1100px;
  margin: 32px auto 28px auto;
  padding: 18px;
  font-family: 'Poppins', sans-serif;
  color: var(--text);
  background: linear-gradient(180deg, #f6f6fb 60%, #fff 100%);
  border-radius: 18px;
  box-shadow: var(--shadow);
}
.header {
  background: linear-gradient(90deg, var(--green-1), var(--green-2));
  color: rgb(0, 0, 0);
  padding: 26px 24px;
  border-radius: 14px;
  display: flex;
  align-items: center;
  gap: 20px;
  box-shadow: 0 4px 24px rgba(16, 37, 123, 0.10);
  margin-bottom: 10px;
}
.logo {
  width: 76px;
  height: 76px;
  background: rgba(255, 255, 255, 0.13);
  border-radius: 12px;
  text-align: center;
  font-weight: 700;
  font-size: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 2px;
  box-shadow: 0 2px 8px rgba(16, 37, 123, 0.08);
}
.tabs {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 22px;
  justify-content: center;
}
.tab {
  background: var(--card);
  padding: 12px 20px;
  border-radius: 12px;
  border: 1.5px solid #e7e6f4;
  cursor: pointer;
  font-weight: 600;
  color: var(--green-1);
  font-size: 15px;
  transition: all 0.18s;
  box-shadow: 0 2px 8px rgba(16, 37, 123, 0.04);
}
.tab.active {
  background: linear-gradient(90deg, var(--green-1), var(--green-2));
  color: rgb(0, 34, 255);
  border-color: transparent;
  box-shadow: 0 4px 16px rgba(16, 37, 123, 0.10);
  transform: translateY(-2px) scale(1.04);
}
.panel {
  margin-top: 22px;
  background: var(--card);
  border-radius: 14px;
  padding: 28px 24px;
  border: 1.5px solid #e9eef7;
  box-shadow: 0 8px 32px rgba(16, 37, 123, 0.06);
  animation: fadeIn 0.5s;
}
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px);}
  to { opacity: 1; transform: translateY(0);}
}
.grid {
  display: grid;
  grid-template-columns: 1fr 320px;
  gap: 28px;
  align-items: flex-start;
}
@media (max-width: 980px) {
  .grid {
    grid-template-columns: 1fr;
    gap: 18px;
  }
  aside {
    margin-top: 24px;
  }
}
.section-title {
  font-size: 20px;
  font-weight: 700;
  color: var(--green-1);
  margin-bottom: 4px;
  display: flex;
  align-items: center;
  gap: 8px;
}
.icon-title {
  width: 18px;
  height: 18px;
  background: linear-gradient(135deg, var(--green-2) 60%, var(--gold) 100%);
  border-radius: 4px;
  display: inline-block;
  margin-right: 4px;
}
.muted {
  color: #374d6c;
  font-size: 14px;
  margin-top: 6px;
  margin-bottom: 10px;
}
.box {
  background: #eaecf7;
  padding: 16px 18px;
  border-radius: 10px;
  border-left: 7px solid var(--gold);
  margin-top: 14px;
  margin-bottom: 18px;
  font-size: 15px;
}
.acc .item {
  border-radius: 10px;
  background: white;
  border: 1.5px solid #eef1f8;
  margin-top: 12px;
  box-shadow: 0 2px 8px rgba(16, 37, 123, 0.04);
  transition: box-shadow 0.2s;
}
.acc .item:hover {
  box-shadow: 0 4px 16px rgba(16, 44, 123, 0.1);
}
.acc .head {
  padding: 14px 18px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  font-size: 15px;
  font-weight: 600;
  color: var(--green-1);
  background: #f7fafc;
  border-radius: 10px 10px 0 0;
  transition: background 0.2s;
}
.acc .head:hover {
  background: #eaeef7;
}
.acc .body {
  padding: 12px 20px 16px 20px;
  display: none;
  font-size: 15px;
  color: #232e4b;
  background: #f9fcfe;
  border-radius: 0 0 10px 10px;
}
.acc .body.show {
  display: block;
}
.chip {
  background: #eaedfa;
  color: var(--green-1);
  padding: 4px 12px;
  border-radius: 999px;
  font-weight: 600;
  font-size: 13px;
  margin-left: 10px;
  margin-right: 10px;
}
.arrow {
  font-size: 16px;
  margin-left: 8px;
  transition: transform 0.2s;
}
.arrow.open {
  transform: rotate(180deg);
}
.kpi {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  margin-bottom: 16px;
}
.card {
  flex: 1;
  min-width: 120px;
  background: linear-gradient(120deg, #eaeefa 60%, #fff 100%);
  padding: 14px 10px;
  border-radius: 10px;
  text-align: center;
  border: 1.5px solid #eef0f8;
  box-shadow: 0 2px 8px rgba(16, 37, 123, 0.04);
}
.num {
  font-size: 22px;
  font-weight: 800;
  color: var(--green-1);
}
.small {
  font-size: 14px;
  color: #37486c;
}
.contact {
  background: #f7fff9;
  border: 1.5px solid #e7f8ef;
  padding: 14px 16px;
  border-radius: 10px;
  font-size: 14px;
  margin-top: 10px;
  color: #0f1f7b;
  box-shadow: 0 2px 8px rgba(16, 37, 123, 0.04);
}
footer {
  text-align: center;
  color: #151a4f;
  font-size: 13px;
  margin-top: 28px;
  padding-bottom: 10px;
  opacity: 0.85;
}
.animate-fade {
  animation: fadeIn 0.5s;
}
</style>
