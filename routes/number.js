import express from "express";
import { postNumbers } from "../controllers/number.js";

const router = express.Router();

router.post("/", postNumbers);


export default router;