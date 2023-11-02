"use client";
import CategoryFilter from "../components/CategoryFilter";
import { useEffect, useState } from "react";
import SubmissionsLoading from "@/app/components/submissionsLoading";

import Submissions from "../components/Submissions";
import Link from "next/link";
const page = () => {
  const [data, setData] = useState([]);
  const [currLimit, setCurrLimit] = useState(10);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`/api/submissions?limit=${currLimit}`);
      const posts = await response.json();
      setData((prev) => (prev = [...prev, ...posts]));
    };

    fetchData();
  }, [currLimit]);

  return (
    <main>
      <CategoryFilter />
      {data?.length ? (
        <>
          <h1 style={{ textAlign: "center", margin: "1.5rem 0" }}>
            Submissions
          </h1>
          <Link href={"/submission/new"}>
            <button className="createNewBtn">New Submission</button>
          </Link>
          <Submissions submissions={data} showImage={true} />
          <button
            onClick={() => setCurrLimit((prev) => (prev = prev + 10))}
            className="loadMoreBtn"
          >
            Load more Submissions
          </button>
        </>
      ) : (
        <SubmissionsLoading />
      )}
    </main>
  );
};

export default page;
