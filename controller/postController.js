const ObjectId = require("mongodb").ObjectId;

async function conGetData(req, res) {
  const { Posts } = require("../db/connectionPosts");
  const data = await Posts.find({}).toArray();
  res.json({ data, status: "success" });
}

async function conGetDataById(req, res) {
  const { Posts } = require("../db/connectionPosts");
  const item = await Posts.findOne({ _id: ObjectId(req.params.id) });
  res.json({ data: [item], status: "success" });
}

async function conPostData(req, res) {
  const { Posts } = require("../db/connectionPosts");
  await Posts.insertOne(req.body);
  res.json({ status: "success" });
}

async function conPutData(req, res) {
  const { Posts } = require("../db/connectionPosts");
  await Posts.updateOne(
    { _id: ObjectId(req.params.id) },
    { $set: { ...req.body } }
  );

  res.json({ status: "success" });
}

async function conDeleteData(req, res) {
  const { Posts } = require("../db/connectionPosts");
  await Posts.deleteOne({ _id: ObjectId(req.params.id) });
  res.json({ status: "success" });
}

module.exports = {
  conGetData,
  conGetDataById,
  conPostData,
  conPutData,
  conDeleteData,
};
