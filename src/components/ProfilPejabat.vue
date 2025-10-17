<template>
    <div class="container">
        <!-- Kepala BPMP Provinsi NTB -->
        <div class="content">
            <div class="photo">
                <img :src="kepalaBpmp" alt="Kepala BPMP Provinsi NTB">
            </div>
            <div>
                <h1>Katman, S.Pd., M.A</h1>
                <h2>Kepala BPMP Provinsi NTB</h2>

                <h3>Tentang Saya</h3>
                <ul>
                    <li>Nama: <b>Katman, S.Pd., M.A</b></li>
                    <li>Pangkat/Golongan: <b>Pembina Tk.I IV/b</b></li>
                    <li>Jabatan: <b>Kepala BPMP Provinsi NTB</b></li>
                    <li>TMT Jabatan: <b>6 Desember 2023</b></li>
                    <li>Jenis Kelamin: <b>Laki-laki</b></li>
                    <li>Agama: <b>Islam</b></li>
                    <li>Eselon: <b>IVa</b></li>
                </ul>
                <p>Menjabat Kepala Balai Penjaminan Mutu Pendidikan (BPMP) Provinsi NTB sejak 16 November 2023.</p>

                <h3>Alamat & Kontak</h3>
                <ul>
                    <li>Alamat Kantor: <b>Jl. Panji Tilarnegara No.8, Mataram NTB</b></li>
                    <li>HP: <b>081310318794</b></li>
                </ul>
            </div>
        </div>
        <hr>
        <!-- Kepala Subbagian Umum BPMP Provinsi NTB -->
        <div class="content">
            <div class="photo">
                <img :src="kasubbagBPMP" alt="Kepala Subbagian Umum BPMP Provinsi NTB">
            </div>
            <div>
                <h1>Hj. Lielies Miningrum, SE</h1>
                <h2>Kepala Subbagian Umum BPMP Provinsi NTB</h2>

                <h3>Tentang Saya</h3>
                <ul>
                    <li>Nama: <b>Hj. Lielies Miningrum, SE</b></li>
                    <li>Jabatan: <b>Kepala Subbagian Umum BPMP Provinsi NTB</b></li>
                    <li>TMT Jabatan: <b>12 Juni 2023</b></li>
                    <li>Jenis Kelamin: <b>Perempuan</b></li>
                    <li>Agama: <b>Islam</b></li>
                    <li>Eselon: <b>IVb</b></li>
                </ul>
                <p>Menjabat Kepala Subbagian Umum BPMP Provinsi NTB sejak 12 Juni 2023.</p>

                <h3>Alamat & Kontak</h3>
                <ul>
                    <li>Alamat Kantor: <b>Jl. Panji Tilarnegara No.8, Mataram NTB</b></li>
                    <li>Telepon Kantor: <b>631088, 629835</b></li>
                    <li>HP: <b>081917304504</b></li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script setup>
import kepalaBpmp from '../assets/kepala.png'
import kasubbagBPMP from '../assets/kasubbag.png'
</script>

<style scoped>
.container {
    color: #fff;
    font-family: 'Poppins', sans-serif;
    margin: 0;
    background: linear-gradient(to right, #5a3d1c, #a97c50);

    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    padding: 40px;
    flex-wrap: wrap;
}

.photo {
    flex: 1;
    min-width: 280px;
    text-align: center;
}

.photo img {
    width: 80%;
    max-width: 350px;
    border-radius: 20px;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
    background-color: rgba(0, 0, 0, 0.1);
}

.content {
    display: flex;
    flex: 1.2;
    /* background: rgba(0, 0, 0, 0.2);
    border-radius: 20px; */
    padding: 30px 40px;
    margin-left: 20px;
    line-height: 1.6;
}

h1 {
    font-size: 28px;
    margin-bottom: 5px;
    font-weight: 700;
}

h2 {
    font-size: 18px;
    font-weight: 500;
    color: #ffd480;
    margin-top: 0;
}

h3 {
    border-bottom: 2px solid #ffd480;
    padding-bottom: 5px;
    margin-top: 25px;
}

ul {
    list-style: none;
    padding-left: 0;
}

ul li::before {
    content: "• ";
    color: #ffd480;
    font-weight: bold;
}

.contact {
    margin-top: 20px;
    font-size: 15px;
}

.contact a {
    color: #fff;
    text-decoration: none;
}

.contact a:hover {
    text-decoration: underline;
}

@media (max-width: 768px) {
    .container {
        flex-direction: column;
        align-items: center;
    }

    .content {
        margin-left: 0;
        margin-top: 20px;
    }
}
</style>