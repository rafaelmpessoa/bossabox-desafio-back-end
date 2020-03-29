import { mongo } from "mongoose";

const mongoaddr = "mongodb://localhost:27017/vuttrDb";
console.log(mongoaddr);
mongo.connect(mongoaddr);

export default mongo;
