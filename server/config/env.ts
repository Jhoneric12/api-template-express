import dotenv from "dotenv";

dotenv.config();

const port = Number(process.env.PORT ?? 3000);
const nodeEnv = process.env.NODE_ENV ?? "development";
const databaseUrl = process.env.DATABASE_URL ?? "";

if (!databaseUrl) {
  // eslint-disable-next-line no-console
  console.warn("DATABASE_URL is not set. Prisma client will fail to connect.");
}

export const env = {
  port,
  nodeEnv,
  databaseUrl,
};
