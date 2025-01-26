// export interface Post {
//     _id: string;
//     title: string;
//     dec: string;
//     photo: string;
//     username: string;
//     email: string;
//     categories: Array<string>;
// }
export interface Post {
    ID: number;
    title: string;
    content: string;
    excerpt: string; // Add this for the excerpt
    date: string; // Add this for the post's date
    featured_image?: string; // Add this for the featured image
    URL: string;
    author: {
        name: string;
        avatar_URL: string;
        profile_URL: string;
    };
    categories?: { [key: string]: any };
}
