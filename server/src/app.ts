
  import express from "express"
import helmet from "helmet"
import { connectGraphQL } from "@/graphql/graphql.js"
import { expressMiddleware } from "@as-integrations/express5";
import cors from 'cors'
import { errorMiddleware } from "@/middlewares/error.js"
import morgan from "morgan"
import { connectDB } from "@/lib/db.js"
import { createRedis } from "@/lib/redis.js";
import { rateLimiter } from "@/middlewares/rate-limiter.js";
import dotenv from "dotenv"
  
  dotenv.config({path: './.env',});
  
  export const envMode = process.env.NODE_ENV?.trim() || 'DEVELOPMENT';
  const port = process.env.PORT || 3000;
  
connectDB();
  
  export const redis = createRedis();
  const app = express();
  
const graphqlServer = connectGraphQL();
await graphqlServer.start();
    
                                
  
  
app.use(
  helmet({
    contentSecurityPolicy: envMode !== "DEVELOPMENT",
    crossOriginEmbedderPolicy: envMode !== "DEVELOPMENT",
  })
);
    
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use("/graphql", expressMiddleware(graphqlServer));
app.use(cors({origin:'*',credentials:true}));
app.use(morgan('dev'));
app.use(rateLimiter());
    
  
  app.get('/', (req, res) => {
     res.send('Hello, World!');
  });
  
  // your routes here
  
    
app.get("/*splat", (req, res) => {
  res.status(404).json({
    success: false,
    message: "Page not found",
  });
});
  
  app.use(errorMiddleware);
    
  app.listen(port, () => console.log('Server is working on Port:'+port+' in '+envMode+' Mode.'));
  