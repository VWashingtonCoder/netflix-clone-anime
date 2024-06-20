const { PrismaClient } = require('@prisma/client') 
const prisma = new PrismaClient();
const movieData = [, , ,];

async function main() {
  console.log(`Seeding started...🌱`)
  const movie1 = await prisma.movie.upsert({
    where: { id: 1 },
    update: {},
    create: {
      title: "Liar Liar",
      description: `Hiroto Shinohara is a new transfer student to Academy Island, where games determine student rankings. The more games won, the more stars a student has, with the highest ranking being that of a Seven Star. On Hiroto's first day, he accidentally antagonizes Sarasa Saionji, the so-called Empress of Academy Island and granddaughter of the island's head director. Forced into a game fueled by misunderstandings that he somehow ends up winning, he is thrust into a major bluff where he must lie about his ranking or risk expulsion from the school and island. Fortunately, with the help of the mysterious Company headed by Shirayuki Himeji, Hiroto is not alone in his bluff. The Company will do everything in its power to help him cheat his way through the game challenges sent his way by students wanting to beat him. Though he is a One Star student, he must fight as though he is actually a Seven Star, and overcome insurmountable odds in his quest to search for a missing girl from his past.`,
      videoUrl: "https://www.youtube.com/embed/tW-hx-sQOYw?si=lYfgRCe8_iigHDFe",
      thumbnailUrl: "https://cdn.myanimelist.net/images/anime/1571/134525.jpg",
      genre: "Suspense",
      duration: "4 hours",
    },
  });

  const movie2 = await prisma.movie.upsert({
    where: { id: 2 },
    update: {},
    create: {
      title:
        "I've Somehow Gotten Stronger When I Improved My Farm-Related Skills",
      description: `Al Wayne's greatest goal is to become the best farmer he can be. With utmost effort, he reaches the apex of his farming skills and earns the title of a first-rate cultivator. Due to this achievement, Al gains a substantial upgrade to his stats which now eclipse even the strength of legendary heroes of old.
      
      Soon after discovering his potential, the royal family enlists his help against the rising number of disasters that coincidentally began right as his true power was awakened. Although reluctant, Al concedes that in order to protect his precious fields, he must do his best to keep all threats at bay.`,
      videoUrl: "https://youtu.be/aszQti5MOVg?si=2KcRxzPo4xiNNRPm",
      thumbnailUrl: "https://cdn.myanimelist.net/images/anime/1384/127328.jpg",
      genre: "Action, Adventure, Fantasy",
      duration: "3 hours 53 minutes",
    },
  });

  const movie3 = await prisma.movie.upsert({
    where: { id: 3 },
    update: {},
    create: {
      title: "Black Summoner",
      description: `To prepare for reincarnation in another world, Kelvin gives up select memories from his previous life in exchange for powerful abilities, additional skill points, and an S-class summoner title. As a bonus, the goddess facilitating his rebirth, Melfina, offers him a choice of any companion to give him a head start in his summoner role. Kelvin—who has fallen head over heels for Melfina at first sight—promptly chooses the deity, confident that his passionate feelings for her will resurface even without all of his memories.
      
      Kelvin embarks on his exciting new journey with Melfina as his guide. However, in order to summon his beloved goddess' physical form, he needs to acquire significant amounts of mana points—and the best way to accomplish this is to level up by fighting strong enemies and making contracts with even stronger companions.`,
      videoUrl: "https://youtu.be/pRQ0bGDNBoQ?si=WJlBWlLNttZYCNiH",
      thumbnailUrl: "https://cdn.myanimelist.net/images/anime/1517/125496.jpg",
      genre: "Action, Fantasy",
      duration: "3 hours 50 mins",
    },
  });

  const movie4 = await prisma.movie.upsert({
    where: { id: 4 },
    update: {},
    create: {
      title: "To Your Eternity",
      description: `An Orb, known only as It, is cast to Earth to be observed from afar. Capable of changing forms from beings whose reflections It captures, It first becomes a rock and then, due to the rising temperature, moss.
      
      It does not move until one snowy day, a wolf at death's door barely crosses by. When It takes the animal's form, It attains awareness of its consciousness and starts to wander with an unclear destination in mind. Soon, It comes across the wolf's master—a young boy waiting for his tribe to return from a paradise abundant with fish and fruit in the south. Although the boy is lonely, he still hopes those whom he holds dear in his memories have not forgotten him and that he will reunite with them one day.
      
      The boy wants to explore new surroundings and decides to abandon his home with It to find the paradise using the traces his tribe left behind. However, with a heavily injured body and no sight of his elder comrades, what will become of the boy?
      
      Fumetsu no Anata e illustrates the story of an immortal being experiencing humanity, meeting all types of people in many places throughout time.`,
      videoUrl: "https://youtu.be/W12xMjwY4UE?si=LLX9K37h8Y6T746V",
      thumbnailUrl: "https://cdn.myanimelist.net/images/anime/1880/118484.jpg",
      genre: "Adventure, Drama, Supernatural",
      duration: "7 hours",
    },
  });
  console.log("Data seeded!!!")
  console.log({ movie1, movie2, movie3, movie4 })
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })
