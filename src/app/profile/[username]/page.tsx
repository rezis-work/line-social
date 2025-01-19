import {
  getProfileByUsername,
  getUserLikedPosts,
  getUserPosts,
  isFollowing,
} from "@/actions/profile.action";
import { notFound } from "next/navigation";
import ProfilePageClient from "./ProfilePageClient";

export const generateMetadata = async ({
  params,
}: {
  params: { username: string };
}) => {
  const user = await getProfileByUsername(params.username);
  if (!user) return;

  return {
    title: `Line Social | ${user.name ?? user.username}`,
    description:
      user.bio || `Check out ${user.name ?? user.username}'s profile`,
    icons: {
      icon: user.image,
    },
    openGraph: {
      title: `Line Social | ${user.name ?? user.username}`,
      description:
        user.bio || `Check out ${user.name ?? user.username}'s profile`,
      url: `https://linesocial.pro/profile/${user.username}`,
      type: "website",
      images: [
        {
          url: user.image,
          width: 1200,
          height: 627,
          alt: `${user.name ?? user.username} image`,
        },
      ],
      locale: "en_US",
      siteName: "Line Social",
    },
    canonical: `https://linesocial.pro/profile/${
      user.username ?? user.username
    }`,
  };
};

export const getStructuredData = async ({
  params,
}: {
  params: { username: string };
}) => {
  const user = await getProfileByUsername(params.username);
  if (!user) return;

  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: user.name ?? user.username,
    url: `https://linesocial.pro/profile/${user.name ?? user.username}`,
    image: user.image,
    description:
      user.bio || `Check out ${user.name ?? user.username}'s profile`,
    potentialAction: {
      "@type": "SearchAction",
      target: `https://linesocial.pro/profile/${user.name ?? user.username}`,
    },
  };
};

const ProfilePage = async ({ params }: { params: { username: string } }) => {
  const user = await getProfileByUsername(params.username);
  if (!user) notFound();

  const [posts, likedPosts, isCurrentUserFollowing] = await Promise.all([
    getUserPosts(user.id),
    getUserLikedPosts(user.id),
    isFollowing(user.id),
  ]);

  return (
    <ProfilePageClient
      user={user}
      posts={posts}
      likedPosts={likedPosts}
      isFollowing={isCurrentUserFollowing}
    />
  );
};

export default ProfilePage;
