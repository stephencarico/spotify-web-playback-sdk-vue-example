<template>
  <div id="app">
    <WebPlayback v-if="store.token" :token="store.token" />
    <LoginButton v-else />
  </div>
</template>

<script setup>
import { useAuthStore } from '@/stores/auth';

import LoginButton from './components/LoginButton.vue';
import WebPlayback from './components/WebPlayback.vue';

const store = useAuthStore();

async function getToken() {
  const response = await fetch('/auth/token');
  const json = await response.json();
  store.setToken(json.access_token);
}

getToken();
</script>
