import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useSpotifyStore = defineStore('spotify', () => {
  // STATE
  const is_active = ref(false);
  const is_paused = ref(false);
  const player = ref({});
  const current_track = ref({});

  // ACTIONS
  const setActive = (newValue) => {
    is_active.value = newValue;
  };
  const setPaused = (newValue) => {
    is_paused.value = newValue;
  };
  const setPlayer = (newValue) => {
    player.value = newValue;
  };
  const setTrack = (newValue) => {
    current_track.value = newValue;
  };

  return { is_active, is_paused, player, current_track, setActive, setPaused, setPlayer, setTrack };
});
