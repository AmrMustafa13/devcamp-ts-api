import { ErrorRequestHandler } from "express";
import { ErrorResponse } from "../utils/errorResponse";

export const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  console.log(err.stack);

  if (err.name === "CastError") {
    const message = `Resource not found with id of ${err.value}`;
    err = new ErrorResponse(message, 404);
  }

  res
    .status(err.statusCode || 500)
    .json({ success: false, error: err.message || "Server Error" });
};
