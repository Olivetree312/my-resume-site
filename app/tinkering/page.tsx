import Link from "next/link";

export default function TinkeringPage() {
  return (
    <section className="max-w-3xl mx-auto p-6 bg-yellow-50 rounded-2xl shadow-lg">
      <h1 className="text-4xl font-bold text-green-800 mb-2">🔨 Experiments and Such</h1>
      <p className="text-lg text-green-900 mb-6 italic">
        i'm always working on something fun in my forest—check it out!
      </p>

      <ul className="list-disc pl-6 space-y-4 text-green-800">
        <li>
          <Link href="/tinkering/frog-dodge/index.html" className="text-emerald-700 underline hover:text-emerald-900">
          🐸 Frog Dodge
          </Link>
          <p className="text-sm text-green-700 ml-4">this frog plays games</p>
        </li>
      </ul>
    </section>
  );
}
