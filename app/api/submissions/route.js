import Submission from "@/app/lib/Models/Submission";
import connect from "@/app/lib/db/database";
export const GET = async (req, res) => {
  await connect();
  const { searchParams } = new URL(req.url);
  const limit = searchParams.get("limit");

  try {
    const submissions = await Submission.find()
      .skip(limit - 10)
      .limit(10)
      .populate("author");

    return new Response(JSON.stringify(submissions), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify("Failed to Get the Submissions"), {
      status: 500,
    });
  }
};
