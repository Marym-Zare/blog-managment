import Link from "next/link";
import Profile from "../components/Profile";
import UserBlogs from "../components/UserBlogs";

export default function Dashboard() {
  return (
    <div className="grid grid-cols-12 md:gap-x-[30px] my-6">
      <div className="md:col-span-8 col-span-full">
        <div className="flex items-center gap-x-[10px]">
          <Link
            className="bg-green-600 text-white font-bold cursor-pointer px-6 py-2 w-1/5 rounded-sm"
            href={"/addBlog"}
          >
            Add Blog
          </Link>
          <div className="px-6 py-2 font-bold text-white bg-lime-950 w-4/5 rounded-sm">
            Your Blogs
          </div>
        </div>
        {/* @ts-expect-error Server Component */}
        <UserBlogs />
      </div>
      <div className="md:col-span-4 col-span-full">
        <Profile />
      </div>
    </div>
  );
}
