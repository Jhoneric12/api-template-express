import { Router } from "express";
import { healthRouter } from "./v1/health.route.js";

export const routes = Router();

routes.use("/v1", healthRouter);
