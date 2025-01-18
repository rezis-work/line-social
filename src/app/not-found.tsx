"use client";

import Link from "next/link";

const NotFound = () => {
  return (
    <div>
      <h2>Not Found Page</h2>
      <p>Cound not find requested resourse</p>
      <Link href="/" className="text-blue-500 hover:text-blue-600">
        Return Home
      </Link>
    </div>
  );
};

export default NotFound;
