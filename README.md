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

_Postman export is included in `/postman`. To import it follow [this link](https://www.getpostman.com/docs/v6/postman/collections/data_formats#exporting-and-importing-postman-data)._

I used Postman to test the consistency of the API. I did some very simple test. This command

```bash
npm run test:postman
```

will show the results.
