import { CashInController } from "@adapters/controllers/cashInController";
import { Router } from "express";
import { container } from "tsyringe";

const cashInRoutes = Router();
const cashInController = container.resolve(CashInController);

cashInRoutes.get("/id/:id", (req, res) =>
  cashInController.getCashInById(req, res)
);
cashInRoutes.post("/", (req, res) => cashInController.createCashIn(req, res));

export { cashInRoutes };
