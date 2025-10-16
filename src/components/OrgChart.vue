<template>
  <div class="p-4">
    <!-- Gunakan container agar CSS responsif bekerja -->
    <div class="mermaid-container" width="1080">
      <div ref="chartEl" width="1080" class="mermaid"></div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import mermaid from 'mermaid'

// ✅ Konfigurasi Mermaid
mermaid.initialize({
  startOnLoad: false,
  theme: 'default', // bisa diganti ke 'forest', 'dark', 'neutral', dll
})

// Refs
const chartEl = ref(null)

// Contoh data JSON (bisa juga fetch dari file)
const orgData = {
  "name": "Katman, S.Pd., M.A.",
  "title": "Penanggung Jawab",
  "children": [
    {
      "name": "Hj. Lielies Miningrum, S.E.",
      "title": "Ketua Tim Kerja",
      "children": [
        {
          "name": "Dedy Wahyuddin, S.T., M.T.",
          "title": "Wakil Ketua Tim Kerja",
          "children": [
            {
              "name": "Latifah Hikmawati, S.P.",
              "title": "Bidang Penyediaan & Pengelolaan",
              "children": [
                { "name": "Dian Rohaidah, S.Sos., M.I.P.", "title": "Anggota" }
              ]
            },
            {
              "name": "Fresilia Twins Bamasaq, S.H.",
              "title": "Bidang Penyimpanan & Pendokumentasian",
              "children": [
                { "name": "Ulfa Izdihar, S.M.", "title": "Anggota" },
                { "name": "Ni Komang Tri Agustina Pariyanti", "title": "Anggota" },
                { "name": "Dahnia Wilmana, S.Pd.", "title": "Anggota" },
                { "name": "Rahmi Maya Saputri, S.E.", "title": "Anggota" }
              ]
            },
            {
              "name": "Rapiki, S.Pd.",
              "title": "Bidang Pelayanan Informasi",
              "children": [
                { "name": "Samsudin", "title": "Anggota" },
                { "name": "Yuni Dwisuryasari, S.T.", "title": "Anggota" },
                { "name": "Andriyani Diliwati", "title": "Anggota" },
                { "name": "Dwi Arsi Anggarwullan, S.H.", "title": "Anggota" },
                { "name": "Wahyu Ramdhani, S.Kom", "title": "Anggota" },
                { "name": "Alwi, S.Pd", "title": "Anggota" },
                { "name": "Sahari Muhril, S.Kom", "title": "Anggota" }
              ]
            },
            {
              "name": "Billy Febiar, S.Kom.",
              "title": "Bidang Pengaduan & Penyelesaian Sengketa",
              "children": [
                { "name": "Samsul Hadi, S.H.", "title": "Anggota" },
                { "name": "Yudistira Pratama", "title": "Anggota" }
              ]
            },
            {
              "name": "Akhmad Sudirman, S.Si., M.Ed.",
              "title": "Bidang Monev & Pelaporan",
              "children": [
                { "name": "I Ketut Budiarthi, S.K.M., M.A.P.", "title": "Anggota" },
                { "name": "Yun Larasatin, S.E.", "title": "Anggota" },
                { "name": "Nurul Hasani, S.A.P.", "title": "Anggota" }
              ]
            }
          ]
        }
      ]
    }
  ]
}


function sanitizeId(id) {
  return id.replace(/\s+/g, '_').replace(/[^\w-]/g, '')
}

function buildMermaidTree(node) {
  const nodeId = sanitizeId(node.name)
  let result = `${nodeId}["${node.title}<br>${node.name}"]\n`
  if (node.children) {
    node.children.forEach(child => {
      const childId = sanitizeId(child.name)
      result += `${nodeId} --> ${childId}\n`
      result += buildMermaidTree(child)
    })
  }
  return result
}

// 🪄 Render diagram
onMounted(async () => {
  const diagramDefinition = `graph TD\n${buildMermaidTree(orgData)}`
  const { svg } = await mermaid.render('orgChart', diagramDefinition)
  chartEl.value.innerHTML = svg

  // ✅ Pastikan SVG responsif
  const svgEl = chartEl.value.querySelector('svg')
  svgEl.style.width = '100%'
  svgEl.style.height = 'auto'
})
</script>

<style scoped>
.mermaid-container {
  width: 100%;
  overflow-x: auto;
  text-align: center;
}

.mermaid svg {
  width: 1050px !important;
  height: auto !important;
  max-width: none !important;
}
</style>
