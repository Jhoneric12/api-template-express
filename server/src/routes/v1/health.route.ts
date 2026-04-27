import { Router } from "express";
import { getHealth } from "../../controllers/v1/health.controller.js";

export const healthRouter = Router();

healthRouter.get("/health", getHealth);
