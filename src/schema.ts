import { makeExecutableSchema } from "@graphql-tools/schema";
import { readFileSync } from "node:fs";
import { Resolvers } from "../generated/resolvers-types";
import path from "node:path";

const typeDefs = readFileSync(path.join(__dirname, "./schema.graphql"), "utf8");

const resolvers: Resolvers = {
  Query: {
    hello: () => "hey jude!",
    hi: () => "lkjasdf",
  },
};

export const schema = makeExecutableSchema({
  resolvers: [resolvers],
  typeDefs: [typeDefs],
});
