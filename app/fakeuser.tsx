import { faker } from '@faker-js/faker';

interface User {
  name: string;
  avatar: string;
  background: string;
}

const THRESHOLD = 1000;

// Generate an array of users with the specified threshold
export const users: User[] = Array.from({ length: THRESHOLD }, (): User => {
  return {
    name: faker.name.fullName(),
    avatar: faker.image.avatar(),
    background: faker.image.nature(),
  };
});
