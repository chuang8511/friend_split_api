// server.ts
import * as express from "express"
import { myDataSource } from "./app-data-source"
import { UserController } from "./controllers/UserController";
import { UserGroupController } from "./controllers/UserGroupController";
import { AccountingController } from "./controllers/AccountingController";

const app = express();
const PORT = process.env.PORT || 3000;

myDataSource
    .initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization:", err)
    })

app.use(express.json());

app.get("/v1/api/users", UserController.getAll)
app.get("/v1/api/users/:id", UserController.getUser)
app.post("/v1/api/users", UserController.register)
app.delete("/v1/api/users/:id", UserController.withdraw)
app.post("/v1/api/users/friend", UserController.connectFriend)

app.post("/v1/api/user_groups", UserGroupController.createGroup)

app.post("/v1/api/accounts", AccountingController.saveAccountingResult)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});