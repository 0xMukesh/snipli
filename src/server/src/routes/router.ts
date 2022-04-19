import express from "express";

import authorize from "../controllers/auth/authorize";
import token from "../controllers/auth/token";

const router = express.Router();

router.post("/authorize", authorize);
router.post("/token", token);

export default router;
