import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[calc(100vh-10rem)]">
      <h2 className="text-2xl font-bold">We can't find user</h2>
      <Button className="mt-4">
        <Link href="/">Go to back</Link>
      </Button>
    </div>
  );
};

export default NotFound;
