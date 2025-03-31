import type { Request, Response } from "express";

// servers
import app from "./server";

// functions
export const daylight = (req: Request, res: Response) => app(req, res);
  