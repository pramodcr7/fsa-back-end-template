import express from "express";
import { routes } from "./routes/index";
import { db } from "./db";

//Initialize express server
const app = express();

// It parses incoming requests with JSON payloads and is based on body-parser.
app.use(express.json());

routes.forEach((route) => {
  app[route.method](route.path, route.handler);
});

const start = async () => {
  await db.connect("mongodb://localhost:27017");
  await app.listen(8000);
  console.log("app is listening to port 8000");
};

// app.listen(8000, () => {
//   console.log("app is listening to port 8000");
// });

app.get("/hello2", (req, res) => {
  res.status(200).json({ name: "Kiran" });
});

start();
