import * as express from "express";
import { getTools, insertTool, deleteTool } from "../controllers/tool";
import { auth } from "../middleware/auth";

const router = express.Router();

router.get("/", auth, getTools);

router.post("/", auth, insertTool);

router.delete("/", auth, deleteTool);

export default router;
