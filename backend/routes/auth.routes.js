import express from "express";

const router = express.Router();

router.get("/signup", (req, res) => {
  res.json({ data: "You will hit signup from here" });
});

export default router;
