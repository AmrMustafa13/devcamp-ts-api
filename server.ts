import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import { connectDB } from "./config/db";
import bootcamps from "./routes/bootcamps";
import { errorHandler } from "./middlewares/error";

dotenv.config({ path: `${__dirname}/config/config.env` });

const app = express();
app.use(express.json());

app.use(morgan("dev"));

app.use("/api/v1/bootcamps", bootcamps);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  try {
    connectDB();
  } catch (error: any) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
  console.log(`Server running in mode on port ${PORT}`);
});
