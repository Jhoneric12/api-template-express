import { healthRepository } from "../repositories/v1/health.repository.js";

export const healthService = {
  async getHealth() {
    const now = await healthRepository.getTimestamp();

    return {
      status: "ok",
      timestamp: now.toISOString(),
    };
  },
};
