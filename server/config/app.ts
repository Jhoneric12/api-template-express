import express from "express";
import { routes } from "../src/routes/index.js";
import { errorHandler } from "../src/middlewares/error-handler.js";
import { env } from "./env.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

if (env.nodeEnv !== "production") {
  app.use((req, _res, next) => {
    // Minimal request logger for local dev.
    // eslint-disable-next-line no-console
    console.log(`${req.method} ${req.url}`);
    next();
  });
}

app.use("/api", routes);

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use(errorHandler);

export default app;
