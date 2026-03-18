
 import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "src/graphql/schema/*.graphql",
  generates: {
    "./src/graphql/generated.ts": {
       plugins: [
        {
          add: {
            content: "/* eslint-disable @typescript-eslint/no-explicit-any */",
          },
        },
        "typescript",
        "typescript-resolvers",
      ],
    },
  },
};

export default config;

