import express from "express";
import users from "./users/users.router.js";
import auth from "./auth/auth.router.js";

const app = express();

app.use("/users", users);
app.use("/auth", auth);

export default app;
