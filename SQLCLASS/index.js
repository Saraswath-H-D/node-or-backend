const { faker } = require('@faker-js/faker');

let getRandomUser=()=> { //faker is used to generate fake detailed datas for easy understanding
  return {
    userId: faker.string.uuid(),
    username: faker.internet.username(),
    email: faker.internet.email(),
    password: faker.internet.password()
  };
};
console.log(getRandomUser())