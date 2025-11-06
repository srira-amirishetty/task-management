import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {

      const users = await prisma.user.findMany();
  console.log('All users:', users);
//   const newUser = await prisma.user.create({
//     data: {
//       email: 'alice@prisma.io',
//       name: 'Alice',
//     },
//   })

//   console.log('Created new user:', newUser)
}

main()
  .catch(console.error)
  .finally(async () => {
    await prisma.$disconnect()
  })
