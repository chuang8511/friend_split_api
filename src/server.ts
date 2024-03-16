import express from "express"
import { myDataSource } from "./app-data-source"
import accountRouter from "./routes/account.route";

const app = express();
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