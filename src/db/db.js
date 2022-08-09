import { MongoClient } from "mongodb";
const DB_NAME = "my-database";

//Function syntax is used as Lamda syntax behaves odd when this keyword is used within it.
export const db = {
  _dbClient: null, //Client which is used to connect to MongoDB
  //Method which is used to create Mongo client and connect to database
  connect: async function (url) {
    const client = await MongoClient.connect(url, {
      maxPoolSize: 10,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    this._dbClient = client;
  },
  //Method which is used to get the database which is my-database
  getConnection: function () {
    if (!this._dbClient) {
      console.log("You need to call connect function first");
      process.exit(1);
    }
    return _this._dbClient.db(DB_NAME);
  },
};
