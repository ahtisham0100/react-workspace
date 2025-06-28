// helper.js
export const generateUsers = (count = 10000) => {
  const names = ['Alice', 'Bob', 'Charlie', 'David', 'Eva', 'Frank', 'Grace', 'Helen'];
  const users = [];

  for (let i = 0; i < count; i++) {
    const randomName = names[Math.floor(Math.random() * names.length)];
    const randomAge = Math.ceil(Math.random() * 1000+20);

    users.push({
      id: i + 1,
      name: `${randomName} #${i}`,
      age: randomAge,
    });
  }

  return users;
};
