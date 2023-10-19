import { ErrorRequestHandler } from "express";
import { ErrorResponse } from "../utils/errorResponse";

export const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  console.log(err);

  if (err.name === "CastError") {
    const message = `Resource not found with id of ${err.value}`;
    err = new ErrorResponse(message, 404);
  }

  if (err.code === 11000) {
    const message = `Duplicate field value entered`;
    err = new ErrorResponse(message, 400);
  }

  if (err.name === "ValidationError") {
    const message = Object.values(err.errors).map((val: any) => val.message);
    err = new ErrorResponse(message.toString(), 400);
  }

  res
    .status(err.statusCode || 500)
    .json({ success: false, error: err.message || "Server Error" });
};
