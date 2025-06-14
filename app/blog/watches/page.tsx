import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

const categories = [
  {
    title: "Musicals / Movies",
    items: [
      {
        title: "Beetlejuice",
        link: "https://beetlejuicebroadway.com",
        image: "https://beetlejuicebroadway.com/images/poster.jpg",
        blurb: "A darkly hilarious Broadway musical about the ghost with the most."
      },
      {
        title: "Sweeney Todd: The Demon Barber of Fleet Street",
        link: "https://sweeneytoddbroadway.com",
        image: "https://sweeneytoddbroadway.com/assets/images/sweeney.jpg",
        blurb: "A tale of love, revenge, and meat pies."
      },
      {
        title: "SIX",
        link: "https://sixthemusical.com",
        image: "https://sixthemusical.com/images/six-keyart.jpg",
        blurb: "The six wives of Henry VIII remix their stories in this pop-concert musical."
      },
      {
        title: "Nerdy Prudes Must Die",
        link: "https://www.teamstarkid.com/nerdy-prudes",
        image: "https://www.teamstarkid.com/img/shows/NPMD.png",
        blurb: "A musical horror-comedy about high school revenge."
      },
      {
        title: "Les Miserables",
        link: "https://www.netflix.com/title",
        image: "https://upload.wikimedia.org/wikipedia/en/0/0e/Les-miserables-movie-poster.jpg",
        blurb: "An epic tale of redemption and revolution set in 19th-century France."
      }
    ]
  },
  {
    title: "Indie Animations",
    items: [
      {
        title: "Hazbin Hotel",
        link: "https://en.wikipedia.org/wiki/Hazbin_Hotel",
        image: "https://upload.wikimedia.org/wikipedia/en/1/16/HazbinHotelTitleCard.jpg",
        blurb: "A demon princess opens a rehab hotel in hell in this edgy animation."
      },
      {
        title: "Helluva Boss",
        link: "https://www.youtube.com/@Vivziepop",
        image: "https://upload.wikimedia.org/wikipedia/en/b/b5/Helluva_Boss_title_card.png",
        blurb: "Follow a misfit group of demons running an assassination business."
      },
      {
        title: "Fundamental Paper Education",
        link: "https://fundamental-paper-education.fandom.com/wiki",
        image: "https://static.wikia.nocookie.net/fundamental-paper-education/images/5/50/Fundamental_Titlecard.png",
        blurb: "A haunting animated web series that deconstructs education and society."
      },
      {
        title: "Murder Drones",
        link: "https://www.glitchprod.com/murder-drones",
        image: "https://i.ytimg.com/vi/8VZ-sgDRsCk/maxresdefault.jpg",
        blurb: "Killer robots with emotional baggage—on a snowy post-apocalyptic Earth."
      },
      {
        title: "Lackadaisy",
        link: "https://www.youtube.com/watch?v=vffu6FG4YP4",
        image: "https://upload.wikimedia.org/wikipedia/en/4/47/Lackadaisy_Pilot_poster.jpg",
        blurb: "Bootlegging cats in a stunningly animated 1920s St. Louis."
      },
      {
        title: "The Amazing Digital Circus",
        link: "https://www.youtube.com/@GLITCH",
        image: "https://i.ytimg.com/vi/lyVZ8p87Sx0/maxresdefault.jpg",
        blurb: "A surreal and psychedelic virtual circus adventure."
      }
    ]
  },
  {
    title: "Cartoon Series",
    items: [
      {
        title: "Adventure Time",
        link: "https://en.wikipedia.org/wiki/Adventure_Time",
        image: "https://upload.wikimedia.org/wikipedia/en/f/f0/Adventure_Time_-_Title_card.png",
        blurb: "A surreal coming-of-age fantasy following Finn and Jake in the Land of Ooo."
      },
      {
        title: "Over the Garden Wall",
        link: "https://en.wikipedia.org/wiki/Over_the_Garden_Wall",
        image: "https://upload.wikimedia.org/wikipedia/en/0/0e/Over_the_Garden_Wall.png",
        blurb: "Two brothers wander through a mysterious, dreamlike forest."
      },
      {
        title: "Futurama",
        link: "https://en.wikipedia.org/wiki/Futurama",
        image: "https://upload.wikimedia.org/wikipedia/en/3/3e/Futurama_Logo.svg",
        blurb: "A slacker from the 20th century wakes up in the 31st century."
      },
      {
        title: "South Park",
        link: "https://www.southparkstudios.com",
        image: "https://upload.wikimedia.org/wikipedia/en/8/82/South_Park_logo.svg",
        blurb: "A biting satirical look at modern society through the eyes of four foul-mouthed kids."
      }
    ]
  },
  {
    title: "Anime",
    items: [
      {
        title: "The Disastrous Life of Saiki K.",
        link: "https://myanimelist.net/anime/33255/Saiki_Kusuo_no_%CE%A8_nan",
        image: "https://cdn.myanimelist.net/images/anime/13/82840.jpg",
        blurb: "A psychic teen just wants a normal life, but chaos follows him everywhere."
      },
      {
        title: "Uramichi Oniisan",
        link: "https://myanimelist.net/anime/40748/Uramichi_Oniisan",
        image: "https://cdn.myanimelist.net/images/anime/1702/115870.jpg",
        blurb: "A children's show host hides adult ennui behind a forced smile and fitness routines."
      },
      {
        title: "Wonder Egg Priority",
        link: "https://www.crunchyroll.com/series/GVDHX8QNW/WONDER-EGG-PRIORITY",
        image: "https://cdn.myanimelist.net/images/anime/1705/111567.jpg",
        blurb: "A surreal exploration of grief and girlhood through a mysterious egg-based world."
      },
      {
        title: "Citrus",
        link: "https://myanimelist.net/anime/34561/Citrus",
        image: "https://cdn.myanimelist.net/images/anime/1220/89136.jpg",
        blurb: "Tensions rise as a high school girl falls for her new stepsister."
      },
      {
        title: "The Girl from the Other Side",
        link: "https://myanimelist.net/anime/37771/Totsukuni_no_Shoujo",
        image: "https://cdn.myanimelist.net/images/anime/1810/121301.jpg",
        blurb: "A haunting tale of a cursed forest and the bond between a beast and a child."
      },
      {
        title: "Bloom into You",
        link: "https://myanimelist.net/anime/37430/Yagate_Kimi_ni_Naru",
        image: "https://cdn.myanimelist.net/images/anime/1813/103632.jpg",
        blurb: "A gentle, introspective love story about self-discovery and same-gender romance."
      }
    ]
  },
  {
    title: "K-Drama",
    items: [
      {
        title: "Friendly Rivalry",
        link: "https://en.wikipedia.org/wiki/Friendly_Rivalry",
        image: "https://upload.wikimedia.org/wikipedia/commons/6/65/Korean_Drama.png",
        blurb: "A playful term for the tension-fueled dynamic between two close characters."
      },
      {
        title: "Hotel del Luna",
        link: "https://en.wikipedia.org/wiki/Hotel_del_Luna",
        image: "https://upload.wikimedia.org/wikipedia/en/2/26/Hotel_del_Luna.jpg",
        blurb: "A mysterious hotel for ghosts, run by a moody, centuries-old woman."
      },
      {
        title: "Sweet Home",
        link: "https://en.wikipedia.org/wiki/Sweet_Home_(TV_series)",
        image: "https://upload.wikimedia.org/wikipedia/en/7/77/Sweet_Home_TV_series.jpg",
        blurb: "When humans turn into monsters, a troubled teen fights to survive in an apartment complex."
      }
    ]
  },
  {
    title: "Comics / Web Series",
    items: [
      {
        title: "Alien Stage",
        link: "https://www.youtube.com/playlist?list=PL7VmhWGNRxKgMfuTf7lAlxCeumO1tqW9A",
        image: "https://yt3.googleusercontent.com/ytc/AIdro_k4KHxVX0z5g-MsLQ0_4UOUY2FFm4rV1MLQ8V4JKQ=s900-c-k-c0x00ffffff-no-rj",
        blurb: "A K-pop inspired animated competition with a dark twist and a deep lore."
      },
      {
        title: "Homestuck",
        link: "https://homestuck.net/",
        image: "https://static.wikia.nocookie.net/mspaintadventures/images/e/e3/Homestuck_Logo.png",
        blurb: "A multimedia webcomic about kids, games, and the end of the world—kind of."
      },
      {
        title: "Gemini Home Entertainment",
        link: "https://en.wikipedia.org/wiki/Gemini_Home_Entertainment",
        image: "https://static.wikia.nocookie.net/analog-archives/images/3/35/Gemini_title_card.png",
        blurb: "An analog horror series mimicking '80s educational tapes with increasingly unsettling content."
      },
      {
        title: "The Mandela Catalogue",
        link: "https://en.wikipedia.org/wiki/The_Mandela_Catalogue",
        image: "https://upload.wikimedia.org/wikipedia/en/d/d8/The_Mandela_Catalogue_title_card.png",
        blurb: "A horror web series exploring doppelgängers, faith, and the uncanny through VHS-era tapes."
      },
      {
        title: "Local 58",
        link: "https://en.wikipedia.org/wiki/Local_58",
        image: "https://upload.wikimedia.org/wikipedia/en/f/fc/Local_58_logo.png",
        blurb: "A pioneer of analog horror, broadcasting fear from a haunted public access channel."
      }
    ]
  }
  
];

export default function WatchesPage() {
  return (
    <section className="p-8 max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Watched Watches</h1>
      <p className="mb-6">~i speak for the trees when i say we love internet stuff</p>

      {categories.map(({ title, items }) => (
        <div key={title} className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">{title}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {items.map(({ title, link, image, blurb }) => (
              <Card key={title} className="hover:shadow-lg transition">
                <a href={link} target="_blank" rel="noopener noreferrer">
                  <Image
                    src={image}
                    alt={title}
                    width={300}
                    height={450}
                    className="rounded-t-lg object-cover w-full h-60"
                  />
                  <CardContent className="p-4">
                    <h3 className="text-lg font-semibold mb-1">{title}</h3>
                    <p className="text-sm text-muted-foreground line-clamp-3">{blurb}</p>
                  </CardContent>
                </a>
              </Card>
            ))}
          </div>
        </div>
      ))}

      <Link href="/blog" className="text-blue-600 underline mt-6 block">
        ← Back to Blog
      </Link>
    </section>
  );
}
