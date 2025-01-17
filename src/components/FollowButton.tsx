"use client";

import { Loader2Icon } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";
import toast from "react-hot-toast";
import { toggleFollow } from "@/actions/user.action";

const FollowButton = ({ targetUserId }: { targetUserId: string }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleFollow = async () => {
    setIsLoading(true);
    try {
      await toggleFollow(targetUserId);
      toast.success("User followed successfully 🔥");
    } catch (error) {
      toast.error("Failed to follow user");
      throw new Error(`Failed to follow user - ${error}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Button
      size={"sm"}
      variant={"secondary"}
      onClick={handleFollow}
      disabled={isLoading}
      className="w-20"
    >
      {isLoading ? (
        <Loader2Icon className="w-4 h-4 animate-spin" />
      ) : (
        <span>Follow</span>
      )}
    </Button>
  );
};

export default FollowButton;
