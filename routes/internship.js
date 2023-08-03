import express from "express";
import { add, getAllInternships, getById, updateInternship } from "../controllers/internship.js";
import upload from "../middlewares/multer.js"; 
const router = express.Router();

router.route('/add').post(upload.fields([
  { name: "reportFile", maxCount: 1 },
  { name: "attestationFile", maxCount: 1 },
  { name: "journalFile", maxCount: 1 },
]), add);


router.route('/:id/update').put(updateInternship); 


router.route('/').get(getAllInternships);


router.route('/:id').get(getById);


export default router;
