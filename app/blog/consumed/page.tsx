import Image from "next/image";

const books = [
  { title: "Diavola", author: "Jennifer Thorne", isbn:"9781666656893", blurb: "A chilling family‑folklore Gothic that echoes long after the last page." },
  { title: "Incidents Around the House", author: "Josh Malerman", isbn:"9780593907184", blurb: "A creeping, house‑bound mystery that unravels one unsettling moment at a time." },
  { title: "Schindler's List", author: "Thomas Keneally", isbn:"9781508250968", blurb: "A harrowing true story of courage and moral choice in the darkest of times." },
  { title: "Fingersmith", author: "Sarah Waters", isbn:"9781461812807", blurb: "Victorian deception, hidden desires, and twists that will leave you breathless." },
  { title: "The Forever War", author: "Joe Haldeman", isbn:"9781436121170", blurb: "A haunting sci‑fi epic about war, time, and the cost of survival." },
  { title: "My Year of Rest and Relaxation", author: "Ottessa Moshfegh", isbn:"9780525524311", blurb: "A darkly comic lullaby of a year spent hibernating from existence." },
  { title: "Slewfoot", author: "Brom", isbn:"9781250829924", blurb: "A fairy‑tale monster story soaked in old‑world witchcraft and swamp magic." },
  { title: "It Devours!", author: "Joseph Fink & Jeffrey Cranor", isbn:"9780062476098", blurb: "Absurdist horror-meets-immersive investigation in an ever-hungry town." },
  { title: "The Invisible Life of Addie LaRue", author: "V. E. Schwab", isbn:"9781250777959", blurb: "An immortal bargain story that lingers in your heart long after nightfall." },
  { title: "Thornhedge", author: "T. Kingfisher", isbn:"9781250900944", blurb: "Cozy creepiness in a cabin surrounded by cursed thorns." },
  { title: "Lessons in Chemistry", author: "Bonnie Garmus", isbn:"9780593507537", blurb: "Sharp‑witted, feminist, and deliciously offbeat." },
  { title: "How to Know a Person", author: "David Brooks", isbn:"9780593790809", blurb: "A thoughtful meditation on curiosity, meaning, and connection." },
  { title: "I'm Laughing Because I'm Crying", author: "Youngmi Mayer", isbn:"9781668640043", blurb: "A brilliant fusion of humor, culture, and generational nuance." },
  { title: "Januaries", author: "Olivie Blake", isbn:"9781250353603", blurb: "A fractured dark‑fantasy mirror labyrinth you won’t escape." },
  { title: "Tress of the Emerald Sea", author: "Brandon Sanderson", isbn:"9781938570421", blurb: "A high‑seas fairy tale infused with hopeful magic." },
  { title: "The Familiar", author: "Leigh Bardugo", isbn:"9781250329141", blurb: "Rich myth, creature companions, and Bardugo's signature depth." },
  { title: "The Book Thief", author: "Markus Zusak", isbn:"9780739337288", blurb: "Death narrates this lyrical WWII story of words, kindness, and rebellion." },
  { title: "A Man Called Ove", author: "Fredrik Backman", isbn:"", blurb: "Gruff on the outside, gold on the inside—this story warms your soul." },
  // ...and the rest can go here
];

export default function ConsumedMedia() {
  return (
    <section className="max-w-5xl mx-auto p-6 bg-yellow-50 rounded-2xl shadow-lg">
      <h1 className="text-4xl font-bold text-yellow-900 mb-6">📚 Olivia’s Consumed Media</h1>
      <p className="text-lg text-yellow-800 mb-8">
        A stash of my favorite books!! 
      </p>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {books.map((b, i) => (
          <div
            key={i}
            className="bg-white border border-yellow-200 rounded-xl p-4 shadow-sm hover:shadow-md transition"
          >
            <div className="w-full h-64 relative mb-4 rounded overflow-hidden">
              {b.isbn ? (
                <Image
                    src={`https://covers.openlibrary.org/b/isbn/${b.isbn}-L.jpg`}
                    alt={`Cover of ${b.title}`}
                    width={200}
                    height={300}
                    className="object-cover w-full h-auto mx-auto"
                    />
              ) : (
                <div className="bg-gray-100 flex items-center justify-center text-gray-400">
                  No cover available
                </div>
              )}
            </div>
            <h2 className="text-xl font-semibold text-yellow-900">{b.title}</h2>
            <p className="text-yellow-700 mb-2 italic">by {b.author}</p>
            <p className="text-yellow-800 text-sm">{b.blurb}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
