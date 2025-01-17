import { PrismaClient } from "@prisma/client";

const prismaClientSingleton = () => {
  if (process.env.NODE_ENV === "production") {
    return new PrismaClient();
  } else {
    // Ensure the global object is used in development to prevent multiple instances
    if (!globalThis.prismaGlobal) {
      globalThis.prismaGlobal = new PrismaClient();
    }
    return globalThis.prismaGlobal;
  }
};

declare const globalThis: {
  prismaGlobal: PrismaClient;
} & typeof global;

const prisma = prismaClientSingleton();

export default prisma;
