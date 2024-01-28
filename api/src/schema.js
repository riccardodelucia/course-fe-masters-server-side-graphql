import { gql } from "apollo-server";

/**
 * Type Definitions for our Schema using the SDL.
 */
export const typeDefs = gql`
  type User {
    id: ID!
    username: String!
  }

  type Pet {
    id: ID!
    createdAt: String!
    name: String!
    type: String!
  }

  input PetsInput {
    type: String!
  }

  input PetInput {
    name: String!
  }

  type Query {
    pets(input: PetsInput): [Pet]!
    pet(input: PetInput): Pet
  }

  input NewShoeInput {
    brand: String!
    size: Int!
  }

  type Mutation {
    newShoe(input: NewShoeInput!): Shoe!
  }
`;
