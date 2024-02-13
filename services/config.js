const config = {
  db: {
    /* don't expose password or any sensitive info, done only for demo */
    host: "db",
    user: "root",
    password: "root",
    database: "appdatabase",
    connectTimeout: 60000
  },
  listPerPage: 10
};
module.exports = config;
