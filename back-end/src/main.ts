// servers
import app from "./server";

// functions
// @ts-ignore
export const daylight = (req: Request, res: Response) => app(req, res);
  