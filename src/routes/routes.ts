import { Router } from "express";
import { UserController } from "../controllers/utilisateur";

const router = Router();

router.get("/", UserController.list);
router.get("/:id", UserController.get);
router.post("/", UserController.create);

export default router;
