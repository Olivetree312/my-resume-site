"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

interface Book {
  title: string;
  author: string;
  isbn: string;
  blurb: string;
  coverUrl: string;
  previewLink: string;
}

const booksData: Omit<Book, "coverUrl" | "previewLink">[] = [
  { title: "Diavola", author: "Jennifer Thorne", isbn: "9781666656893", blurb: "A chilling family-folklore Gothic." },
  { title: "Incidents Around the House", author: "Josh Malerman", isbn: "9780593907184", blurb: "Unsettling tales within walls." },
  { title: "Schindler's List", author: "Thomas Keneally", isbn: "9781508250968", blurb: "True courage in the darkest times." },
  { title: "Fingersmith", author: "Sarah Waters", isbn: "9781461812807", blurb: "Victorian twists, hidden truths." },
  { title: "The Forever War", author: "Joe Haldeman", isbn: "9781436121170", blurb: "Sci-fi epic across time and trauma." },
  { title: "My Year of Rest and Relaxation", author: "Ottessa Moshfegh", isbn: "9780525524311", blurb: "Dark comedy in hibernation." },
  { title: "Slewfoot", author: "Brom", isbn: "9781250829924", blurb: "Swamp witchcraft fairytale." },
  { title: "It Devours!", author: "Joseph Fink & Jeffrey Cranor", isbn: "9780062476098", blurb: "Town eaten by its own stories." },
  { title: "The Invisible Life of Addie LaRue", author: "V. E. Schwab", isbn: "9781250777959", blurb: "Immortal bargain, unforgettable tale." },
  { title: "Thornhedge", author: "T. Kingfisher", isbn: "9781250900944", blurb: "Cursed cabin and thorn magic." },
  { title: "Lessons in Chemistry", author: "Bonnie Garmus", isbn: "9780593507537", blurb: "Sharp-witted science heroine." },
  { title: "How to Know a Person", author: "David Brooks", isbn: "9780593790809", blurb: "Essays on connection and curiosity." },
  { title: "I'm Laughing Because I'm Crying", author: "Youngmi Mayer", isbn: "9781668640043", blurb: "Humor with cultural depth." },
  { title: "Januaries", author: "Olivie Blake", isbn: "9781250353603", blurb: "Dark fantasy labyrinth." },
  { title: "Tress of the Emerald Sea", author: "Brandon Sanderson", isbn: "9781938570421", blurb: "High-seas fairytale adventure." },
  { title: "The Familiar", author: "Leigh Bardugo", isbn: "9781250329141", blurb: "Creature companions in mythic land." },
  { title: "The Book Thief", author: "Markus Zusak", isbn: "9780739337288", blurb: "Words and resilience under fire." },
  { title: "Emily Wilde's Encyclopaedia of Faeries", author: "Heather Fawcett", isbn: "9780593633144", blurb: "Scholarly fae mischief." },
  { title: "War Doctor", author: "David Nott", isbn: "9781980054634", blurb: "Front-line healing in conflict." }
];

export default function ConsumedMedia() {
  const [books, setBooks] = useState<Book[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const updated = await Promise.all(
        booksData.map(async (b) => {
          let coverUrl = "", previewLink = "";
          try {
            const res = await fetch(`https://www.googleapis.com/books/v1/volumes?q=isbn:${b.isbn}`);
            const data = await res.json();
            const info = data.items?.[0]?.volumeInfo;
            coverUrl = info?.imageLinks?.thumbnail ?? "";
            previewLink = info?.previewLink ?? "";
          } catch {}
          return { ...b, coverUrl, previewLink };
        })
      );
      setBooks(updated);
    };
    fetchData();
  }, []);

  if (books === null) return null;

  return (
    <section className="max-w-5xl mx-auto p-6 bg-yellow-50 rounded-2xl shadow-lg">
      <h1 className="text-4xl font-bold text-yellow-900 mb-6">📚 Olivia’s Consumed Media</h1>
      <p className="text-lg text-yellow-800 mb-8">
        A forest-thicket of stories I’ve explored—each one a spark beneath the canopy.
      </p>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {books.map((b, i) => (
          <div key={i} className="bg-white border border-yellow-200 rounded-xl p-4 shadow-sm hover:shadow-md transition flex flex-col">
            {b.coverUrl ? (
              <Image
                src={b.coverUrl}
                alt={`${b.title} cover`}
                width={200}
                height={300}
                className="rounded object-cover border mx-auto mb-4"
              />
            ) : (
              <div className="w-[200px] h-[300px] bg-gray-100 rounded flex items-center justify-center mx-auto mb-4 text-gray-500">
                No cover
              </div>
            )}
            <h2 className="text-xl font-semibold text-yellow-900">{b.title}</h2>
            <p className="text-yellow-700 mb-2 italic">by {b.author}</p>
            <p className="text-yellow-800 text-sm mb-4">{b.blurb}</p>
            {b.previewLink && (
              <a
                href={b.previewLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-block text-sm text-green-700 underline hover:text-green-900"
              >
                🌿 Read Preview
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
