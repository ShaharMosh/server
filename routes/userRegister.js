import express from "express";
var router = express.Router();
import { createUser } from "../controllers/userRegister.js";

router.route("/Users").post((req, res) => {
  createUser(req, res);
});

export default router;
