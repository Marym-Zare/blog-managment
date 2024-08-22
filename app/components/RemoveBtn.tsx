"use client";

import { useRouter } from "next/navigation";

export default function RemoveBtn({ id }: { id: string }) {
  const router = useRouter();

  const removeBlog = async () => {
    const confirmed = confirm("Are you sure ?");

    if (confirmed) {
      const res = await fetch(`http://localhost:3000/api/blogs?id=${id}`, {
        method: "DELETE",
      });
      if (res.ok) {
        router.refresh();
      }
    }
  };
  return (
    <button
      onClick={removeBlog}
      className="p-2 border border-red-600 rounded-md"
    >
      Remove
    </button>
  );
}
