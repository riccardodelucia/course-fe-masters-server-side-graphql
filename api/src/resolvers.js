/**
 * Here are your Resolvers for your Schema. They must match
 * the type definitions in your scheama
 */

export const resolvers = {
  Query: {
    pets(_, { input }, ctx) {
      return ctx.models.Pet.findMany(null);
    },
    pet(_, { input }, ctx) {
      return ctx.models.Pet.findMany(null);
    },
  },
  Mutation: {
    newShoe(_, { input }) {
      // add the show to your data source here...
      return shoe;
    },
  },
  Pet: {
    img(pet) {
      return pet.type === "DOG" ? "https://placedog.net/300/300" : "http://placekitten.com/300/300";
    },
  },
  User: {},
};
