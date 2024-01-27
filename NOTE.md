1. About runtime
After running the server, the route will not be changed when you modify that.
It means when the server runs, the route will be mount and will not be changeable.

2. About database
$ nodenv local 14.17.4
$ npm install knex -g
$ knex migrate:make create_xxx_table
$ npx knex migrate:latest

3. About route
- users route will be defined under users.js
- In app.js, it can use `app.use('/users', usersRouter)`
- usersRouter is required from users.js

4. About TS
$ npx tsc
It makes sure to compile the TS code to JS code
$ node dist/main.hs
It runs the server

5. About dev
"start": "nodemon src/server.ts"
It can help speed up the development

6. About setting
In package.json, we can define key in script to run npm run xx
e.g. It can exec `npm run start` & `npm run run` in terminal.  
``` 
  "scripts": {
    "run": "node dist/server.js",
    "start": "nodemon src/server.ts"
  },
```

7. About dev test, how to test post/delete method
curl -X POST http://localhost:3000/v1/api/users -H 'Content-Type: application/json' -d '{ "name": "ChunHao", "created_system": "test", "created_user": "test" }'

curl -X "DELETE" http://localhost:3000/v1/api/users/1

8. About ORM
Doc: https://orkhan.gitbook.io/typeorm/docs/example-with-express