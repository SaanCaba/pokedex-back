import express from "express";
import router from "./routes/index.js";
import dotenv from "dotenv";
import morgan from "morgan";
import helmet from "helmet";
dotenv.config();
import connection from "./db/connection/connection.js";
import { boomErrorHandler, errorHandler, logErrors, } from "./middlewares/error.handler.js";
import passport from "passport";
import LocalStrategy from "./routes/utils/auth/strategies/local.strategy.js";
connection();
const app = express();
//estrategias de passport, logeo en "local."
passport.use(LocalStrategy);
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(helmet());
app.use(morgan("tiny"));
app.use("/", router);
app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);
app.listen(3001, () => console.log("SERVER RUN ON PORT 3000"));
//# sourceMappingURL=index.js.map