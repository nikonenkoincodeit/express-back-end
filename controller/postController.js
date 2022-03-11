const path = require("path");
const fs = require("fs").promises;

const PATH_FILE = path.join(__dirname, "..", "db", "posts.json");

async function conGetDate(req, res) {
  const data = await getData();
  if (!data) return;
  res.status(200).json({ data, status: "success" });
}

async function conGetDateById(req, res) {
  const data = await getData();
  if (!data) return;
  const item = data.find(({ id }) => id === req.params.id);
  if (item) res.status(200).json({ data: [item], status: "success" });
  else res.status(400).json({ status: "the resource can not be found" });
}

async function conPostData(req, res) {
  const data = await getData();
  if (!data) return;
  const obj = { id: Date.now(), ...req.body };
  data.push(obj);
  addData(data);
  res.status(200).json({ status: "success" });
}

async function conPutData(req, res) {
  let data = await getData();
  if (!data) return;

  await data.forEach((item, index) => {
    if (item.id === req.params.id) {
      const obj = { ...item, ...req.body };
      data.splice(index, 1, obj);
    }
  });
  addData(data);
  res.status(200).json({ status: "success" });
}

async function conDeleteData(req, res) {
  let data = await getData();
  if (!data) return;
  data = data.filter(({ id }) => id !== req.params.id);
  addData(data);
  res.status(200).json({ status: "success" });
}

async function getData() {
  let data = await fs.readFile(PATH_FILE, "utf8");
  if (!data) {
    return res.status(400).json({ status: "the resource can not be found" });
  }
  return JSON.parse(data);
}

function addData(array = []) {
  console.log("array  ", array);
  fs.writeFile(PATH_FILE, JSON.stringify(array), (err) => {
    if (err) throw new Error("Error");
    console.log("запись файла!");
  });
}

module.exports = {
  conGetDate,
  conGetDateById,
  conPostData,
  conPutData,
  conDeleteData,
};
