"use client";
import Submission from "../../components/CreateSubmission";
import { useSession } from "next-auth/react";

const Page = () => {
  return (
    <main>
      <Submission />
    </main>
  );
};

export default Page;
