import * as express from "express";
import { initRouter } from "./routers";
import * as Sentry from "@sentry/node";
import { Mongoose } from "mongoose";
// import mongo from "./mongo";
import Moongose from "mongoose";

Sentry.init({
  dsn: process.env.SENTRY_URL
});

const app = express();

initRouter(app);

const port = process.env.PORT || 3000;
app.listen(
  port,
  async () => {
    console.log("OLJA");
    const connect = await Moongose.connect(
      "mongodb://localhost:27017/myproject"
    );

    console.log(connect);

    // console.log(mongo);
  }

  // console.log(`Server listening on port ${port}...`)
);
