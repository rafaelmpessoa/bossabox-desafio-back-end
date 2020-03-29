import * as express from "express";
import { login, signUp } from "../controllers/auth";
const router = express.Router();

router.post("/login", login);

router.post("/signUp", signUp);

export default router;
