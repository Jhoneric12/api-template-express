import { createServer } from "node:http";
import app from "./app.js";
import { env } from "./env.js";
import { logger } from "../src/utils/logger.js";

const server = createServer(app);

server.listen(env.port, () => {
  logger.info(`API listening on port ${env.port}`);
});
