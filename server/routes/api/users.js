const express = require("express");
const router = express.Router();
router.post("/", (req, res) => {
  console.log(req.body); // แสดงค่าออกมา
  res.send("User router"); // ตอบกลับเมื่อได้รับค่า
});
module.exports = router;
