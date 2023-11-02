"use client";
import CategoryFilter from "../components/CategoryFilter";
import Queries from "../components/Queries";
import { useState, useEffect } from "react";
import Link from "next/link";

const Page = () => {
  const [currLimit, setCurrLimit] = useState(5);
  const [queries, setQueries] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`/api/queries?limit=${currLimit}`);
      const posts = await response.json();
      setQueries((prevPosts) => (prevPosts = [...prevPosts, ...posts]));
    };
    fetchData();
  }, [currLimit]);

  return (
    <main>
      <CategoryFilter />
      <section>
        <h1
          style={{ textAlign: "center", margin: "1.5rem 0", fontSize: "2rem" }}
        >
          Queries
        </h1>
        <Link href={"/query/new"}>
          <button className="createNewBtn">New Query</button>
        </Link>
        <Queries queries={queries} />
        <button
          onClick={() => setCurrLimit((prev) => (prev = prev + 5))}
          className="loadMoreBtn"
        >
          Load more queries
        </button>
      </section>
    </main>
  );
};

export default Page;
