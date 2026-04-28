import { Router } from "express";
import { usersController } from "../../controllers/v1/users.controller";

const router = Router();

router.get("/", usersController.getUserss);
router.get("/:id", usersController.getUsersById);
router.post("/", usersController.createUsers);
router.put("/:id", usersController.updateUsers);
router.delete("/:id", usersController.deleteUsers);

export default router;
