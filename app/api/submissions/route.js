import Submission from "@/app/lib/Models/Submission";

export const GET = async (req, res) => {
  const { searchParams } = new URL(req.url);
  const limit = searchParams.get("limit");

  try {
    const submissions = await Submission.find()
      .skip(limit - 10)
      .limit(10)
      .populate("author");

    return new Response(JSON.stringify(submissions), { status: 200 });
  } catch (error) {
    return new Response("Failed to Get the Submissions", { status: 500 });
  }
};
