const express = require("express");
const { functionWrapper } = require("../helpers/apiHelpers");
const {
  validateData,
  validateDataPut,
} = require("../middleware/validate-middleware");
const {
  getDataController,
  getDataByIdController,
  postDataController,
  putDataController,
  deleteDataController,
} = require("../controller/postController");

const router = express.Router();

router.get("/", functionWrapper(getDataController));
router.get("/:id", functionWrapper(getDataByIdController));
router.post("/", validateData, functionWrapper(postDataController));
router.delete("/:id", functionWrapper(deleteDataController));
router.put("/:id", validateDataPut, functionWrapper(putDataController));

module.exports = { router };
