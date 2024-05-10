import "reflect-metadata";
import * as dotenv from "dotenv";
import "./container";
import { app } from "./app";

dotenv.config({
  path: process.env.NODE_ENV === "test" ? ".env.test" : ".env",
});

const port = process.env.PORT || 80;

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
