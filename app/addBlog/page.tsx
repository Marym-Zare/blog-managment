"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { useSession } from "next-auth/react";

export default function AddBlog() {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const { data: session } = useSession();
  const creator = session?.user?.email;

  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!title || !description) {
      alert("Title and description required.");
      return;
    }
    try {
      const res = await fetch("http://localhost:3000/api/blogs", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ title, description, creator }),
      });
      if (res.ok) {
        router.refresh();
        router.push("/dashboard");
      } else {
        throw new Error("Failed to create a blog");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <input
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Blog Title"
      />
      <input
        onChange={(e) => setDescription(e.target.value)}
        value={description}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Blog Description"
      />
      <button
        type="submit"
        className="bg-green-600 font-bold text-white py-3 px-6 w-fit"
      >
        Add Blog
      </button>
    </form>
  );
}
