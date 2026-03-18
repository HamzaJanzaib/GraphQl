
import { helloWord,newPost } from "@/controllers/graphql.js";

export const helloResolver = {
    Query: {
        hello: helloWord,
        test: () => "Test Query is working fine"
    },
    Mutation: {
        addPost:newPost,
    },
};

