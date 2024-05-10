import { ddbClient } from "@external/database/dynamoClient";
import { ICashIn } from "@entities/iCashIn";
import { ICashInRepository } from "./iCashInRepository";
import { GetItemCommand, PutItemCommand } from "@aws-sdk/client-dynamodb";
import { v4 as uuidv4 } from "uuid";
import { unmarshall } from "@aws-sdk/util-dynamodb";
import { logger } from "@external/logger";

export default class CashInRepository implements ICashInRepository {
  private tableName = "ef-pf-mod-cash-out";

  async getCashInById(id: string): Promise<ICashIn | null> {
    logger.info(`Creating DynamoDb Command`);
    const command = new GetItemCommand({
      TableName: this.tableName,
      Key: {
        id: { S: id },
      },
    });
    logger.debug(`command: ${command}`);

    logger.info(`Send command`);
    const res = await ddbClient.send(command);
    logger.debug(`res: ${res}`);

    logger.info(`Return cashIn ...`);
    const unmarshallItem = res.Item ? (unmarshall(res.Item!) as ICashIn) : null;
    logger.debug(`unmarshall(result): ${String(unmarshallItem)}`);
    return unmarshallItem;
  }

  async createCashIn(data: ICashIn): Promise<string> {
    logger.info(`Creating DynamoDb Command`);
    const command = {
      TableName: this.tableName,
      Item: {
        id: { S: uuidv4() },
        date: { S: data.date },
        description: { S: data.description },
        estimatedDate: { S: data.estimatedDate },
        value: { N: data.value.toString() },
      },
    };
    logger.debug(`command: ${command}`);

    const newItem = new PutItemCommand(command);

    logger.info(`Send command`);
    const res = await ddbClient
      .send(newItem)
      .then((value) => {
        return value;
      })
      .catch((err) => {
        console.log("err", err);
        return null;
      });
    logger.debug(`res: ${res}`);

    logger.info(`New cashIn has been created with id ${command.Item.id.S}`);
    return command.Item.id.S;
  }
}
