import express from "express";
import { routes } from "@external/routes";
import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(routes);

app.get("*", (req, res) => {
  res.send("Expert Finance is running ... ");
});

export { app };
