import { readonly, ref } from 'vue';

import { createProvider } from './createProvider';

type User = {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  email: string;
};

const context = () => {
  const users = ref<User[]>([]);
  const addUser = (user: User) => {
    users.value = [...users.value, user];
  };
  const removeUser = (id: number) => {
    users.value = users.value.filter((u) => u.id !== id);
  };

  return {
    users: readonly(users),
    addUser,
    removeUser,
  };
};
export const usersProvider = createProvider('users', context);
