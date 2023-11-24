<script setup lang="ts">
import { lazyInject } from '../providers';
import { counterProvider } from '../providers/counterProvider';
import { usersProvider } from '../providers/usersProvider';

import GrandChild from './GrandChild.vue';

const { count } = lazyInject(counterProvider);
const { users } = lazyInject(usersProvider);
</script>

<template>
  <div class="child-component">
    <h1>Child</h1>
    <p>injected 'count' from counterProvider</p>
    <p>count is: {{ count }}</p>
    <p>injected 'users' from usersProvider</p>
    <p>users are: {{ users }}</p>
    <GrandChild />
  </div>
</template>

<style scoped>
.child-component {
  padding: 3rem;
  border: 1px solid red;
}
</style>
