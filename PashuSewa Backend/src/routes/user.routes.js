import {Router} from 'express';
import {
  loginUser,
  logoutUser,
  registerUser
} from '../controllers/user.controller.js'
import { verifyJWT } from '../middlewares/auth.middleware.js';
import { upload } from '../middlewares/multer.middleware.js';
upload
const router = Router();

router.route("/register").post(registerUser)
router.route("/login").post(loginUser)
router.route("/logout").post(verifyJWT,logoutUser)
export default router;
