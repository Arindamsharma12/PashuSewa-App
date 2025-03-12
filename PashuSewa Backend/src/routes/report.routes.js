import {Router} from 'express';
import { verifyJWT } from '../middlewares/auth.middleware.js';
import { createReport,getAllReports } from '../controllers/animalReport.controller.js';
import { upload } from '../middlewares/multer.middleware.js';

const router = Router();

router.route("/create-report").post(upload.fields([
  {
    name:"image_url",
    maxCount:1
  },
  {
    name:"coverImage",
    maxCount:1
  }
]),createReport)
router.route("/get-reports").get(getAllReports)
export default router;
