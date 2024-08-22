import EditBlogForm from "@/app/components/EditBlogForm";

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

export default async function EditBlog({
  params,
}: {
  params: {
    id: string;
  };
}) {
  const { id } = params;
  const { blog } = await getBlogById(id);
  const { title, description } = blog;

  return <EditBlogForm id={id} title={title} description={description} />;
}
