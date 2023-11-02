import Submission from "@/app/lib/Models/Submission";

import connect from "@/app/lib/db/database";
export const POST = async (req, res) => {
  await connect();
  const { title, code, author, tags, category } = await req.json();
  try {
    const newSub = await Submission.create({
      title,
      code,
      author,
      tags,
      category,
    });
    return new Response(JSON.stringify(newSub), { status: 201 });
  } catch (error) {
    return new Response("Failed to Post the Submission", { status: 500 });
  }
};
