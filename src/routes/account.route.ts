import express, { Router } from 'express';
import { AccountController } from '../controllers/AccountController';

const accountRouter: Router = express.Router();

accountRouter.post("/", AccountController.register);
accountRouter.post("/login", AccountController.login);

export default accountRouter;