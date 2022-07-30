require("reflect-metadata");
const typeorm = require("typeorm");
module.exports = () => {
  typeorm.createConnection({
   "type": "mysql",
   "host": "localhost",
   "port": 3306,
   "username": "root",
   "password": "",
   "database": "marche-chrifa",
   "synchronize": true,
   "logging": false,
   "entities": [
      "__dirname/../marche-chrifa-orm/build/entity/**/*.js"
   ],
   "migrations": [
     "__dirname/../marche-chrifa-orm/build/migration/**/*.js"
   ],
   "subscribers": [
     "__dirname/../marche-chrifa-orm/build/subscriber/**/*.js"
   ],
   "cli": {
      "entitiesDir": "__dirname/../marche-chrifa-orm/build/entity",
      "migrationsDir": "__dirname/../marche-chrifa-orm/build/migration",
      "subscribersDir": "__dirname/../marche-chrifa-orm/build/subscriber"
   }


})
.catch(err => {  console.error(err) ;});
};
