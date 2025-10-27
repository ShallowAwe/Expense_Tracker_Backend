import prisma from './index.js';

async function main() {
  const users = await prisma.user.findMany();
  console.log("Users:", users);
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
