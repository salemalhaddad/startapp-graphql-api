const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient();

async function main() {
	const allUsers = await prisma.startup.findMany()
	console.log(allUsers)
  }

  main()
	.catch((e) => {
	  throw e
	})
	.finally(async () => {
	  await prisma.$disconnect()
	})
