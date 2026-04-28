import { Router } from "express";
import UserRouter from "./v1/users.route";

export const routes = Router();

routes.use("/v1", UserRouter);
