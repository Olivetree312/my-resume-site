import Link from "next/link";

export default function Blog() {
  return (
    <section>
      <h1 className="text-2xl font-semibold mb-2">Olive's Garden</h1>
      <p className="mb-4">Am I a blogger now?!! Ok then here's some miscellaneous BS~</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <Link href="/blog/consumed" className="text-blue-600 hover:underline">
            Consumed Media
          </Link>
        </li>
        <li>
          <Link href="/blog/thoughts" className="text-blue-600 hover:underline">
            Thought Thoughts
          </Link>
        </li>
        <li>
          <Link href="/blog/memes" className="text-blue-600 hover:underline">
            Hoarded Memes
          </Link>
        </li>
        <li>
          <Link href="/blog/bits" className="text-blue-600 hover:underline">
            Cool Bits and Bobs
          </Link>
        </li>
      </ul>
    </section>
  );
}
