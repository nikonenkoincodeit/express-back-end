const {
  getData,
  getDataById,
  postData,
  putData,
  deleteData,
} = require("../services/postsService");

async function getDataController(req, res) {
  const data = await getData();
  res.json({ data, status: "success" });
}

async function getDataByIdController(req, res) {
  const data = await getDataById(req.params.id);
  res.json({ data: [data], status: "success" });
}
// See: https://masteringjs.io/tutorials/mongoose/e11000-duplicate-key
async function postDataController(req, res) {
  await postData(req.body);
  res.json({ status: "success" });
}

async function putDataController(req, res) {
  await putData(req.params.id, req.body);
  res.json({ status: "success" });
}

async function deleteDataController(req, res) {
  await deleteData(req.params.id);
  res.json({ status: "success" });
}

module.exports = {
  getDataController,
  getDataByIdController,
  postDataController,
  putDataController,
  deleteDataController,
};
