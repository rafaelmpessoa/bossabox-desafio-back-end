import * as jwt from "jsonwebtoken";
import * as Sentry from "@sentry/node";
import * as dotenv from "dotenv";
import { Request, Response, NextFunction } from "express";

dotenv.config();
const privateKey: jwt.Secret = process.env.JWT_PRIVATE_KEY || "123456";

export const auth = (req: Request, res: Response, next: NextFunction) => {
  const token = <string>req.headers["auth"];
  let jwtPayload;

  try {
    jwtPayload = jwt.verify(token, privateKey);
    res.locals.jwtPayload = jwtPayload;
  } catch (error) {
    Sentry.captureException(error);
    res.status(401).send();
    return;
  }

  next();
};
