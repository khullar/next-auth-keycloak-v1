"use client";
import { useSession } from "next-auth/react";

import SignIn from "@/components/sign-in";
import SignOut from "@/components/sign-out";

export default function Home() {
  const { data: session } = useSession();

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        {session ? (
          <>
            <p>Welcome, {session.user.name}!</p>
            <SignOut />
          </>
        ) : (
          <>
            <p>You are not logged in.</p>
            <SignIn />
          </>
        )}
      </main>
    </div>
  );
}
