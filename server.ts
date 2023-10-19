import express from "express";
import dotenv from "dotenv";

import bootcamps from "./routes/bootcamps";
import morgan from "morgan";

dotenv.config({ path: "./config/config.env" });

const app = express();

app.use(morgan("dev"));

app.use("/api/v1/bootcamps", bootcamps);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
