// app/blog/page.tsx
import Image from "next/image";
const books = [
    { title: "Diavola", author: "Jennifer Thorne", isbn: "9781250826121" },
    { title: "Incidents Around the House", author: "Josh Malerman", isbn: "9780593723128" },
    { title: "Schindler's List", author: "Thomas Keneally", isbn: "9780340606513" },
    { title: "Fingersmith", author: "Sarah Waters", isbn: "1573222038" },
    { title: "The Forever War", author: "Joe Haldeman", isbn: "9780312536633" },
    { title: "My Year of Rest and Relaxation", author: "Ottessa Moshfegh", isbn: "9781473549548" },
    { title: "Slewfoot", author: "Brom", isbn: "9781250829924" },
    { title: "It Devours!", author: "Joseph Fink, Jeffrey Cranor", isbn: "9780062476050" },
    { title: "The Invisible Life of Addie LaRue", author: "V. E. Schwab", isbn: "9781250830746" },
    { title: "Thornhedge", author: "T. Kingfisher", isbn: "9781250244093" },
    { title: "Lessons in Chemistry", author: "Bonnie Garmus", isbn: "9780385547345" },
    { title: "How to Know a Person", author: "David Brooks", isbn: "9780593230060" },
    { title: "I'm Laughing Because I'm Crying", author: "Youngmi Mayer", isbn: "9781668640043" },
    { title: "Januaries", author: "Olivie Blake", isbn: "9781250330697" },
    { title: "Tress of the Emerald Sea", author: "Brandon Sanderson", isbn: "9781938570421" },
    { title: "The Familiar", author: "Leigh Bardugo", isbn: "9780241655306" },
    { title: "The Book Thief", author: "Markus Zusak", isbn: "9780739337288" },
    { title: "A Man Called Ove", author: "Fredrik Backman", isbn: "9781410472922" },
    { title: "Emily Wilde's Encyclopaedia of Faeries", author: "Heather Fawcett", isbn: "9780356519128" },
    { title: "The Goblin Emperor", author: "Katherine Addison", isbn: "9780765326997" },
    { title: "War Doctor", author: "David Nott", isbn: "9781509837038" },
    { title: "Sociopath", author: "Patric Gagne", isbn: "9781668003183" },
    { title: "No One Leaves the Castle", author: "Christopher Healy", isbn: "9780062341945" },
    { title: "The Mouse and His Child", author: "Russell Hoban", isbn: "9780440402930" },
    { title: "Hollow Kingdom", author: "Kira Jane Buxton", isbn: "9781538745830" },
    { title: "A Psalm for the Wild-Built", author: "Becky Chambers", isbn: "9781250236210" },
    { title: "Tuck Everlasting", author: "Natalie Babbitt", isbn: "9780374378486" },
    { title: "Every Heart a Doorway", author: "Seanan McGuire", isbn: "9780765383877" },
    { title: "Everyone You Hate Is Going to Die", author: "Daniel Sloss", isbn: "9780525658146" },
    { title: "How to Become the Dark Lord and Die Trying", author: "Django Wexler", isbn: "9780316392204" },
    { title: "Between Two Fires", author: "Christopher Buehlman", isbn: "9781735483467" },
    { title: "The Time Traveler's Wife", author: "Audrey Niffenegger", isbn: "9780156029438" },
    { title: "The Golden Compass", author: "Philip Pullman", isbn: "9780440418320" },
    { title: "Neverwhere", author: "Neil Gaiman", isbn: "0060557818" },
    { title: "Fairy Tale", author: "Stephen King", isbn: "9781399705424" },
    { title: "Educated", author: "Tara Westover", isbn: "9781987146127" },
    { title: "This Is How You Lose the Time War", author: "Amal El-Mohtar, Max Gladstone", isbn: "9783492706063" },
    { title: "The Last Murder at the End of the World", author: "Stuart Turton", isbn: "9781728254654" },
    { title: "A Gentleman in Moscow", author: "Amor Towles", isbn: "9780143110439" },
    { title: "The Martian Chronicles", author: "Ray Bradbury", isbn: "9781451678192" },
    { title: "The Middle-Aged Man on the Flying Trapeze", author: "James Thurber", isbn: "0060804041" },
    { title: "How to Sell a Haunted House", author: "Grady Hendrix", isbn: "9781803360553" },
    { title: "Man's Search for Meaning", author: "Viktor E. Frankl", isbn: "0807014265" },
    { title: "On Earth as It Is on Television", author: "Emily Jane", isbn: "9781368093682" },
    { title: "Calypso", author: "David Sedaris", isbn: "9788417552954" },
    { title: "The Last House on Needless Street", author: "Catriona Ward", isbn: "9781250812629" },
    { title: "A Very Punchable Face", author: "Colin Jost", isbn: "9781101906323" },
    { title: "All the Light We Cannot See", author: "Anthony Doerr", isbn: "9781410470225" },
    { title: "Under the Whispering Door", author: "TJ Klune", isbn: "9781529087994" },
    { title: "The Hitchhiker's Guide to the Galaxy", author: "Douglas Adams", isbn: "9787532754687" },
    { title: "The House in the Cerulean Sea", author: "TJ Klune", isbn: "9798891642577" },
  ];

export default function BlogPage() {
  return (
    <section className="p-8">
      <h1 className="text-2xl font-bold mb-4">Consumed Media</h1>
      <p className="mb-6">My fav reads!!</p>
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
