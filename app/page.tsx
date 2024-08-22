import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import Blogs from "./components/Blogs";
import { authOptions } from "./api/auth/[...nextauth]/route";
import Navbar from "./components/Navbar";

export default async function Home() {
  const session = await getServerSession(authOptions);

  if (!session) redirect("/login");
  return (
    <>
      {/* @ts-expect-error Server Component */}
      <Blogs />
    </>
  );
}
