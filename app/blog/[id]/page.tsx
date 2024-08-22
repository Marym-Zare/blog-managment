const getBlogById = async (id: string) => {
  try {
    const res = await fetch(`http://localhost:3000/api/blogs/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch blog");
    }
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

export default async function Blog({
  params,
}: {
  params: {
    id: string;
  };
}) {
  const { id } = params;
  const { blog } = await getBlogById(id);
  const { title, description, creator, createdAt } = blog;

  return (
    <div>
      <div className="p-4 my-3 shadow-sm">
        <div className="bg-green-600 text-white font-bold cursor-pointer px-6 py-2 mb-6 w-full rounded-sm">
          Details of Blog
        </div>

        <div>
          <h2 className="font-bold text-2xl">{title}</h2>
          <p>{description}</p>
          <p className="text-slate-500 text-sm mt-4">
            Create by: {creator} at {createdAt}
          </p>
        </div>
      </div>
    </div>
  );
}
