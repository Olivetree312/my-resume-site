// app/blog/page.tsx
import Image from "next/image";

const books = [
  {
    title: "The Little Prince",
    author: "Antoine de Saint-Exupéry",
    isbn: "9780156012195",
  },
  {
    title: "The Book Thief",
    author: "Markus Zusak",
    isbn: "9780375842207",
  },
  {
    title: "All the Light We Cannot See",
    author: "Anthony Doerr",
    isbn: "9781501173219",
  },
  {
    title: "Little Red Fox",
    author: "Sufjan Stevens", // It's a song but included here for visual parity
    isbn: "9780062472106", // Dummy ISBN just to get a cover
  },
];

export default function BlogPage() {
  return (
    <section className="p-8">
      <h1 className="text-2xl font-bold mb-4">Consumed Media</h1>
      <p className="mb-6">Books that made me cry a little or feel like I lost something beautiful.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {books.map((book, index) => (
          <div
            key={index}
            className="p-4 border border-gray-200 rounded-lg shadow hover:shadow-lg transition"
          >
            <Image
              src={`https://covers.openlibrary.org/b/isbn/${book.isbn}-L.jpg`}
              alt={`Cover of ${book.title}`}
              width={128}
              height={200}
              className="mx-auto mb-4"
              unoptimized
            />
            <h2 className="text-lg font-semibold text-center">{book.title}</h2>
            <p className="text-sm text-gray-600 text-center">{book.author}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
