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
        image: "https://beetlejuicebroadway.com/_img/home-top.webp?v=2",
        blurb: "A darkly hilarious Broadway musical about the ghost with the most."
      },
      {
        title: "Sweeney Todd: The Demon Barber of Fleet Street",
        link: "https://sweeneytodd.fandom.com/wiki/Main_Page",
        image: "https://i.imgur.com/ls7Umce.jpg",
        blurb: "A tale of love, revenge, and meat pies."
      },
      {
        title: "SIX",
        link: "https://en.wikipedia.org/wiki/Six_(musical)",
        image: "https://res.cloudinary.com/ds5gdw0uw/images/c_scale,w_480,h_480,dpr_2/f_auto,q_auto:good/v1739830022/Six_Event_Card_1200x1200/Six_Event_Card_1200x1200.png?_i=AA",
        blurb: "The six wives of Henry VIII remix their stories in this pop-concert musical."
      },
      {
        title: "Nerdy Prudes Must Die",
        link: "https://www.teamstarkid.com/nerdy-prudes",
        image: "https://static.wikia.nocookie.net/starkid/images/c/c7/NPMD_Album_Cover.jpg/revision/latest?cb=20230911134325",
        blurb: "A musical horror-comedy about high school revenge."
      },
      {
        title: "Les Miserables",
        link: "https://lesmiserables.fandom.com/wiki/Les_Misérables_Wiki",
        image: "https://m.media-amazon.com/images/M/MV5BY2Q1YjIxZTAtZTU0YS00ZmE5LWEwODEtY2IyYWM2ZTJlOWE1XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        blurb: "An epic tale of redemption and revolution set in 19th-century France."
      }
    ]
  },
  {
    title: "Indie Animations",
    items: [
      {
        title: "Hazbin Hotel",
        link: "https://hazbinhotel.fandom.com/wiki/Hazbin_Hotel_Wiki",
        image: "https://static.wikia.nocookie.net/international-entertainment-project/images/b/b2/Hazbin_Hotel_-_poster_%28English%29.jpg/revision/latest?cb=20231224180837",
        blurb: "A demon princess opens a rehab hotel in hell in this edgy animation."
      },
      {
        title: "Helluva Boss",
        link: "https://www.youtube.com/@Vivziepop",
        image: "https://m.media-amazon.com/images/M/MV5BMjRlZjIxNDktYWY2Ni00YzY5LTk0MDItYWU1YjJiYjMwYzY4XkEyXkFqcGc@._V1_.jpg",
        blurb: "Follow a misfit group of demons running an assassination business."
      },
      {
        title: "Fundamental Paper Education",
        link: "https://fundamental-paper-education.fandom.com/wiki/Fundamental_Paper_Education_Wiki",
        image: "https://i.ytimg.com/vi/0X6AUj56_hY/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDr5tYAS3Bq3cTJPVnc69L_Pg0jNA",
        blurb: "A haunting animated web series that deconstructs education and society."
      },
      {
        title: "Murder Drones",
        link: "https://www.glitchprod.com/murder-drones",
        image: "https://m.media-amazon.com/images/M/MV5BMDk0NTIzMTEtZmRlZi00Y2MyLTk4ZmItZTNjZDYzODUzYWYzXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        blurb: "Killer robots with emotional baggage—on a snowy post-apocalyptic Earth."
      },
      {
        title: "Lackadaisy",
        link: "https://www.youtube.com/watch?v=vffu6FG4YP4",
        image: "https://m.media-amazon.com/images/M/MV5BYTI3MTZlYmYtYTM4NS00ZGUzLTljNjEtODQ1ZDBjNzQyNjE3XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        blurb: "Bootlegging cats in a stunningly animated 1920s St. Louis."
      },
      {
        title: "The Amazing Digital Circus",
        link: "https://tadc.fandom.com/wiki/Home",
        image: "https://static.wikia.nocookie.net/tadc/images/0/0a/TADC_poster_updated_Glitchstore.png/revision/latest?cb=20240228042350",
        blurb: "A surreal and psychedelic virtual circus adventure."
      }
    ]
  },
  {
    title: "Cartoon Series",
    items: [
      {
        title: "Adventure Time",
        link: "https://adventuretime.fandom.com/wiki/Adventure_Time_Wiki",
        image: "https://deadline.com/wp-content/uploads/2016/08/adventure_time.jpg?w=1024",
        blurb: "A surreal coming-of-age fantasy following Finn and Jake in the Land of Ooo."
      },
      {
        title: "Over the Garden Wall",
        link: "https://over-the-garden-wall.fandom.com/wiki/Over_the_Garden_Wall_Wiki",
        image: "https://static.wikia.nocookie.net/tome-of-the-unknown/images/3/3c/Over-the-garden-wall-poster.jpg/revision/latest?cb=20140717195515",
        blurb: "Two brothers wander through a mysterious, dreamlike forest."
      },
      {
        title: "Futurama",
        link: "https://futurama.fandom.com/wiki/Futurama_Wiki",
        image: "https://static.wikia.nocookie.net/originalcm/images/d/d6/Futurama_20080722.jpg/revision/latest?cb=20100328122746",
        blurb: "A slacker from the 20th century wakes up in the 31st century."
      },
      {
        title: "South Park",
        link: "https://southpark.cc.com",
        image: "https://i1.sndcdn.com/artworks-74EJjJm6ibNt1Qv2-1Xs9ew-t500x500.jpg",
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
        image: "https://m.media-amazon.com/images/M/MV5BMzJhYWEyMWUtZDYwNS00NTU4LTgwODItYjBlNzEwMTc5MTc2XkEyXkFqcGc@._V1_.jpg",
        blurb: "A psychic teen just wants a normal life, but chaos follows him everywhere."
      },
      {
        title: "Uramichi Oniisan",
        link: "https://myanimelist.net/anime/40748/Uramichi_Oniisan",
        image: "https://m.media-amazon.com/images/I/81mC-5Zhs9L._UF1000,1000_QL80_.jpg",
        blurb: "A children's show host hides adult ennui behind a forced smile and fitness routines."
      },
      {
        title: "Wonder Egg Priority",
        link: "https://myanimelist.net/anime/43299/Wonder_Egg_Priority",
        image: "https://usishield.com/wp-content/uploads/2021/11/Screen-Shot-2021-11-16-at-2.29.01-PM-900x509.png",
        blurb: "A surreal exploration of grief and girlhood through a mysterious egg-based world."
      },
      {
        title: "Citrus",
        link: "https://myanimelist.net/anime/34561/Citrus",
        image: "https://m.media-amazon.com/images/I/915H1K6EekL.jpg",
        blurb: "Tensions rise as a high school girl falls for her new stepsister."
      },
      {
        title: "The Girl from the Other Side",
        link: "https://myanimelist.net/anime/37771/Totsukuni_no_Shoujo",
        image: "https://m.media-amazon.com/images/I/91XY1nLj1XL.jpg",
        blurb: "A haunting tale of a cursed forest and the bond between a beast and a child."
      },
      {
        title: "Bloom into You",
        link: "https://myanimelist.net/anime/37430/Yagate_Kimi_ni_Naru",
        image: "https://m.media-amazon.com/images/M/MV5BODNlZGZmZjktNWEwNy00MTJlLWFiY2YtMDA1ZjQ5NDVkZTQ4XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        blurb: "A gentle, introspective love story about self-discovery and same-gender romance."
      }
    ]
  },
  {
    title: "K-Drama",
    items: [
      {
        title: "Friendly Rivalry",
        link: "https://asianwiki.com/Friendly_Rivalry",
        image: "https://upload.wikimedia.org/wikipedia/en/a/a7/Friendly_Rivalry_poster.png",
        blurb: "A playful term for the tension-fueled dynamic between two close characters."
      },
      {
        title: "Hotel del Luna",
        link: "https://asianwiki.com/Hotel_Del_Luna",
        image: "https://asianwiki.com/images/4/4c/Hotel_Del_Luna-GP.jpg",
        blurb: "A mysterious hotel for ghosts, run by a moody, centuries-old woman."
      },
      {
        title: "Sweet Home",
        link: "https://www.imdb.com/title/tt11612120/",
        image: "https://asianwiki.com/images/4/47/Sweet_Home-Netflix-MP2.jpg",
        blurb: "When humans turn into monsters, a troubled teen fights to survive in an apartment complex."
      }
    ]
  },
  {
    title: "Comics / Web Series",
    items: [
      {
        title: "Alien Stage",
        link: "https://alienstage.fandom.com/wiki/ALIEN_STAGE_Wiki",
        image: "https://static.wikia.nocookie.net/2d-music-projects-multimedia/images/f/f5/AlienStagePoster.png/revision/latest/scale-to-width-down/985?cb=20240620230747",
        blurb: "A K-pop inspired animated competition with a dark twist and a deep lore."
      },
      {
        title: "Homestuck",
        link: "https://homestuck.net/",
        image: "https://static.wikia.nocookie.net/mspaintadventures/images/4/4b/HS_Book_1.png/revision/latest/scale-to-width-down/1200?cb=20120804131900",
        blurb: "A multimedia webcomic about kids, games, and the end of the world—kind of."
      },
      {
        title: "Gemini Home Entertainment",
        link: "https://gemini-home-entertainment.fandom.com/wiki/Gemini_Home_Entertainment",
        image: "https://64.media.tumblr.com/02ad55de559d6e7c40cb152bdda621f1/13da43e1514c7648-3a/s1280x1920/14dc669084e660461ff73396248a4f6481075fb7.pnj",
        blurb: "An analog horror series mimicking '80s educational tapes with increasingly unsettling content."
      },
      {
        title: "The Mandela Catalogue",
        link: "https://mandela-catalogue.fandom.com/wiki/The_Mandela_Catalogue_Wiki",
        image: "https://i.ytimg.com/vi/-TqsuJmHLng/maxresdefault.jpg",
        blurb: "A horror web series exploring doppelgängers, faith, and the uncanny through VHS-era tapes."
      },
      {
        title: "Local 58",
        link: "https://local58.fandom.com/wiki/Local_58",
        image: "https://pbs.twimg.com/media/FoiYf_zXsAAPGTg.jpg",
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
