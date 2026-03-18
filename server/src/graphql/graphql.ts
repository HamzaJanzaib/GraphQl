
import { helloResolver } from "@/graphql/resolvers/hello.js";
import { ApolloServer } from "@apollo/server";
import { loadFilesSync } from "@graphql-tools/load-files";
import { mergeResolvers } from "@graphql-tools/merge";

export const connectGraphQL = () => {
  const typeDefs = loadFilesSync("src/graphql/schema/**/*.graphql");

  const server = new ApolloServer({
    typeDefs,
    resolvers: mergeResolvers([helloResolver]),
    formatError: (err) => {
      // Default error response

      console.log(err);
      let statusCode = 500;

      // Map GraphQL error codes to HTTP status codes
      if (err.extensions?.code === "UNAUTHENTICATED") {
        statusCode = 401;
      } else if (err.extensions?.code === "FORBIDDEN") {
        statusCode = 403;
      }

      return {
        message: err.message,
        code: err.extensions?.code || "INTERNAL_SERVER_ERROR",
        statusCode,
      };
    },
  });

  return server;
};

