import Submission from "@/app/lib/Models/Submission";

export const POST = async (req, res) => {
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
