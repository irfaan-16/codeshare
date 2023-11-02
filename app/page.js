import Image from "next/image";
import styles from "./page.module.css";
import TagsFilter from "./components/TagsFilter";
import Link from "next/link";
import Submissions from "./components/Queries";
import Feed from "./components/Feed";
import Login from "./components/Login";

export default function Home() {
  return (
    <main>
      <Login />
    </main>
  );
}
