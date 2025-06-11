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

const booksData = [
  { title: "Diavola", author: "Jennifer Thorne", isbn: "9781666656893", blurb: "A chilling family‑folklore Gothic." },
  { title: "Incidents Around the House", author: "Josh Malerman", isbn: "9780593907184", blurb: "Unsettling domestic mystery." },
  { title: "Schindler's List", author: "Thomas Keneally", isbn: "9781508250968", blurb: "True story of courage in WWII." },
  { title: "Fingersmith", author: "Sarah Waters", isbn: "9781461812807", blurb: "Victorian deception and romance." },
  { title: "The Forever War", author: "Joe Haldeman", isbn: "9781436121170", blurb: "Time‑bending sci‑fi classic." },
  { title: "My Year of Rest and Relaxation", author: "Ottessa Moshfegh", isbn: "9780525524311", blurb: "Darkly comic dormancy." },
  { title: "Slewfoot", author: "Brom", isbn: "9781250829924", blurb: "Swamp witchcraft fairy‑tale." },
  { title: "It Devours!", author: "Joseph Fink & Jeffrey Cranor", isbn: "9780062476098", blurb: "Absurdist supernatural horror." },
  { title: "The Invisible Life of Addie LaRue", author: "V. E. Schwab", isbn: "9781250777959", blurb: "Immortal deal hauntingly told." },
  { title: "Thornhedge", author: "T. Kingfisher", isbn: "9781250900944", blurb: "Cozy-cabin cursed-thorns tale." },
  { title: "Lessons in Chemistry", author: "Bonnie Garmus", isbn: "9780593507537", blurb: "Wit, science, unexpected heroine." },
  { title: "How to Know a Person", author: "David Brooks", isbn: "9780593790809", blurb: "Essays on empathy and curiosity." },
  { title: "I'm Laughing Because I'm Crying", author: "Youngmi Mayer", isbn: "9781668640043", blurb: "Humor and generational commentary." },
  { title: "Januaries", author: "Olivie Blake", isbn: "9781250353603", blurb: "Dark‑fantasy labyrinth." },
  { title: "Tress of the Emerald Sea", author: "Brandon Sanderson", isbn: "9781938570421", blurb: "Seafaring fairytale in the Cosmere." },
  { title: "The Familiar", author: "Leigh Bardugo", isbn: "9781250329141", blurb: "Rich myth & creature companions." },
  { title: "The Book Thief", author: "Markus Zusak", isbn: "9780739337288", blurb: "WWII words & resilience." },
  { title: "A Man Called Ove", author: "Fredrik Backman", isbn: "", blurb: "Curmudgeon with a golden heart." },
  { title: "Emily Wilde's Encyclopaedia of Faeries", author: "Heather Fawcett", isbn: "9780593633144", blurb: "Scholarly fae escapade." },
  { title: "The Goblin Emperor", author: "Katherine Addison", isbn: "", blurb: "Courtly kindness & politics." },
  { title: "War Doctor", author: "David Nott", isbn: "9781980054634", blurb: "Frontline medicine in conflict zones." },
];

export default function ConsumedMedia() {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    Promise.all(
      booksData.map(async (b) => {
        try {
          const res = await fetch(`https://www.googleapis.com/books/v1/volumes?q=isbn:${b.isbn}`);
          const data = await res.json();
          const vol = data.items?.[0]?.volumeInfo;
          return {
            ...b,
            coverUrl: vol?.imageLinks?.thumbnail ?? "",
            previewLink: data.items?.[0]?.volumeInfo?.previewLink ?? "",
          };
        } catch {
          return { ...b, coverUrl: "", previewLink: "" };
        }
      })
    ).then(setBooks);
  }, []);

  return (
    <section className="max-w-5xl mx-auto p-6 bg-yellow-50 rounded-2xl shadow-lg">
      <h1 className="text-4xl font-bold text-yellow-900 mb-6">📚 Olivia’s Consumed Media</h1>
      <p className="text-lg text-yellow-800 mb-8">
        A collection of stories I've nestled into my forest den—each a spark amid my quiet journeys.
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
