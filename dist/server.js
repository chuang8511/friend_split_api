"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// server.ts
var express = require("express");
var app_data_source_1 = require("./app-data-source");
var UserController_1 = require("./controllers/UserController");
var app = express();
var PORT = process.env.PORT || 3000;
app_data_source_1.myDataSource
    .initialize()
    .then(function () {
    console.log("Data Source has been initialized!");
})
    .catch(function (err) {
    console.error("Error during Data Source initialization:", err);
});
app.use(express.json());
app.get('/example', function (req, res) {
    res.json({ "tests": "test" });
});
app.get("/v1/api/users", UserController_1.UserController.getAll);
app.post("/v1/api/users", UserController_1.UserController.Create);
app.listen(PORT, function () {
    console.log("Server is running on port ".concat(PORT));
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
