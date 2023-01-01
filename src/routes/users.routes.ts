import { Router } from "express";

import { CreateCategoryController } from "../modules/cars/useCases/createCategory/CreateCategoryController";

const userRoutes = Router();

const createUserController = new CreateCategoryController();

userRoutes.post("/", createUserController.handle);

export { userRoutes };
