import { Router } from "express";
import { cashInRoutes } from "./cashInRoutes";

const routes = Router();

routes.use("/api/v1/cashIn", cashInRoutes);

export { routes };
