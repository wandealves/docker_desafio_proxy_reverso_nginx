const db = require("./db");
const helper = require("./helper");
const config = require("./config");

async function getAll() {
  const rows = await db.query(`SELECT * FROM people p`);
  const data = helper.emptyOrRows(rows);

  return {
    data
  };
}

async function create(name) {
  const result = await db.query(
    `INSERT INTO people (name) 
    VALUES 
    ('${name}')`
  );

  let message = "Error in creating people";

  if (result.affectedRows) {
    message = "People created successfully";
  }

  return { message };
}

module.exports = {
  getAll,
  create
};
