const express = require("express");

const {
  validateData,
  validateDataPut,
} = require("../middleware/validate-middleware");
const {
  conGetData,
  conGetDataById,
  conPostData,
  conPutData,
  conDeleteData,
} = require("../controller/postController");

const router = express.Router();

router.get("/", conGetData);
router.get("/:id", conGetDataById);
router.post("/", validateData, conPostData);
router.delete("/:id", conDeleteData);
router.put("/:id", validateDataPut, conPutData);

module.exports = { router };
