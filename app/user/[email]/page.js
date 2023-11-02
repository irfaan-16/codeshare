"use client";

import Profile from "@/app/components/Profile";
import { useEffect, useState } from "react";

const page = ({ params }) => {
  const [data, setData] = useState([]);
  const decodedEmail = decodeURIComponent(params.email);

  useEffect(() => {
    const fetchUser = async () => {
      const response = await fetch(`/api/user/${decodedEmail}`);
      const obj = await response.json();
      setData(obj);
    };
    fetchUser();
  }, []);

  return (
    <main>
      <Profile data={data} />
    </main>
  );
};

export default page;
