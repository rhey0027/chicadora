import dbConnect from "@/app/config/db";
import PostItem from "@/app/models/PostItem";

// CALLING THE FUNCTION FROM DATABASE
dbConnect()

// === MAKING A GET REQUEST
export const GET = async () => {
  const postItems = await PostItem.find().select("-__v");
  return Response.json(postItems);
}
// === MAKING A POST REQUEST
export const POST = async (request:Request) => {
  // CREATE A VARIABLE FOR EACH POST ITEM
  const postItem = await request.json();

  try {
    const savedItem = await new PostItem({...postItem}).save();
    return new Response(JSON.stringify(savedItem), {
      headers: {
        "Content-Type": "application/json"
      },
      status: 201 });
  } catch (error) { 
    return new Response(JSON.stringify({ msg: "Failed to post!"}), {
      headers: {
        "Content-Type": "application/json"
      },
      status: 500
    })
  }
} 