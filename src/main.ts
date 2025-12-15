import { FALLBACK_PORT } from "./constants";
import app  from "./server";
import { config } from "dotenv";

config()

const PORT = process.env.PORT || FALLBACK_PORT;


app.listen(PORT, (err: Error | undefined) => {
  if (err) return console.error(err);
  console.log(`Server is running on http://localhost:${PORT}`);
});

