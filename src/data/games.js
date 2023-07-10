const games = [
  {
    id: 1,
    name: "F1 23",
    price: 60,
    description:
      'Be the last to brake in EA SPORTS™ F1® 23, the official video game of the 2023 FIA Formula One World Championship™. A new chapter in the thrilling "Braking Point" story mode delivers high-speed drama and heated rivalries.',
    image: "https://upload.wikimedia.org/wikipedia/en/5/5b/F1_23_cover_art.jpg",
  },
  {
    id: 2,
    name: "Hogwarts Legacy",
    price: 55,
    description:
      "Hogwarts Legacy is an immersive, open-world action RPG. Now you can take control of the action and be at the center of your own adventure in the wizarding world.",
    image: "https://upload.wikimedia.org/wikipedia/en/7/7c/Hogwarts-Legacy-cover.jpg",
  },
  {
    id: 3,
    name: "Call of Duty: Modern Warfare II",
    price: 37,
    description:
      "Call of Duty®: Modern Warfare® II drops players into an unprecedented global conflict that features the return of the iconic Operators of Task Force 141.",
    image: "https://upload.wikimedia.org/wikipedia/en/4/4a/Call_of_Duty_Modern_Warfare_II_Key_Art.jpg",
  },
  {
    id: 4,
    name: "God of War Ragnarök",
    price: 55,
    description:
      'Kratos and Atreus must journey to each of the Nine Realms in search of answers as Asgardian forces prepare for a prophesied battle that will end the world. "Along the way they will explore stunning, mythical landscapes, and face fearsome enemies in the form of Norse gods and monsters.',
    image: "https://upload.wikimedia.org/wikipedia/en/e/ee/God_of_War_Ragnar%C3%B6k_cover.jpg",
  },

  {
    id: 5,
    name: "Horizon: Forbidden West",
    price: 47,
    description:
      "Horizon Forbidden West continues the story of Aloy half a year after the events of the Zero Dawn, a young huntress of the Nora tribe sent on a quest to a mysterious frontier spanning Utah to the Pacific coast to find the source of a mysterious plague that kills all it infects.",
    image: "https://upload.wikimedia.org/wikipedia/en/6/69/Horizon_Forbidden_West_cover_art.jpg",
  },
  {
    id: 6,
    name: "Ratchet & Clank: Rift Apart",
    price: 37,
    description:
      "Blast your way through an interdimensional adventure with Ratchet and Clank – now on PC! Help them take on an evil emperor from another reality as you jump between action-packed worlds and beyond at hyper-speed!",
    image: "https://upload.wikimedia.org/wikipedia/en/a/a3/Ratchet_%26_Clank_-_Rift_Apart.png",
  },
  {
    id: 7,
    name: "Elden Ring",
    price: 35,
    description:
      "THE NEW FANTASY ACTION RPG. Rise, Tarnished, and be guided by grace to brandish the power of the Elden Ring and become an Elden Lord in the Lands Between.",
    image: "https://upload.wikimedia.org/wikipedia/en/b/b9/Elden_Ring_Box_art.jpg",
  },
  {
    id: 8,
    name: "Fifa 23",
    price: 30,
    description:
      "FIFA 23 brings The World’s Game to the pitch, with HyperMotion2 Technology, men’s and women’s FIFA World Cup™, women’s club teams, cross-play features**, and more.",
    image: "https://upload.wikimedia.org/wikipedia/en/a/a6/FIFA_23_Cover.jpg",
  },
  {
    id: 9,
    name: "Ghost Of Tsushima Director's Cut",
    price: 40,
    description:
      "Forge a new path and wage an unconventional war for the freedom of Tsushima. Challenge opponents with your katana, master the bow to eliminate distant threats, develop stealth tactics to ambush enemies and explore a new story on Iki Island.",
    image: "https://upload.wikimedia.org/wikipedia/en/b/b6/Ghost_of_Tsushima.jpg",
  },
  {
    id: 10,
    name: "Marvel's Spider-Man: Miles Morales",
    price: 50,
    description:
      "Experience the rise of Miles Morales as he masters incredible, explosive new powers to become his own Spider-Man. Take on the heart-wrenching and action-packed adventure set in the Marvel's New York.",
    image: "https://upload.wikimedia.org/wikipedia/en/a/a3/Spider-Man_Miles_Morales.jpeg",
  },
  {
    id: 11,
    name: "Returnal",
    price: 60,
    description:
      "Crash-land on an alien planet and fight your way through an ever-changing environment. Experience intense combat, overcome challenging enemies, and unravel the mysteries of an enigmatic sci-fi world.",
    image: "https://upload.wikimedia.org/wikipedia/en/9/91/Returnal_cover_art.jpg",
  },
  {
    id: 12,
    name: "Sackboy: A Big Adventure",
    price: 40,
    description:
      "Embark on an epic 3D platforming adventure with Sackboy. Explore stunning worlds, overcome thrilling challenges, and team up with friends in this charming and imaginative game.",
    image: "https://upload.wikimedia.org/wikipedia/en/b/bc/Sackboy_-_A_Big_Adventure_cover_art.jpg",
  },
  {
    id: 13,
    name: "Final Fantasy XVI",
    price: 60,
    description:
      "Experience the next chapter in the iconic Final Fantasy series. Immerse yourself in a captivating story, explore a vast and stunning world, and engage in thrilling battles in this highly anticipated RPG.",
    image: "https://upload.wikimedia.org/wikipedia/en/0/00/Final_Fantasy_XVI_cover_art.png",
  },
  {
    id: 14,
    name: "Resident Evil Village",
    price: 45,
    description:
      "Step into the shoes of Ethan Winters once again and venture into a mysterious village filled with horrifying creatures. Uncover the dark secrets that lie within and survive the nightmarish encounters in this intense survival horror game.",
    image: "https://upload.wikimedia.org/wikipedia/en/2/2c/Resident_Evil_Village.png",
  },
  {
    id: 15,
    name: "Gran Turismo 7",
    price: 65,
    description:
      "Get ready for the ultimate racing experience in Gran Turismo 7. Immerse yourself in stunning visuals, realistic physics, and a wide range of iconic cars. Compete against AI or challenge your friends in thrilling multiplayer races.",
    image: "https://upload.wikimedia.org/wikipedia/en/1/14/Gran_Turismo_7_cover_art.jpg",
  },
  {
    id: 16,
    name: "Assassin's Creed Valhalla",
    price: 50,
    description:
      "Embark on a Viking saga and lead your clan to conquer new lands in Assassin's Creed Valhalla. Engage in epic battles, build your settlement, and uncover the secrets of ancient civilizations in this open-world action RPG.",
    image: "https://upload.wikimedia.org/wikipedia/en/f/ff/Assassin%27s_Creed_Valhalla_cover.jpg",
  },
  {
    id: 17,
    name: "Deathloop",
    price: 55,
    description:
      "Enter the time-looping world of Deathloop and become an assassin trapped in a never-ending cycle. Hunt down targets, unravel the mysteries of the island of Blackreef, and break the loop to secure your freedom.",
    image: "https://upload.wikimedia.org/wikipedia/en/c/cb/Deathloop_cover_art.jpg",
  },
  {
    id: 18,
    name: "Far Cry 6",
    price: 60,
    description:
      "Immerse yourself in the heart of a modern-day guerrilla revolution set in the fictional Caribbean island of Yara. Fight against the oppressive regime, explore a vast open world, and ignite the revolution in Far Cry 6.",
    image: "https://upload.wikimedia.org/wikipedia/en/3/35/Far_cry_6_cover.jpg",
  },
];

export default games;
