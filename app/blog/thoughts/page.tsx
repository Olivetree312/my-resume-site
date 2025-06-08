import Link from "next/link";

export default function ThoughtsPage() {
  return (
    <section>
      <h1 className="text-xl font-bold mb-4">Thought Thoughts</h1>
      <p>~Chronicles of a big brain</p>

      <Link href="/blog" className="text-blue-600 underline mt-4 block">
        ← Back to Blog
      </Link>
    </section>
  );
}
