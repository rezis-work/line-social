import { getPosts } from "@/actions/post.action";
import { getDbUserId } from "@/actions/user.action";
import CreatePost from "@/components/CreatePost";
import PostCard from "@/components/PostCard";
import WhoToFollow from "@/components/WhoToFollow";
import { currentUser } from "@clerk/nextjs/server";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Line Social | Home",
  description: "A social media platform for Javscript developers",
  icons: "/logo.png",
  openGraph: {
    title: "Line Social | Home",
    description: "A social media platform for Javscript developers",
    url: "https://linesocial.pro",
    type: "website",
    images: [
      {
        url: "https://utfs.io/f/lPAOELt7YxzGNB4iOPxOaPAZx3qvf0S8CWnKDshVuYrGFoMt",
        width: 1200,
        height: 627,
        alt: "Line Social",
      },
    ],
    locale: "en_US",
    siteName: "Line Social",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Line Social",
  url: "https://linesocial.pro",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://linesocial.pro/",
  },
};

export default async function Home() {
  const user = await currentUser();
  const posts = await getPosts();
  const dbUserId = await getDbUserId();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-10 gap-6">
      <div className="lg:col-span-6">
        {user ? <CreatePost /> : null}
        <div className="space-y-6" role="feed">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} dbUserId={dbUserId} />
          ))}
        </div>
      </div>

      <div className="hidden lg:block lg:col-span-4 sticky top-20">
        <WhoToFollow />
      </div>
    </div>
  );
}
