"use client";
import { useSession } from "next-auth/react";
import CreateQuery from "@/app/components/CreateQuery";

const page = () => {
  const { data: session } = useSession();
  return (
    <main>
      <CreateQuery />
    </main>
  );
};

export default page;
