import { inject, injectable } from "tsyringe";
import TYPES from "@external/container/types";
import { ICashInUseCase } from "./iCashInUseCase";
import { ICashInRepository } from "@adapters/repositories/iCashInRepository";
import { ICashIn } from "@entities/iCashIn";
import { logger } from "@external/logger";

@injectable()
export default class CashInUseCase implements ICashInUseCase {
  private repository: ICashInRepository;

  constructor(
    @inject(TYPES.CashInRepository) cashInRepository: ICashInRepository
  ) {
    this.repository = cashInRepository;
  }

  async getCashInById(id: string): Promise<ICashIn | null> {
    try {
      logger.info("Calling cashIn repository");
      logger.debug(`id: ${id}`);
      return await this.repository.getCashInById(id);
    } catch (error) {
      throw new Error(error as string);
    }
  }

  async createCashIn(data: ICashIn): Promise<string> {
    try {
      logger.info("Calling cashIn repository");
      logger.debug(`data: ${data}`);
      return await this.repository.createCashIn(data);
    } catch (error) {
      throw new Error(error as string);
    }
  }
}
