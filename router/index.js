const express = require("express");
const { functionWrapper } = require("../helpers/apiHelpers");

const { validateData } = require("../middleware/validate-middleware");
const {
  conGetData,
  conGetDataById,
  conPostData,
  conPutData,
  conDeleteData,
} = require("../controller/postController");

const router = express.Router();

router.get("/", functionWrapper(conGetData));
router.get("/:id", functionWrapper(conGetDataById));
router.post("/", validateData, functionWrapper(conPostData));
router.delete("/:id", functionWrapper(conDeleteData));
router.put("/:id", validateData, functionWrapper(conPutData));

module.exports = { router };
