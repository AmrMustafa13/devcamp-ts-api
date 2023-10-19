import { RequestHandler } from "express";

export const asyncHandler =
  (fn: RequestHandler) => (req: any, res: any, next: any) =>
    Promise.resolve(fn(req, res, next)).catch(next);
