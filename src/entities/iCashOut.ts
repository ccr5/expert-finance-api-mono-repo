enum CashOutStatusEnum {
  CONFIRMING,
  PENDENT,
  PAID,
}

enum CashOutTypeEnum {
  INSTALLMENT,
  FIXED,
  INVESTMENT,
  SPORADIC,
}

interface ICashOut {
  id: string;
  date: string;
  type: CashOutTypeEnum;
  description: string;
  value: number;
  status: CashOutStatusEnum;
}

interface IInstallment {
  date: string;
  installmentsNumber: number;
  value: number;
}

interface ICashOutInstallment extends ICashOut {
  totalInstallments: number;
  installments: IInstallment[];
}

export { ICashOut, ICashOutInstallment };
export type { CashOutStatusEnum, CashOutTypeEnum };
