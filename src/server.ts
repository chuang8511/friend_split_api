import express from "express"
// only for local testing
import cors from 'cors';
import { myDataSource } from "./app-data-source"
import accountRouter from "./routes/account.route";

export const app = express();

const allowedOrigins = ['https://example.com', 'http://localhost:3000'];
const corsOptions: cors.CorsOptions = {
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Specify allowed HTTP methods
    allowedHeaders: ['Content-Type', 'Authorization'], // Specify allowed headers
  };
  
app.use(cors(corsOptions));
  

const PORT = process.env.PORT || 3001;
const V1 = "/v1/api"

myDataSource
    .initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization:", err)
    })

app.use(express.json());

app.use(`${V1}/account`, accountRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});