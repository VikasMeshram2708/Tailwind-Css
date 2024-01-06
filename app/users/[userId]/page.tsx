import getUser from "@/lib/getUser";
import getUserPost from "@/lib/getUserPost";
import React, { Suspense } from "react";
import UserPosts from "./components/UserPosts";
import type { Metadata } from "next";

type Params = {
  params: {
    userId: string;
  };
};

export async function generateMetadata({
  params: { userId },
}: Params): Promise<Metadata> {
  const userData: Promise<User> = getUser(userId);
  const user: User = await userData;

  return {
    title: user.name,
    description: `This is the page of ${user?.name}`,
  };
}

export default async function UserPage({ params: { userId } }: Params) {
  const userData: Promise<User> = getUser(userId);
  const userPostData: Promise<Post[]> = getUserPost(userId);

  //   const [user, userPost] = await Promise.all([userData, userPostData]);

  const user = await userData;

  return (
    <div>
      <h1>User Name : {user?.name}</h1>

      <Suspense fallback={<h1>Loading...</h1>}>
        <UserPosts promise={userPostData} />
      </Suspense>
    </div>
  );
}
