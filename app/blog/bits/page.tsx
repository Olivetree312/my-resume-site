import Link from "next/link";

export default function BitsPage() {
  return (
    <section>
      <h1 className="text-xl font-bold mb-4">Cool Bits and Bobs</h1>
      <p>~Shiny things I found</p>

      <Link href="/blog" className="text-blue-600 underline mt-4 block">
        ← Back to Blog
      </Link>
    </section>
  );
}
