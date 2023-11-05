import User from "@/app/lib/Models/User";
import Submission from "@/app/lib/Models/Submission";
import Query from "@/app/lib/Models/Query";
import connect from "@/app/lib/db/database";

export const GET = async (req, context, res) => {
  await connect();

  const categoriesSet = new Set();
  const { email } = context.params;
  try {
    const user = await User.findOne({ email: email });
    if (!user) {
      return new Response(JSON.stringify(null), { status: 404 });
    }

    const subs = await Submission.find({ author: user._id }).populate("author");

    subs.forEach((sub) => {
      categoriesSet.add(sub.category);
    });
    const categories = [...categoriesSet];
    const queries = await Query.find({ author: user._id }).populate("author");
    const userWithPosts = { user, subs, queries, categories };
    return new Response(JSON.stringify(userWithPosts), { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response("Internal server error");
  }
};
