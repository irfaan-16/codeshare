import Query from "@/app/lib/Models/Query";
import connect from "@/app/lib/db/database";

export const POST = async (req, res) => {
  await connect();
  const { title, code, author, tags, desc } = await req.json();
  try {
    const newQuery = await Query.create({ title, code, author, tags, desc });
    return new Response(JSON.stringify(newQuery), { status: 201 });
  } catch (error) {
    return new Response("Failed to Post the Query", { status: 500 });
  }
};
