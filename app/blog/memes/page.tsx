import Link from "next/link";
import Image from "next/image";

// Generate filenames dynamically
const memeFilenames = Array.from({ length: 139 }, (_, i) => `teehee-${i + 1}.jpeg`);

export default function MemesPage() {
  return (
    <section>
      <h1 className="text-xl font-bold mb-4">Hoarded Memes</h1>
      <p>~Giggling as my brain rots away</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
        {memeFilenames.map((filename, index) => (
          <div key={index} className="rounded-xl overflow-hidden shadow-md">
            <Image
              src={`/memes/memes/${filename}`}
              alt={`meme-${index + 1}`}
              width={500}
              height={500}
              className="w-full h-auto object-contain"
            />
          </div>
        ))}
      </div>
      <Link href="/blog" className="text-blue-600 underline mt-4 block">
        ← Back to Blog
      </Link>
    </section>
  );
}
