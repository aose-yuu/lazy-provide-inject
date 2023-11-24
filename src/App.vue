<script setup lang="ts">
import TheChild from './components/TheChild.vue';
import { lazyProvide } from './providers';
import { counterProvider } from './providers/counterProvider';
import { usersProvider } from './providers/usersProvider';

lazyProvide(counterProvider, usersProvider);
</script>

<template>
  <div class="app-component">
    <h1>App</h1>
    <p>provided counterProvider</p>
    <TheChild />
  </div>
</template>

<style scoped>
.app-component {
  padding: 3rem;
  border: 1px solid green;
}
</style>
