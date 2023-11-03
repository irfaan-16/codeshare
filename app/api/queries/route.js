import Query from "@/app/lib/Models/Query";
import connect from "@/app/lib/db/database";

export const GET = async (req, res) => {
  await connect();
  const { searchParams } = new URL(req.url);
  const limit = searchParams.get("limit");
  try {
    const queries = await Query.find()
      .skip(limit - 5)
      .limit(5)
      .populate("author");
    return new Response(JSON.stringify(queries), { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response(JSON.stringify("Failed to Get the Queries"), {
      status: 500,
    });
  }
};
