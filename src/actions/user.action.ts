"use server";

import prisma from "@/lib/prisma";
import { auth, currentUser } from "@clerk/nextjs/server";

export const syncUser = async () => {
  try {
    // get the user id and user from clerk
    const { userId } = await auth();
    const user = await currentUser();
    // if the user is not found, return
    if (!userId || !user) return;

    // we need to check if the user already exists in the database
    const existingUser = await prisma.user.findUnique({
      where: {
        clerkId: userId,
      },
    });

    if (existingUser) return existingUser;

    // if does not exist, we need to create a new user
    const dbUser = await prisma.user.create({
      data: {
        clerkId: userId,
        name: `${user.firstName || ""} ${user.lastName || ""}`,
        username:
          user.username ?? user.emailAddresses[0].emailAddress.split("@")[0],
        email: user.emailAddresses[0].emailAddress,
        image: user.imageUrl,
      },
    });

    return dbUser;
  } catch (error) {
    throw new Error(`Failed to sync user - ${error}`);
  }
};

export const getUserByClerckId = async (clerkId: string) => {
  try {
    const userFollowersCount = await prisma.user.findUnique({
      where: { clerkId },
      include: {
        _count: {
          select: {
            followers: true,
            following: true,
            posts: true,
          },
        },
      },
    });
    if (!userFollowersCount) return null;
    return userFollowersCount;
  } catch (error) {
    throw new Error(`Failed to get user by clerk id - ${error}`);
  }
};
