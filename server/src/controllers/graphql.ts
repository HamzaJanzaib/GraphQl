
    export const helloWord = () => "Hello, World!";

    type Post = {
        title: string;
        content: string;
    };
    export const newPost = (_:unknown, { title, content }:Post) => {
        return { title, content };
        }
    