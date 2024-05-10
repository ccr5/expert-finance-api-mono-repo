import { ecsFormat } from "@elastic/ecs-winston-format";
import winston from "winston";

const logger = winston.createLogger({
  format: ecsFormat(),
  transports: [new winston.transports.Console()],
  level: "debug",
});

export { logger };
