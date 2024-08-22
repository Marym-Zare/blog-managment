import Link from "next/link";
import { IBlog } from "../interfaces/Blogs";
import RemoveBtn from "./RemoveBtn";

export default function Blog({
  blog,
  showEditAndDeleteOption = false,
}: {
  blog: IBlog;
  showEditAndDeleteOption: boolean;
}) {
  return (
    <div
      key={blog._id}
      className="p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start"
    >
      <Link href={`/blog/${blog._id}`}>
        <h2 className="font-bold text-2xl">{blog.title}</h2>
        <p>{blog.description}</p>
      </Link>
      {showEditAndDeleteOption && (
        <div className="flex gap-2">
          <RemoveBtn id={blog._id} />
          <Link
            className="p-2 border border-slate-200 rounded-md"
            href={`/editBlog/${blog._id}`}
          >
            Edit Blog
          </Link>
        </div>
      )}
    </div>
  );
}
