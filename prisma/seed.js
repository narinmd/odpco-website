import prisma from "../lib/prisma.ts";
import bcrypt from "bcryptjs";

async function main() {
  const adminEmail = process.env.ADMIN_EMAIL;
  const adminPassword = process.env.ADMIN_PASSWORD;

  if (!adminEmail || !adminPassword) {
    throw new Error("Information does not exists!");
  }

  const hashedPassword = await bcrypt.hash(adminPassword, 10);

  await prisma.user.upsert({
    where: { email: adminEmail },
    update: {},
    create: {
      email: adminEmail,
      name: "odpWebAd",
      password: hashedPassword,
    },
  });

  console.log("Web Admin declared!");
}

main()
  .catch((e) => {
    console.error("error:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
