const { Posts } = require("../db/postModel");

async function conGetData(req, res) {
  const data = await Posts.find({});
  res.json({ data, status: "success" });
}

async function conGetDataById(req, res) {
  const item = await Posts.findById(req.params.id);
  res.json({ data: [item], status: "success" });
}

async function conPostData(req, res) {
  await Posts.init();
  try {
    await Posts.create(req.body);
  } catch (error) {
    // See: https://masteringjs.io/tutorials/mongoose/e11000-duplicate-key
    console.log(error);
    return res.json({ status: error.code });
  }
  res.json({ status: "success" });
}

async function conPutData(req, res) {
  await Posts.findByIdAndUpdate(req.params.id, { $set: { ...req.body } });
  res.json({ status: "success" });
}

async function conDeleteData(req, res) {
  await Posts.findByIdAndRemove(req.params.id);
  res.json({ status: "success" });
}

module.exports = {
  conGetData,
  conGetDataById,
  conPostData,
  conPutData,
  conDeleteData,
};
