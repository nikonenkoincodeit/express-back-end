const { log } = require("console");
const express = require("express");

const { validateData } = require("../middleware/validate-middleware");
const {
  conGetDate,
  conGetDateById,
  conPostData,
  conPutData,
  conDeleteData,
} = require("../controller/postController");

const router = express.Router();

router.get("/", conGetDate);
router.get("/:id", conGetDateById);
router.post("/", validateData, conPostData);
router.delete("/:id", conDeleteData);
router.put("/:id", validateData, conPutData);

module.exports = { router };
