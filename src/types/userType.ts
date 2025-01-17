import { getPosts } from "@/actions/post.action";

export interface UserType {
  id: string;
  email: string;
  clerkId: string;
  name: string | null;
  username: string;
  bio: string | null;
  image: string | null;
  location: string | null;
  website: string | null;
  _count: {
    followers: number;
    following: number;
    posts: number;
  };
  createdAt: Date;
  updatedAt: Date;
}

export type Posts = Awaited<ReturnType<typeof getPosts>>;
export type Post = Posts[number];
