import { currentUser } from "@clerk/nextjs/server";
import React from "react";
import UnAuthenticatedSidebar from "./UnAuthenticatedSidebar";
import { getUserByClerckId } from "@/actions/user.action";
import AutenticatedSidebar from "./AutenticatedSidebar";

const Sidebar = async () => {
  const authUser = await currentUser();
  if (!authUser) return <UnAuthenticatedSidebar />;

  const user = await getUserByClerckId(authUser.id);
  if (!user) return null;

  return (
    <div className=" sticky top-20">
      <AutenticatedSidebar user={user} />
    </div>
  );
};

export default Sidebar;
