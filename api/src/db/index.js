import { LowSync } from "lowdb";
import { JSONFileSync } from "lowdb/node";
import { createPetModel } from "./pet.js";
import { createUserModel } from "./user.js";

const db = new LowSync(new JSONFileSync("api/src/db/db.json"));
db.read();

console.dir(db);

const models = {
  Pet: createPetModel(db),
  User: createUserModel(db),
};

export { models, db };
