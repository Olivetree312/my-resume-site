import Link from "next/link";

export default function BitsPage() {
  return (
    <section>
      <h1 className="text-xl font-bold mb-4">✨Cool Bits and Bobs</h1>
      <p>~Shiny things I found</p>

      <section className="max-w-3xl mx-auto p-6 bg-yellow-50 rounded-2xl shadow-lg">
        <h1 className="text-4xl font-bold text-yellow-900 mb-4">mini shrines to my fav things</h1>
        <div className="space-y-6">

          <div className="p-4 bg-white rounded-xl border border-yellow-200">
            <h2 className="text-xl font-semibold text-yellow-900"> 🐸 a site all about frogs</h2>
            <p className="text-yellow-800 mb-2">
            green, slimy, and beautiful!
            </p>
            <a
              href="https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://www.froglife.org/&ved=2ahUKEwjV3JKUhYySAxW6DkQIHXijIpoQFnoECBsQAQ&usg=AOvVaw0zn13ZjwwfrAzUlXQhhivT"
              target ="_blank"
              className="text-amber-700 underline hover:text-amber-900"
            >
              Froglife
            </a>
          </div>
        </div>
      </section>

      <Link href="/blog" className="text-blue-600 underline mt-4 block">
        ← Back to Blog
      </Link>
    </section>
  );
}
