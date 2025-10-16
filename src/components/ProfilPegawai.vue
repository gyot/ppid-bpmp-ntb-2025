<template>
  <div class="container">
    <h1>Infografis SDM BPMP Provinsi NTB</h1>
    <!-- <p class="center"><strong>Periode Oktober 2025</strong></p> -->

    <h2>1. Jenis Kelamin</h2>
    <div class="charts">
      <canvas ref="genderChart"></canvas>
    </div>
    <div class="summary">
      <p><strong>Laki-laki:</strong> 67 orang (66%)</p>
      <p><strong>Perempuan:</strong> 34 orang (34%)</p>
      <p><strong>Total:</strong> 101 orang</p>
    </div>

    <h2>2. Jenis Pendidikan</h2>
    <div class="charts">
      <canvas ref="eduChart"></canvas>
    </div>
    <table>
      <tr><th>Pendidikan</th><th>Jumlah</th></tr>
      <tr><td>SD</td><td>3</td></tr>
      <tr><td>SMP</td><td>0</td></tr>
      <tr><td>SMA</td><td>13</td></tr>
      <tr><td>D1–D3</td><td>4</td></tr>
      <tr><td>S1</td><td>42</td></tr>
      <tr><td>S2</td><td>29</td></tr>
      <tr><td>S3</td><td>1</td></tr>
    </table>

    <h2>3. Jenis Jabatan</h2>
    <div class="charts">
      <canvas ref="jabatanChart"></canvas>
    </div>
    <table>
      <tr><th>Jabatan</th><th>Jumlah</th></tr>
      <tr><td>Struktural</td><td>39</td></tr>
      <tr><td>Fungsional (JFT)</td><td>32</td></tr>
      <tr><td>PPPK</td><td>30</td></tr>
    </table>

    <div class="summary">
      <p><strong>Total Pegawai:</strong> 101 orang</p>
      <p><strong>Sumber Data:</strong> BBPMP Provinsi NTB, 2025</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import Chart from 'chart.js/auto'

const genderChart = ref(null)
const eduChart = ref(null)
const jabatanChart = ref(null)

onMounted(() => {
  // Jenis Kelamin
  new Chart(genderChart.value, {
    type: "pie",
    data: {
      labels: ["Laki-laki", "Perempuan"],
      datasets: [{
        data: [67, 34],
        backgroundColor: ["#16a34a", "#f59e0b"]
      }]
    },
    options: {
      plugins: {
        title: { display: true, text: "Komposisi Jenis Kelamin" },
        legend: { position: "bottom" }
      }
    }
  })

  // Pendidikan
  new Chart(eduChart.value, {
    type: "pie",
    data: {
      labels: ["SD", "SMP", "SMA", "D1–D3", "S1", "S2", "S3"],
      datasets: [{
        data: [3, 0, 13, 4, 42, 29, 1],
        backgroundColor: ["#facc15", "#e11d48", "#0ea5e9", "#6366f1", "#10b981", "#84cc16", "#a855f7"]
      }]
    },
    options: {
      plugins: {
        title: { display: true, text: "Kualifikasi Pendidikan ASN" },
        legend: { position: "bottom" }
      }
    }
  })

  // Jabatan
  new Chart(jabatanChart.value, {
    type: "pie",
    data: {
      labels: ["Struktural", "Fungsional (JFT)", "PPPK"],
      datasets: [{
        data: [39, 32, 30],
        backgroundColor: ["#0284c7", "#10b981", "#f59e0b"]
      }]
    },
    options: {
      plugins: {
        title: { display: true, text: "Jenis Jabatan ASN" },
        legend: { position: "bottom" }
      }
    }
  })
})
</script>

<style scoped>
body {
  font-family: 'Poppins', sans-serif;
  background-color: #f8fafc;
  margin: 0;
  padding: 0;
  color: #222;
}

.container {
  max-width: 1000px;
  margin: 40px auto;
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.05);
  padding: 30px 50px;
}

h1 {
  text-align: center;
  color: #006d5b;
  font-size: 26px;
  margin-bottom: 5px;
}

h2 {
  color: #006d5b;
  font-size: 20px;
  margin-top: 40px;
  border-left: 6px solid gold;
  padding-left: 10px;
}

p.center {
  text-align: center;
}

.charts {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-top: 20px;
  gap: 40px;
}

canvas {
  max-width: 320px;
  max-height: 320px;
}

table {
  border-collapse: collapse;
  width: 100%;
  margin-top: 15px;
  font-size: 15px;
}

table th, table td {
  border: 1px solid #ddd;
  text-align: center;
  padding: 8px;
}

table th {
  background-color: #006d5b;
  color: #fff;
}

.summary {
  background: #f0fdf4;
  border: 1px solid #d1fae5;
  padding: 15px;
  margin-top: 25px;
  border-radius: 10px;
}
</style>