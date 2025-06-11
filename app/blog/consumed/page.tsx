"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

interface Book {
  title: string;
  author: string;
  isbn: string;
  blurb: string;
  coverUrl?: string;
  previewLink?: string;
}

const booksData: Omit<Book, "coverUrl" | "previewLink">[] = [
  {
    title: "Diavola",
    author: "Jennifer Thorne",
    isbn: "9781666656893",
    blurb: "A chilling family‑folklore Gothic that echoes long after the last page.",
  },
  {
    title: "Fingersmith",
    author: "Sarah Waters",
    isbn: "9781461812807",
    blurb: "Victorian deception, hidden desires, and twists that will leave you breathless.",
  },
  {
    title: "The Book Thief",
    author: "Markus Zusak",
    isbn: "9780739337288",
    blurb: "Death narrates this lyrical WWII story of words, kindness, and rebellion.",
  },
  {
    title: "Tress of the Emerald Sea",
    author: "Brandon Sanderson",
    isbn: "9781938570421",
    blurb: "A high‑seas fairy tale infused with hopeful magic.",
  },
  {
    title: "Lessons in Chemistry",
    author: "Bonnie Garmus",
    isbn: "9780593507537",
    blurb: "Sharp‑witted, feminist, and deliciously offbeat.",
  },
  {
    title: "Emily Wilde's Encyclopaedia of Faeries",
    author: "Heather Fawcett",
    isbn: "9780593633144",
    blurb: "Academic field notes meet fae mischief in this whimsical and scholarly adventure.",
  },
];

export default function ConsumedMedia() {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    async function fetchBooks() {
      const updated = await Promise.all(
        booksData.map(async (b) => {
          try {
            const res = await fetch(
              `https://www.googleapis.com/books/v1/volumes?q=isbn:${b.isbn}`
            );
            const data = await res.json();
            const volume = data.items?.[0]?.volumeInfo;
            return {
              ...b,
              coverUrl: volume?.imageLinks?.thumbnail || "",
              previewLink: data.items?.[0]?.volumeInfo?.previewLink || "",
            };
          } catch {
            return { ...b, coverUrl: "", previewLink: "" };
          }
        })
      );
      setBooks(updated);
    }

    fetchBooks();
  }, []);

  return (
    <section className="max-w-5xl mx-auto p-6 bg-yellow-50 rounded-2xl shadow-lg">
      <h1 className="text-4xl font-bold text-yellow-900 mb-6">📚 Olivia’s Consumed Media</h1>
      <p className="text-lg text-yellow-800 mb-8">
        A collection of stories I've nestled into my forest den—each a spark amid my quiet journeys.
      </p>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {books.map((b, i) => (
          <div
            key={i}
            className="bg-white border border-yellow-200 rounded-xl p-4 shadow-sm hover:shadow-md transition flex flex-col"
          >
            {b.coverUrl ? (
              <Image
                src={b.coverUrl}
                alt={`Cover of ${b.title}`}
                width={200}
                height={300}
                className="rounded object-cover border mx-auto mb-4"
              />
            ) : (
              <div className="w-[200px] h-[300px] bg-gray-100 rounded flex items-center justify-center mx-auto mb-4 text-gray-500">
                No cover available
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
