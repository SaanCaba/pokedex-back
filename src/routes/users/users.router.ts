import express from "express";
import { checkApiKey } from "../../middlewares/auth.handler.js";
import UsersService from "../../services/Users.js";

const router = express.Router();

const service = new UsersService();

router.get("/:id", checkApiKey, async (req, res) => {
  const { id } = req.params;
  let user = await service.findUserById(id);
  return res.json(user);
});

router.get("/", async (req, res) => {
  let users = await service.findAll();
  res.json(users);
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { newName } = req.body;
  console.log(newName);
  let updatedUser = await service.modifyUser(id, newName);
  res.json({ message: "USUARIO ACTUALIZADO", user: updatedUser });
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  await service.deleteUser(id);
  return res.send("eliminado!!");
});

export default router;
