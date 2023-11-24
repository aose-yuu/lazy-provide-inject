<script setup lang="ts">
import { lazyInject } from '../providers';
import { counterProvider } from '../providers/counterProvider';
import { usersProvider } from '../providers/usersProvider';

const { increment } = lazyInject(counterProvider);
const { addUser, removeUser } = lazyInject(usersProvider);

const user = {
  id: 1,
  firstName: 'John',
  lastName: 'Doe',
  age: 30,
  email: 'abcde@gmail.com',
};
</script>

<template>
  <div class="grand-child-component">
    <h1>Grand Child</h1>
    <p>injected 'increment' from counterProvider</p>
    <button @click="increment">increment button</button>
    <p>injected 'addUser' and 'removeUser' from usersProvider</p>
    <button @click="addUser(user)">add user button</button>
    <button @click="removeUser(1)">remove user button</button>
  </div>
</template>

<style scoped>
.grand-child-component {
  padding: 3rem;
  border: 1px solid blue;
}
</style>
