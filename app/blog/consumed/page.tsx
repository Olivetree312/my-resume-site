import Link from "next/link";

export default function ConsumedMedia() {
  return (
    <section>
      <h1 className="text-xl font-bold mb-4">Consumed Media</h1>
      <p>~MORE, MORE giVe Me MOrE!!</p>

      <Link href="/blog" className="text-blue-600 underline mt-4 block">
        ← Back to Blog
      </Link>
    </section>
  );
}
