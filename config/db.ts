import mongoose from "mongoose";

type ConnectOptions = {
  useNewUrlParser: boolean;
  useUnifiedTopology: boolean;
};

const connectOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

export const connectDB = async () => {
  const conn = await mongoose.connect(
    process.env.MONGO_URI!,
    connectOptions as any
  );
  console.log(`MongoDB Connected: ${conn.connection.host}`);
};
