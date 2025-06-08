import Link from "next/link";

export default function MemesPage() {
  return (
    <section>
      <h1 className="text-xl font-bold mb-4">Hoarded Memes</h1>
      <p>~Giggling as my brain rots away</p>

      <Link href="/blog" className="text-blue-600 underline mt-4 block">
        ← Back to Blog
      </Link>
    </section>
  );
}
