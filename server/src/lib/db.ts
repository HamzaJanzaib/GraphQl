    
  import mongoose from "mongoose";
  
  export const connectDB = () =>
  {
      const mongoURL = process.env.MONGO_URL! || "mongodb://localhost:27017";

      mongoose
      .connect(mongoURL, { dbName: "undefined" })
      .then((c) => {
        console.log(`Connected with ${c.connection.name}`);
      })
      .catch((e) => console.log(e));
  
  }
  
  