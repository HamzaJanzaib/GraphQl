
import { helloWord,newPost } from "@/controllers/graphql.js";

export const helloResolver = {
    Query: {
        hello: helloWord,
    },
    Mutation: {
        addPost:newPost,
    },
};

