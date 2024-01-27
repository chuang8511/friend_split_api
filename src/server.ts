// server.ts
import * as express from "express"
import { User } from './entity/user.entity';
import { myDataSource } from "./app-data-source"
import { UserController } from "./controllers/UserController";

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

app.get('/example', (req, res) => {
  res.json({"tests": "test"})
});

app.get("/v1/api/users", UserController.getAll)
app.post("/v1/api/users", UserController.Create)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


// createConnection().then(async (connection) => {
//   app.get('/users', async (req, res) => {
//     const userRepository = connection.getRepository(UserEntity);
//     const users = await userRepository.find();
//     res.json(users);
//   });

//   app.post('/users', async (req, res) => {
//     const userRepository = connection.getRepository(UserEntity);
//     const newUser = userRepository.create(req.body);
//     await userRepository.save(newUser);
//     res.json(newUser);
//   });


// });
