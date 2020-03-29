import { Express } from "express";
import * as cors from "cors";
import * as bp from "body-parser";
import tool from "./tool";
import auth from "./auth";
import * as Sentry from "@sentry/node";

export function initRouter(app: Express) {
  app.use(bp.json());
  app.use(bp.urlencoded({ extended: true }));
  app.use(cors());
  app.use("/tools", tool);
  app.use("/auth", auth);

  app.get("/health-check", function(req, res) {
    res.status(200).json({
      msg: "hello world!"
    });
  });

  app.use(
    Sentry.Handlers.errorHandler({
      shouldHandleError(error) {
        // Capture all 404 and 500 errors
        if (error.status === 404 || error.status === 500) {
          return true;
        }
        return false;
      }
    })
  );
}
