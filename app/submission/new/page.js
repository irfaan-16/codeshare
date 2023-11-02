"use client";
import Submission from "../../components/CreateSubmission";
import Posts from "../../components/Queries";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

const Page = () => {
  const { data: session } = useSession();
  return (
    <main>
      <Submission />
    </main>
  );
};

export default Page;
