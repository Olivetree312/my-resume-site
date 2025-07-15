// app/blog/page.tsx
import Image from "next/image";
import Link from "next/link";
const books = [
    { title: "Gideon the Ninth", author: "Tamsyn Muir", isbn: "9781250313195",
      blurb: "lesbian necromancers explore a haunted gothic palace in space?!! scifi-fantasy. absolutely mind-blowing plot. endless banter."
     },
    { title: "Diavola", author: "Jennifer Thorne", isbn: "9781250826121" ,
      blurb: "woman attends annual vacation with dysfunctional family: haunted Italian villa, sus villagers, memory-loss, someone goes missing. she is at first unsettled and then pissed at the b*tch ghost haunting her."
    },
    { title: "Incidents Around the House", author: "Josh Malerman", isbn: "9780593723128",
      blurb: "POV: you're the creepy child in every horror movie. 'Other Mommy' who lives in the closet wants to 'go inside your heart'?? but she's nice so maybe you should let her..."
     },
    { title: "Schindler's List", author: "Thomas Keneally", isbn: "9780340606513",
      blurb: "a rich party-boy/ serial cheater of a German officer saves a lot of Jews (with the help of his wife, who is underappreciated) during WWII."
     },
    { title: "Fingersmith", author: "Sarah Waters", isbn: "1573222038",
      blurb: "when the conner gets conned in Victorian-era Britain. thieving maid x rich heiress engaged to a cunning scammer. "
     },
    { title: "The Forever War", author: "Joe Haldeman", isbn: "9780312536633" ,
      blurb: "genius soldiers battle aliens in a galactic war spanning over a millennium. time-dilation during travel means centuries pass on Earth while they age only months. basically Star-Wars x All Quiet on the Western Front."
    },
    { title: "My Year of Rest and Relaxation", author: "Ottessa Moshfegh", isbn: "9781473549548" ,
      blurb: "when you're deeply depressed but have a lot of purchasing power: sad girl just wants to hibernate, finds world's most incompetent psychiatrist to be her drug dealer."
    },
    { title: "Slewfoot", author: "Brom", isbn: "9781250829924" ,
      blurb: "young widow vs patriarchy in Puritan Colonial New England...with the help of a HaNdSomE evil spirit. delicious revenge served with much gore. a whimsical journey of self-discovery!"
    },
    { title: "It Devours!", author: "Joseph Fink, Jeffrey Cranor", isbn: "9780062476050" ,
    blurb: "friendly town where eldrich horrors are the norm. scientist investigates sTraNge RuMbLinG. encounters cult of the Smiling God, which has hAwT congregation leader."
    },
    { title: "The Invisible Life of Addie LaRue", author: "V. E. Schwab", isbn: "9781250830746" ,
      blurb: "immortal woman curses people with goldfish-memory, is forgotten by everyone she meets. Terribly sad and lonely. centuries pass and she meets someone who can remember her!!"
    },
    { title: "Thornhedge", author: "T. Kingfisher", isbn: "9781250244093" ,
      blurb: "human-born, frog-raised stand-in fairy godmother does an oopsie--makes psycho princess. eventually sticks murderous princess in tower, but one day a knight bumbles to the rescue."
    },
    { title: "Lessons in Chemistry", author: "Bonnie Garmus", isbn: "9780385547345",
      blurb: "brilliant scientist in misogynistic 1960s workplace. she takes no bs from men. single mothering. literate doggo. TV cooking show."
     },
    { title: "How to Know a Person", author: "David Brooks", isbn: "9780593230060",
      blurb: "society is fragmented--how to interact with others in good faith? gotta build empathy/ actively listen to build authentic relationships. "
     },
    { title: "I'm Laughing Because I'm Crying", author: "Youngmi Mayer", isbn: "9781668640043", 
      blurb: "biracial upbringing. colonialism and war in Korea. navigating whiteness, gender, sexuality. butthole hair. bittersweet reflections on a mother-daughter relationship."
    },
    { title: "Januaries", author: "Olivie Blake", isbn: "9781250330697" ,
      blurb: "spirit of a magic bridge approaches burnout. banished fairy answers Craiglist ad. Victorian orphan studies for occult admissions. magical ruminations on life, death, and love (or RevEnGE)."
    },
    { title: "Tress of the Emerald Sea", author: "Brandon Sanderson", isbn: "9781938570421",
      blurb: "island girl stowaways on ship to rescue boy. must find scary Sorceress. deadly oceans of spores with pirates abound. spore powers!!"
     },
    { title: "The Familiar", author: "Leigh Bardugo", isbn: "9780241655306" ,
      blurb: "magic maid gets thrown into high society. it's a bad time to be a witch and a Jew during the Spanish Inquisiton. power-hungry court members all want to use her. immortal 'FaMiLiAr' mentor."
    },
    { title: "The Book Thief", author: "Markus Zusak", isbn: "9780739337288" ,
      blurb: "WWII. narrated by Death. a young foster girl moves to Nazi Germany. sticky fingers for books. a new Mama/ Papa, a friend next door, and...a Jew in the basement. "
    },
    { title: "A Man Called Ove", author: "Fredrik Backman", isbn: "9781410472922" ,
      blurb: "dead wife. no job. grumpy old fart decides to die. gets thwarted by annoying neighbors. lots of shouting, swearing, and compassion."
    },
    { title: "Emily Wilde's Encyclopaedia of Faeries", author: "Heather Fawcett", isbn: "9780356519128" ,
      blurb: "reclusive, bookish genius faerie researcher journeys to uncover village's secrets. is followed by dAsHinG academic rival?? scary faeries. doge sidekick. possible PDA."
    },
    { title: "The Goblin Emperor", author: "Katherine Addison", isbn: "9780765326997" ,
      blurb: "least-favored prince rises to throne after death of family. vicious court politics. lots of foul play. the rise of a kind and empathetic new ruler."
    },
    { title: "War Doctor", author: "David Nott", isbn: "9781509837038",
      blurb: "a doctor volunteers to face the casualties of the 21st century warfront. life-saving procedures admidst life-threatening circumstances."
    },
    { title: "Sociopath", author: "Patric Gagne", isbn: "9781668003183" ,
      blurb: "memoir of a sociopath and her path to self-discovery. (received mixed reception due to author's sus credentials but i found it interesting)"
    },
    { title: "No One Leaves the Castle", author: "Christopher Healy", isbn: "9780062341945" ,
      blurb: "murder mystery...in a fairytale castle? disgraced detective + unlikely suspects = chaotic fun. one of my fav juv books."
    },
    { title: "The Mouse and His Child", author: "Russell Hoban", isbn: "9780440402930" ,
      blurb: "clockwork mouse and his child embark on existential journy after being tossed from toy store. broken things, strange friends, homesickness."
    },
    { title: "Hollow Kingdom", author: "Kira Jane Buxton", isbn: "9781538745830" ,
      blurb: "the apocalypse hits and its narrated by foul-mouthed domesticated crow. slightly gruesome, funny, and oddly heartwarming"
    },
    { title: "A Psalm for the Wild-Built", author: "Becky Chambers", isbn: "9781250236210" ,
      blurb: "robot returns to human world after centuries: asks 'what do people need?' monk has no clue. cozy philosophical road trip in solar-powered wagon."
    },
    { title: "Tuck Everlasting", author: "Natalie Babbitt", isbn: "9780374378486",
      blurb: "eternal life sounds nice(?) girl meets family that can't die, is offered drink from their well of immortality. "
     },
    { title: "Every Heart a Doorway", author: "Seanan McGuire", isbn: "9780765383877" ,
      blurb: "kids come back from magical portals and fairytale adventures...and don't adjust well. murders ensue at boarding school."
    },
    { title: "Everyone You Hate Is Going to Die", author: "Daniel Sloss", isbn: "9780525658146",
      blurb: "well it's true. dark humor, surprisingly deep insights about love, death, and bad smexy time. cathartic chaos."
     },
    { title: "How to Become the Dark Lord and Die Trying", author: "Django Wexler", isbn: "9780316392204" ,
      blurb: "you get reincarnated as the villain of a fantasy world. awkward. try to be good. fail miserably. gory fun."
    },
    { title: "Between Two Fires", author: "Christopher Buehlman", isbn: "9781735483467" ,
      blurb: "France, Black Plague, demons. a disgraced knight, a child prophet, and a nun(?) biblical hellscape. gorgeous prose."
    },
    { title: "The Time Traveler's Wife", author: "Audrey Niffenegger", isbn: "9780156029438" ,
      blurb: "an involuntary time-traveler. girl meets him at all the wrong ages (NOT in a PDF way). beautiful inevitable heartbreak."
    },
    { title: "The Golden Compass", author: "Philip Pullman", isbn: "9780440418320" ,
      blurb: "girl with soul-animal companion uncovers sinister plot. steampunk sledding, polar bear politics, theological controversy."
    },
    { title: "Neverwhere", author: "Neil Gaiman", isbn: "0060557818" ,
      blurb: "London has secret underworld full of angels, assassins, and rats. bland guy falls into it and becomes cool by accident."
    },
    { title: "Fairy Tale", author: "Stephen King", isbn: "9781399705424" ,
      blurb: "teen inherits creepy shed that leads to dying fantasy world. long, atmospheric, gross in parts, and full of heart."
    },
    { title: "Educated", author: "Tara Westover", isbn: "9781987146127" ,
      blurb: "girl raised by survivalists in rural Idaho. teaches herself calculus. trauma, resilience, and a hunger for knowledge."
    },
    { title: "This Is How You Lose the Time War", author: "Amal El-Mohtar, Max Gladstone", isbn: "9783492706063" ,
      blurb: "rival time-traveling agents leave each other increasingly poetic love letters while sabotaging history. i love this sm"
    },
    { title: "The Last Murder at the End of the World", author: "Stuart Turton", isbn: "9781728254654" ,
      blurb: "utopia x locked-room murder mystery. one murder. one survivor. one last chance to save humanity...from itself."
    },
    { title: "A Gentleman in Moscow", author: "Amor Towles", isbn: "9780143110439" ,
      blurb: "Russian aristocrat under to house arrest in hotel. he sips wine and finds meaning in little things."
    },
    { title: "The Martian Chronicles", author: "Ray Bradbury", isbn: "9781451678192" ,
      blurb: "colonizing Mars never goes as planned. poetic short stories with melancholy Martians and a middle finger to imperialism."
    },
    { title: "The Middle-Aged Man on the Flying Trapeze", author: "James Thurber", isbn: "0060804041" ,
      blurb: "quirky, dry, and chaotic doodles of everyday absurdities. 1930s satire that somehow still slaps."
    },
    { title: "How to Sell a Haunted House", author: "Grady Hendrix", isbn: "9781803360553" ,
      blurb: "mom dies. house is haunted. possessed puppet is a little too into family drama. funny scary."
    },
    { title: "Man's Search for Meaning", author: "Viktor E. Frankl", isbn: "0807014265" ,
      blurb: "psychiatrist survives Holocaust. philosophical gut-punch that insists life is still worth living."
    },
    { title: "On Earth as It Is on Television", author: "Emily Jane", isbn: "9781368093682" ,
      blurb: "aliens arrive, and everyone reacts exactly how you'd expect: messily. chronicles of a derpy dad and the family he loves."
    },
    { title: "Calypso", author: "David Sedaris", isbn: "9788417552954" ,
      blurb: "rich, aging, and constipated man tells his life story. essays about family, mortality, and beach houses."
    },
    { title: "The Last House on Needless Street", author: "Catriona Ward", isbn: "9781250812629" ,
      blurb: "crazy cat lady, feral child, recluse in a boarded-up house. what is even happening?? above all, trust the cat."
    },
    { title: "A Very Punchable Face", author: "Colin Jost", isbn: "9781101906323",
      blurb: "funny man roasts himself and his mom. the upbringing of my fav SNL member, narrated with lots of humility (sort of)."
     },
    { title: "All the Light We Cannot See", author: "Anthony Doerr", isbn: "9781410470225" ,
      blurb: "blind French girl and German boy navigate WWII from opposite sides. lyrical, tragic, beautiful."
    },
    { title: "Under the Whispering Door", author: "TJ Klune", isbn: "9781529087994" ,
      blurb: "dead guy learns how to live. found family in the afterlife. tea shop run by Grim Reaper. cute queer ghost story."
    },
    { title: "The Hitchhiker's Guide to the Galaxy", author: "Douglas Adams", isbn: "9787532754687",
      blurb: "earth explodes. british guy ends up in space with aliens and depressed robot. delightfully absurd, very British, kinda existential."
    },
    { title: "The House in the Cerulean Sea", author: "TJ Klune", isbn: "9798891642577" ,
      blurb: "tired social worker visits orphanage of magical misfits. hear melts. found family saves the world. a quiet love story."
    },
    { title: "Reincarnation Blues", author: "Michael Poore", isbn: "9780399178481" ,
      blurb: "old soul falls in love with Death over thousands of reincarnations. must reach nirvana soon or be tossed into the cosmic shredder."
    },
  ];
export default function BlogPage() {
  return (
    <section className="p-8">
      <h1 className="text-2xl font-bold mb-4">Read Reads</h1>
      <p className="mb-6">My fav reads!! best enjoyed by the moonlight &lt;3</p>
      <Link href="/blog" className="text-blue-600 underline mt-4 block">
        ← Back to Blog
      </Link>
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
            <h2 className="text-lg text-green-600 font-bold text-center">{book.title}</h2>
            <h3 className="text-med text-green-400 text-center">{book.author}</h3>
            <p className="text-sm text-center">{book.blurb}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
