# TASK 1: DATABASE SCHEMA DESIGN

To design to the database I used starUML. The file is [here](https://raw.githubusercontent.com/mathieux51/reply-demo/master/docs/database-schema-design.mdj). I created a screenshot of what I did:

<img src='https://github.com/mathieux51/reply-demo/raw/master/docs/task1.png' width='300'/>

# TASK 2: MANAGEMENT SERVICE DESIGN AND IMPLEMENTATION

To create this API, I used `hapi.js`.

## Getting started

To install the dependencies and start the server:

```bash
npm install
# Start dev server
npm run dev
# Test
npm run test
```

# TASK 3: SCHEDULE SERVICE DESIGN AND IMPLEMENTATION



# TASK 4: MANAGEMENT AND SCHEDULE SERVICE TESTING

## [Lab](https://github.com/hapijs/lab)

To test this `hapi.js` I would use Behaviour Driven Development(BDD) and Test Driven Development(TDD) .

## Postman

*Postman export is included in `/postman`. To import it follow [this link](https://www.getpostman.com/docs/v6/postman/collections/data_formats#exporting-and-importing-postman-data).*

I used Postman to test the consistency of the API. I did some very simple test. This command

```bash
npm run test:postman
```

will show the results. The output would look like this: 

```
❏ users
↳ /users
  GET http://localhost:8081/users [200 OK, 381B, 29ms]
  ✓  Status code is 200

↳ /users/:id
  GET http://localhost:8081/users/1 [200 OK, 334B, 5ms]
  ✓  Status code is 200

↳ /users
  POST http://localhost:8081/users [201 Created, 354B, 8ms]
  ✓  Status code is 201

↳ /users/:id
  PUT http://localhost:8081/users/0 [200 OK, 312B, 3ms]
  ✓  Status code is 200

↳ /users/:id
  DELETE http://localhost:8081/users/0 [204 No Content, 197B, 2ms]
  ✓  Status code is 204

❏ demands
↳ /demands
  GET http://localhost:8081/demands [200 OK, 716B, 2ms]
  ✓  Status code is 200

↳ /demands/:id
  GET http://localhost:8081/demands/1 [200 OK, 495B, 7ms]
  ✓  Status code is 200

↳ /demands
  POST http://localhost:8081/demands [201 Created, 450B, 10ms]
  ✓  Status code is 201

↳ /demands/:id
  PUT http://localhost:8081/demands/0 [200 OK, 485B, 7ms]
  ✓  Status code is 200

↳ /demands/:id
  DELETE http://localhost:8081/demands/0 [204 No Content, 197B, 6ms]
  ✓  Status code is 204

❏ cars
↳ /cars
  GET http://localhost:8081/demands [200 OK, 677B, 1ms]
  ✓  Status code is 200

↳ /cars/:id
  GET http://localhost:8081/cars/0 [200 OK, 507B, 9ms]
  ✓  Status code is 200

↳ /cars
  POST http://localhost:8081/cars [201 Created, 527B, 4ms]
  ✓  Status code is 201

↳ /cars/:id
  PUT http://localhost:8081/cars/0 [200 OK, 485B, 3ms]
  ✓  Status code is 200

↳ /cars/:id
  DELETE http://localhost:8081/cars/0 [204 No Content, 197B, 6ms]
  ✓  Status code is 204

┌─────────────────────────┬──────────┬──────────┐
│                         │ executed │   failed │
├─────────────────────────┼──────────┼──────────┤
│              iterations │        1 │        0 │
├─────────────────────────┼──────────┼──────────┤
│                requests │       15 │        0 │
├─────────────────────────┼──────────┼──────────┤
│            test-scripts │       15 │        0 │
├─────────────────────────┼──────────┼──────────┤
│      prerequest-scripts │        0 │        0 │
├─────────────────────────┼──────────┼──────────┤
│              assertions │       15 │        0 │
├─────────────────────────┴──────────┴──────────┤
│ total run duration: 582ms                     │
├───────────────────────────────────────────────┤
│ total data received: 2.44KB (approx)          │
├───────────────────────────────────────────────┤
│ average response time: 6ms                    │
└───────────────────────────────────────────────┘
```
