"use client";
import { useSession } from "next-auth/react";
import CreateQuery from "@/app/components/CreateQuery";

const Page = () => {
  const { data: session } = useSession();
  return (
    <main>
      <CreateQuery />
    </main>
  );
};

export default Page;
