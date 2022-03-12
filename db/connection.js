const { MongoClient } = require("mongodb");
const connection = require("./connectionPosts");

const connectMongo = async () => {
  const client = await new MongoClient(process.env.MONGO_URL, {
    useNewUrlParser: true,
  });
  await client.connect();
  const db = client.db("goit");

  connection.Posts = await db.collection("posts");
};

module.exports = { connectMongo };
