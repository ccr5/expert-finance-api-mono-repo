import { Request, Response } from "express";
import { inject, injectable } from "tsyringe";
import TYPES from "@external/container/types";
import { ICashInUseCase } from "@useCases/iCashInUseCase";
import { ICashIn } from "@entities/iCashIn";
import { logger } from "@external/logger";

@injectable()
export class CashInController {
  private usecase: ICashInUseCase;

  constructor(@inject(TYPES.CashInUseCase) _usecase: ICashInUseCase) {
    this.usecase = _usecase;
  }

  async getCashInById(req: Request, res: Response): Promise<Response | void> {
    try {
      logger.info(`Starting to looking for cash in datas`);
      const id: string | undefined = req.params.id?.toString();
      logger.debug(`cashIn id: ${id}`);

      if (id.toString() == "") {
        logger.alert("id param is undefined");
        res.status(404).send({ message: "id param is undefined" });
      } else {
        const cashIn: ICashIn | null = await this.usecase.getCashInById(id!);
        if (cashIn == null) {
          return res.status(404).send({ message: "cashIn not found" });
        } else {
          return res.send(cashIn);
        }
      }
    } catch (error) {
      res.sendStatus(500);
    }
  }

  async createCashIn(req: Request, res: Response): Promise<Response | void> {
    try {
      logger.info(`Starting to create new cash in data`);
      const data: ICashIn = req.body;
      logger.debug(`data: ${data}`);

      if (Object.keys(data).length <= 0) {
        logger.error("data param is undefined");
        res.status(404).send({ message: "data param is undefined" });
      } else {
        const id: string = await this.usecase.createCashIn(data);
        res.status(200).json({ id });
      }
    } catch (error) {
      res.status(500).send({ message: error });
    }
  }
}
