import { DynamoDBClient } from "@aws-sdk/client-dynamodb";

const marshallOptions = {
  convertEmptyValues: false,
  removeUndefinedValues: true,
  convertClassInstanceToMap: false, 
}

const unmarshallOptions = {
  wrapNumbers: false,
}

const ddbClient = new DynamoDBClient([marshallOptions, unmarshallOptions])

export { ddbClient }
