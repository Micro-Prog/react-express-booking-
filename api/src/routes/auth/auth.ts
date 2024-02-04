import express from 'express';
import { login, register } from '../../controllers/auth_controller/auth.controller';

// express router
const router = express.Router();

//define the register route
router.post("/register", register);

// define the login route
router.post("/login", login);


export default router;