import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center bg-neutral-500 px-8 py-3 rounded mt-8 mb-2">
      <Link className="text-green-950 font-bold" href={"/"}>
        Blog Manager
      </Link>
      <div className="flex items-center gap-x-6 text-white font-bold">
        <Link href={"/dashboard"}>dashboard</Link>
        <span>/</span>
        <Link href={"/"}>Home</Link>
      </div>
    </nav>
  );
}
