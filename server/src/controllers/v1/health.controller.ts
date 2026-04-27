import type { Request, Response } from "express";
import { healthService } from "../../services/health.service.js";

export const getHealth = async (_req: Request, res: Response) => {
  const payload = await healthService.getHealth();
  res.status(200).json(payload);
};
