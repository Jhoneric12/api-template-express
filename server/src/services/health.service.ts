import { healthRepository } from "../repositories/health.repository.js";

export const healthService = {
  async getHealth() {
    const now = await healthRepository.getTimestamp();

    return {
      status: "ok",
      timestamp: now.toISOString(),
    };
  },
};
