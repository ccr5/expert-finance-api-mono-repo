import { ICashIn } from "@entities/iCashIn";

interface ICashInRepository {
  getCashInById(id: string): Promise<ICashIn | null>;
  createCashIn(data: ICashIn): Promise<string>;
}

export { ICashInRepository };
