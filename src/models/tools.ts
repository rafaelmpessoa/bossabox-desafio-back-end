import * as mongoose from "mongoose";
import * as joi from "@hapi/joi";

interface Tool {
  title: string;
  link: string;
  description: string;
  tags: string[];
}

const toolSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 100
  },
  link: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 100
  },
  description: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 100
  },
  tags: {
    type: [String]
  }
});

export function validateTool(tool: Tool) {
  const schema = {
    title: joi
      .string()
      .min(3)
      .max(100)
      .required(),
    link: joi
      .string()
      .min(3)
      .max(100)
      .required(),
    description: joi
      .string()
      .min(3)
      .max(100)
      .required(),
    tags: joi.array().items(joi.string())
  };

  return joi.valid(tool, schema);
}

export default mongoose.model("Tool", toolSchema);
