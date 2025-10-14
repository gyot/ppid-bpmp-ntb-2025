<template>
  <div>
    <Navbar />
    <main class="container mx-auto px-4 py-6">
      <!-- <p @mouseover="speak('Test')">Test</p> -->
      <Transition name="fade-in" mode="out-in">
        <router-view v-slot="{ Component }">
          <component :is="Component" @mouseover.native="handleHover" />
        </router-view>
      </Transition>
    </main>
    <Footer />
  </div>
</template>

<script setup>

import { ref, onMounted } from 'vue'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
function speak(text) {
  if (!text) return;
  window.speechSynthesis.cancel();
  const utterance = new window.SpeechSynthesisUtterance(text);
  utterance.lang = "id-ID";
  window.speechSynthesis.speak(utterance);
}

function handleHover(event) {
  // Ambil innerText dari elemen yang di-hover
  const text = event.target.innerText || event.target.textContent
  speak(text)
}

</script>

<style>
/* @import './style.css'; */
.fade-in-enter-active, .fade-in-leave-active {
  transition: opacity 0.6s, transform 0.6s;
}
.fade-in-enter-from, .fade-in-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
.fade-in-enter-to, .fade-in-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style>

