"use client";
import { useState } from "react";
import Queries from "./Queries";
import SubmissionPage from "./Queries";
import TagsFilter from "./TagsFilter";
import Link from "next/link";

const Feed = () => {
  const [type, setType] = useState("queries");

  return (
    <>
      <TagsFilter />
      <div
        style={{
          display: "flex",
          gap: "1rem",
          alignItems: "center",
          marginBottom: "1rem",
        }}
      >
        <p
          style={{
            cursor: "pointer",
            background: "gray",
            padding: "0.5rem",
            fontSize: "0.8rem",
            fontWeight: "bold",
            borderRadius: "4px",
            userSelect: "none",
          }}
          onClick={() => setType((prev) => (prev = "queries"))}
        >
          queries
        </p>
        <p
          style={{
            cursor: "pointer",
            background: "gray",
            padding: "0.5rem",
            fontSize: "0.8rem",
            fontWeight: "bold",
            borderRadius: "4px",
            userSelect: "none",
          }}
          onClick={() => setType((prev) => (prev = "submissions"))}
        >
          submissions
        </p>
      </div>
      {type == "queries" ? <Queries /> : <SubmissionPage />}

      <Link
        href={"/submission"}
        style={{ border: "1px solid white", padding: "0.5rem 1rem" }}
      >
        Submit a code
      </Link>
    </>
  );
};

export default Feed;
