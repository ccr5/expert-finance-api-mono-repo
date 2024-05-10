import { ICashInRepository } from "@adapters/repositories/iCashInRepository";
import TYPES from "./types";
import { container } from "tsyringe";
import CashInRepository from "@adapters/repositories/cashInRepository";
import { ICashInUseCase } from "@useCases/iCashInUseCase";
import CashInUseCase from "@useCases/cashInUsecase";

container.registerSingleton<ICashInRepository>(
  TYPES.CashInRepository,
  CashInRepository
);

container.registerSingleton<ICashInUseCase>(TYPES.CashInUseCase, CashInUseCase);
