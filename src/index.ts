import express from "express";
import router from "./routes/index.js";
import dotenv from "dotenv";
import morgan from "morgan";
import helmet from "helmet";
dotenv.config();
import connection from "./db/connection/connection.js";
import {
  boomErrorHandler,
  errorHandler,
  logErrors,
} from "./middlewares/error.handler.js";

connection();

const app = express();

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));

app.use(helmet());
app.use(morgan("tiny"));
app.use("/", router);

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(3001, () => console.log("SERVER RUN ON PORT 3000"));
