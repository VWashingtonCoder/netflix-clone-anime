const { PrismaClient } = require('@prisma/client') 
const prisma = new PrismaClient();
const movieData = [, , ,];

async function main() {
  console.log(`Seeding started...🌱`)
  const movie1 = await prisma.movie.upsert({
    where: { id: 1 },
    update: {
      description: "Hiroto Shinohara, a new transfer student to Academy Island, inadvertently challenges Sarasa Saionji, the island's revered Empress, on his first day. He wins a crucial game through a bluff, but must now maintain a facade of being a high-ranking Seven Star student to avoid expulsion. Assisted by the secretive Company led by Shirayuki Himeji, Hiroto navigates challenges from jealous peers while searching for a missing girl from his past, all while hiding his true One Star status."
    },
    create: {
      title: "Liar Liar",
      description: "Hiroto Shinohara, a new transfer student to Academy Island, inadvertently challenges Sarasa Saionji, the island's revered Empress, on his first day. He wins a crucial game through a bluff, but must now maintain a facade of being a high-ranking Seven Star student to avoid expulsion. Assisted by the secretive Company led by Shirayuki Himeji, Hiroto navigates challenges from jealous peers while searching for a missing girl from his past, all while hiding his true One Star status.",
      videoUrl: "https://www.dropbox.com/scl/fi/xwew9ntgwjmlp3u4rzsvn/liar-liar-season-1-episode-1_HD.mp4?rlkey=3e3xfh0lq2dne9kgr0jm5zq9h&st=lwihsjre&raw=1",
      thumbnailUrl: "https://cdn.myanimelist.net/images/anime/1571/134525.jpg",
      genre: "Suspense",
      duration: "4 hours",
    },
  });

  const movie2 = await prisma.movie.upsert({
    where: { id: 2 },
    update: {
      description: "Al Wayne, striving to excel as a farmer, achieves top-tier cultivation skills and becomes a first-rate cultivator. His newfound prowess surpasses even legendary heroes, prompting the royal family to seek his aid against mounting disasters. Reluctant yet determined to protect his fields, Al accepts the responsibility of defending against these threats."
    },
    create: {
      title:
        "I've Somehow Gotten Stronger When I Improved My Farm-Related Skills",
      description: "Al Wayne, striving to excel as a farmer, achieves top-tier cultivation skills and becomes a first-rate cultivator. His newfound prowess surpasses even legendary heroes, prompting the royal family to seek his aid against mounting disasters. Reluctant yet determined to protect his fields, Al accepts the responsibility of defending against these threats.",
      videoUrl: "https://www.dropbox.com/scl/fi/kv0nbqiuq8c1kfxvc68p1/I-ve-Somehow-Gotten-Stronger-When-I-Improved-My-Farm-Related-Skills-Episode-_Full-HD.mp4?rlkey=ooydfeapconqa8y0o8rkpv8hs&st=41069124&raw=1",
      thumbnailUrl: "https://cdn.myanimelist.net/images/anime/1384/127328.jpg",
      genre: "Action, Adventure, Fantasy",
      duration: "3 hours 53 minutes",
    },
  });

  const movie3 = await prisma.movie.upsert({
    where: { id: 3 },
    update: {
      description: "Kelvin prepares for reincarnation in another world by sacrificing memories for powerful abilities and an S-class summoner title from goddess Melfina. He chooses Melfina as his companion, banking on his love for her to endure despite losing memories. To summon her physical form, Kelvin must gain mana points through battles and contracts with powerful allies, beginning his adventurous journey guided by Melfina."
    },
    create: {
      title: "Black Summoner",
      description: "Kelvin prepares for reincarnation in another world by sacrificing memories for powerful abilities and an S-class summoner title from goddess Melfina. He chooses Melfina as his companion, banking on his love for her to endure despite losing memories. To summon her physical form, Kelvin must gain mana points through battles and contracts with powerful allies, beginning his adventurous journey guided by Melfina.",
      videoUrl: "https://www.dropbox.com/scl/fi/elzdqfyf42stb3yz50b2t/Black-summoner-episode-1-English-Dubbed_High.mp4?rlkey=j7fvt4jen3tacinwiyic22pq7&st=yh8o5p4y&raw=1",
      thumbnailUrl: "https://cdn.myanimelist.net/images/anime/1517/125496.jpg",
      genre: "Action, Fantasy",
      duration: "3 hours 50 mins",
    },
  });

  const movie4 = await prisma.movie.upsert({
    where: { id: 4 },
    update: {
      description: `"To Your Eternity" follows an immortal being, initially an orb, sent to Earth to observe. It transforms through reflections it captures, starting as a rock and then moss. After taking the form of a dying wolf, it gains consciousness and encounters a lonely boy searching for his tribe in a paradise. Together, they embark on a journey, unsure of what lies ahead.`
    },
    create: {
      title: "To Your Eternity",
      description: `"To Your Eternity" follows an immortal being, initially an orb, sent to Earth to observe. It transforms through reflections it captures, starting as a rock and then moss. After taking the form of a dying wolf, it gains consciousness and encounters a lonely boy searching for his tribe in a paradise. Together, they embark on a journey, unsure of what lies ahead.`,
      videoUrl: "https://www.dropbox.com/scl/fi/5qubfbtzuiil4wnd22zko/To-Your-Eternity-Ep.-1-_-DUB-_-The-Last-One_HD.mp4?rlkey=gb8v9zuyeowt7t1sx41dpw8s1&st=ruo1h9al&raw=1",
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
