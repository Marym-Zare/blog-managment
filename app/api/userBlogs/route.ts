import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import connectMongoDB from "@/libs/mongodb";
import Blog from "@/models/blog";
import { authOptions } from "../auth/[...nextauth]/route";

export async function GET() {
  await connectMongoDB();

  // Get the session to access the logged-in user's information
  const session = await getServerSession(authOptions);

  const creator = session?.user?.email; // Get the creator's email from the session

  // Fetch the blogs that match the creator's email
  const blogs = await Blog.find({ creator });

  return NextResponse.json({ blogs });
}
