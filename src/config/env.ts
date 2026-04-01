import dotenv from "dotenv";
dotenv.config();
export const PORT = Number(process.env.PORT) || 3000;
export const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY;
if (!GOOGLE_API_KEY) {
  throw new Error("GOOGLE_API_KEY is required. Set it in the environment or .env file.");
}
