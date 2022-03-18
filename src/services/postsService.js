const { Posts } = require("../db/postModel");

const getData = async () => {
  return await Posts.find({});
};

const getDataById = async (id = 0) => {
  return await Posts.findById(id);
};

const postData = async (data = {}) => {
  await Posts.init();
  await Posts.create(data);
};

const putData = async (id, data) => {
  await Posts.findByIdAndUpdate(id, { $set: { ...data } });
};

const deleteData = async (id = 0) => {
  await Posts.findByIdAndRemove(id);
};

module.exports = {
  getData,
  getDataById,
  postData,
  putData,
  deleteData,
};
