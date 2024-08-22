import { IBlog, IBlogs } from "../interfaces/Blogs";
import Blog from "./Blog";

const getBlogs = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/blogs", {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("Failed to fetch blogs");
    }
    return res.json();
  } catch (error) {
    console.log("Error loading blogs: ", error);
  }
};

export default async function Blogs() {
  const { blogs } = await getBlogs();

  return (
    <>
      {(blogs as IBlogs).map((b: IBlog) => (
        <Blog blog={b} showEditAndDeleteOption={false} />
      ))}
    </>
  );
}
