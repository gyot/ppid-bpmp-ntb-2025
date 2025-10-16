<template>
  <section id="profil" class="section-content">
    <div class="bg-white rounded-lg shadow-md p-6 mb-6" v-if="profil">
      <h2 class="text-3xl font-bold text-gray-800 mb-6">{{ profil.title }}</h2>

      <!-- Tentang PPID -->
      <div class="grid md:grid-cols-3 gap-6 mb-8">
        <div class="md:col-span-2">
          <h3 class="text-xl font-semibold text-blue-800 mb-4">{{ profil.tentang.title }}</h3>
          <p v-for="(p, idx) in profil.tentang.descriptions" :key="idx" class="text-gray-600 mb-4">
            {{ p }}
          </p>
        </div>
        <div class="bg-white-100 rounded-lg p-4 flex items-center justify-center">
          <div class="text-center">
            <img :src="kantorDepanImg" alt="PPID Logo" class="mx-auto mb-4" />
          </div>
        </div>
      </div>

      <!-- Visi & Misi -->
      <div class="grid md:grid-cols-2 gap-8 mb-8">
        <div>
          <h3 class="text-xl font-semibold text-blue-800 mb-4">Visi</h3>
          <p class="text-gray-600 bg-blue-50 p-4 rounded-lg">{{ profil.visi }}</p>
        </div>
        <div>
          <h3 class="text-xl font-semibold text-blue-800 mb-4">Misi</h3>
          <div class="bg-green-50 p-4 rounded-lg">
            <ul class="text-gray-600 space-y-2 list-decimal list-inside">
              <li v-for="(m, idx) in profil.misi" :key="idx">{{ m }}</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Tugas & Fungsi -->
      <div class="mb-8">
        <h3 class="text-xl font-semibold text-blue-800 mb-4">Tugas & Fungsi (Tupoksi)</h3>
        <div class="bg-blue-50 p-4 rounded-lg mb-4">
          <p class="text-gray-700 mb-4">{{ profil.tupoksi.intro }}</p>
          <ul class="text-gray-600 space-y-2 list-decimal list-inside">
            <li v-for="(t, idx) in profil.tupoksi.items" :key="idx">{{ t }}</li>
          </ul>
        </div>
      </div>

      <!-- Struktur Organisasi -->
      <div class="mb-8" width="1080">
        <h3 class="text-xl font-semibold text-blue-800 mb-4">Struktur Organisasi</h3>
        <img :src="strukturOrgImg" alt="Struktur Organisasi" class="mx-auto mb-4" />
        <!-- <OrgChart /> -->
      </div>
      <h3 class="text-xl font-semibold text-blue-800 mb-4">Informasi Kontak</h3>
      <div class="grid md:grid-cols-2 gap-6">
        <div v-for="(kontak, idx) in profil.kontak" :key="idx" class="space-y-4">
          <div class="flex items-center space-x-3" v-for="(item, j) in kontak.items" :key="j">
            <i :class="[item.icon, 'text-blue-600']"></i>
            <div>
              <p class="font-semibold">{{ item.label }}</p>
              <p class="text-gray-600">{{ item.value }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue"
import kantorDepanImg from "../assets/kantor_depan.jpg"
import strukturOrgImg from "../assets/struktur_org.png"
import OrgChart from "./OrgChart.vue"
// import OrgChart from '@balkangraph/orgchart.js'


const profil = ref(null)

// Struktur organisasi
const orgData = {
  name: "Kepala Dinas",
  children: [
    {
      name: "Kasubbag Program",
      children: [
        { name: "Staf 1" },
        { name: "Staf 2" }
      ]
    },
    {
      name: "Kasubbag Umum",
      children: [
        { name: "Staf 3" },
        { name: "Staf 4" }
      ]
    }
  ]
}

// 🔁 Fungsi pembuat diagram
function generateMermaid(data) {
  let lines = ["graph TB"] // lurus vertikal

  function traverse(node, parentId = null) {
    const id = node.name.replace(/\s+/g, "_")
    const label = `${node.name}<br/><i>${node.title}</i>`
    lines.push(`${id}["${label}"]:::person`)

    if (parentId) lines.push(`${parentId} --> ${id}`)

    if (node.children) {
      node.children.forEach(child => traverse(child, id))
    }
  }

  traverse(data)
  // gaya node kotak biru, garis tebal
  lines.push("classDef person fill:#e0f2fe,stroke:#0369a1,stroke-width:2px,color:#0c4a6e,rx:8,ry:8;")
  // gaya garis lurus tanpa panah
  lines.push("linkStyle default stroke:#0369a1,stroke-width:1.5px,fill:none;")
  return lines.join("\n")
}


const chartCode = generateMermaid(orgData)

onMounted(async () => {
  const res = await fetch("/ppid/profil.json")
  profil.value = await res.json()
  // mermaid.initialize({
  //   startOnLoad: true,
  //   theme: "neutral",
  //   themeVariables: {
  //     primaryColor: "#e0f2fe",
  //     edgeLabelBackground: "#ffffff",
  //     primaryBorderColor: "#0369a1",
  //     lineColor: "#0369a1"
  //   }
  // })

})
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

.orgchart-container {
  background-color: #f9fafb;
}
</style>
