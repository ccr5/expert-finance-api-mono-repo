import { ICashIn } from "@entities/iCashIn";

interface ICashInUseCase {
  getCashInById(id: string): Promise<ICashIn | null>;
  createCashIn(data: ICashIn): Promise<string>;
}

export { ICashInUseCase };
