import { PrismaMariaDb } from "@prisma/adapter-mariadb";
import { PrismaClient } from "@prisma/client";

const connectionString = process.env.DATABASE_URL;

if (typeof connectionString === "undefined") {
  throw new Error("Missing Database url env variable");
}

const adapter = new PrismaMariaDb(connectionString);

const globalForPrisma = global as unknown as {
  prisma: PrismaClient;
};

const prisma = globalForPrisma.prisma || new PrismaClient({ adapter });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

export default prisma;
