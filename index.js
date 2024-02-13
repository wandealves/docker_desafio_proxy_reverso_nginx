const express = require("express");
const app = express();
const { getAll, create } = require("./services/people");
const { faker } = require("@faker-js/faker");

const port = 3000;
//https://stackoverflow.com/questions/44004418/node-js-async-await-using-with-mysql
//https://blog.logrocket.com/build-rest-api-node-express-mysql/

app.get("/", async (req, res) => {
  await create(faker.person.firstName());
  const result = await getAll();
  let message = `<h1>Full Cycle Rocks!</h1>`;
  if (result && result.data && result.data.length > 0) {
    message += "<ul>";
    result.data.forEach(person => {
      message += `<li>${person.id} - ${person.name}</li>`;
    });
    message += "</ul>";
  }
  res.send(message);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
