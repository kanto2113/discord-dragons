import React, { useContext } from "react"
import { MonstersContext } from "./ImageComponent"

const Monsters = () => {
  const [monsters, setMonsters] = useContext(MonstersContext)

  // .25 CR Monsters

  const quarterCRMonsters = [
    {
      name: "Zombie",
      combatantType: "enemy",
      avatarURL:
        "https://images-na.ssl-images-amazon.com/images/I/61ZVLlu1-kL._AC_SY741_.jpg",
      cr: 0.25,
      hp: 22,
      maxHP: 22,
      ac: 8,
      exp: 50,
      skills: [
        {
          name: "Slam",
          emoji: ":punch:",
          damage: "1D6",
          hitBonus: 3,
          damageBonus: 1,
        },
      ],
    },
    {
      name: "Goblin",
      combatantType: "enemy",
      avatarURL:
        "https://i.pinimg.com/236x/8b/f9/e6/8bf9e6bc4228d4050c0c99a8e95d51dd.jpg",
      cr: 0.25,
      hp: 7,
      maxHP: 7,
      ac: 15,
      exp: 50,
      skills: [
        {
          name: "Attack",
          emoji: ":crossed_swords:",
          damage: "1D6",
          hitBonus: 4,
          damageBonus: 2,
        },
      ],
    },
    {
      name: "Skeleton",
      combatantType: "enemy",
      avatarURL:
        "https://i.pinimg.com/236x/8b/f9/e6/8bf9e6bc4228d4050c0c99a8e95d51dd.jpg",
      cr: 0.25,
      hp: 13,
      maxHP: 13,
      ac: 13,
      exp: 50,
      skills: [
        {
          name: "Attack",
          emoji: ":crossed_swords:",
          damage: "1D6",
          hitBonus: 4,
          damageBonus: 2,
        },
      ],
    },
  ]

  // .5 CR Monsters

  const halfCRMonsters = [
    {
      name: "Orc",
      combatantType: "enemy",
      avatarURL:
        "https://i.pinimg.com/originals/48/c9/9d/48c99d3a387b8a0781b7a6a8affcae29.jpg",
      cr: 0.5,
      hp: 15,
      maxHP: 15,
      ac: 13,
      exp: 100,
      skills: [
        {
          name: "Attack",
          emoji: ":crossed_swords:",
          damage: "1D12",
          hitBonus: 5,
          damageBonus: 3,
        },
      ],
    },
    {
      name: "Black Bear",
      combatantType: "enemy",
      avatarURL:
        "https://i.pinimg.com/originals/8f/7f/20/8f7f207ec1e96e0cd359105999f860a7.jpg",
      cr: 0.5,
      hp: 19,
      maxHP: 19,
      ac: 11,
      exp: 100,
      skills: [
        {
          name: "Bite",
          emoji: ":crossed_swords:",
          damage: "1D6",
          hitBonus: 3,
          damageBonus: 2,
          combo: "a",
        },
        {
          name: "Claw",
          emoji: ":punch:",
          damage: "2D4",
          hitBonus: 3,
          damageBonus: 2,
          combo: "a",
        },
      ],
    },
    {
      name: "Thug",
      combatantType: "enemy",
      avatarURL:
        "https://i.pinimg.com/originals/2a/7b/2d/2a7b2d49e968348712f88e46ea92ed9e.png",
      cr: 0.5,
      hp: 32,
      maxHP: 32,
      ac: 11,
      exp: 100,
      skills: [
        {
          name: "Attack",
          extraAttacks: 1,
          emoji: ":crossed_swords:",
          damage: "1D6",
          hitBonus: 4,
          damageBonus: 2,
        },
      ],
    },
  ]

  // 1 CR Monsters

  const oneCRMonsters = [
    {
      name: "Animated Armor",
      combatantType: "enemy",
      avatarURL:
        "https://i.pinimg.com/originals/be/5c/fe/be5cfed3f0d3af9a9cb796f073018f7a.png",
      cr: 1,
      hp: 33,
      maxHP: 33,
      ac: 18,
      exp: 200,
      skills: [
        {
          name: "Slam",
          extraAttacks: 1,
          emoji: ":punch:",
          damage: "1D6",
          hitBonus: 4,
          damageBonus: 2,
        },
      ],
    },
    {
      name: "Harpy",
      combatantType: "enemy",
      avatarURL:
        "https://i.pinimg.com/originals/09/d4/cf/09d4cf96d0ce8a5ce24c0db30e4247f3.png",
      cr: 1,
      hp: 38,
      maxHP: 38,
      ac: 11,
      exp: 200,
      skills: [
        {
          name: "Claw",
          extraAttacks: 1,
          emoji: ":punch:",
          damage: "2D4",
          hitBonus: 3,
          damageBonus: 1,
          combo: "a",
        },
        {
          name: "Club",
          emoji: ":punch:",
          damage: "1D4",
          hitBonus: 3,
          damageBonus: 1,
          combo: "a",
        },
      ],
    },
    {
      name: "Ghoul",
      combatantType: "enemy",
      avatarURL:
        "https://i.pinimg.com/736x/ad/97/9f/ad979f5af3b1afe15faaa57b96b9ad5d.jpg",
      cr: 1,
      hp: 22,
      maxHP: 22,
      ac: 12,
      exp: 200,
      skills: [
        {
          name: "Bite",
          emoji: ":punch:",
          damage: "2D6",
          hitBonus: 2,
          damageBonus: 2,
        },
      ],
    },
  ]

  // 2 CR Monsters

  const twoCRMonsters = [
    {
      name: "Ogre",
      combatantType: "enemy",
      avatarURL:
        "https://i.pinimg.com/originals/f2/ec/c0/f2ecc0210ef6fc2f93d01ddfc2d8ff05.jpg",
      cr: 2,
      hp: 59,
      maxHP: 59,
      ac: 11,
      exp: 450,
      skills: [
        {
          name: "Greatclub",
          emoji: ":punch:",
          damage: "2D8",
          hitBonus: 6,
          damageBonus: 4,
        },
      ],
    },
    {
      name: "Mimic",
      combatantType: "enemy",
      avatarURL:
        "https://vignette.wikia.nocookie.net/pdd/images/2/27/Mimic.jpg/revision/latest/top-crop/width/360/height/450?cb=20140520031538",
      cr: 2,
      hp: 58,
      maxHP: 58,
      ac: 12,
      exp: 450,
      skills: [
        {
          name: "Bite",
          emoji: ":punch:",
          damage: "1D8",
          hitBonus: 5,
          damageBonus: 3,
        },
      ],
    },
    {
      name: "Sabre-Toothed Tiger",
      combatantType: "enemy",
      avatarURL:
        "https://render.fineartamerica.com/images/rendered/search/canvas-print/mirror/break/images/artworkimages/medium/1/sabertooth-jerry-lofaro-canvas-print.jpg",
      cr: 2,
      hp: 52,
      maxHP: 52,
      ac: 12,
      exp: 450,
      skills: [
        {
          name: "Claw",
          emoji: ":punch:",
          damage: "2D6",
          hitBonus: 6,
          damageBonus: 5,
        },
      ],
    },
  ]

  // 3 CR Monsters

  const threeCRMonsters = [
    {
      name: "Basilisk",
      combatantType: "enemy",
      avatarURL:
        "https://cdnb.artstation.com/p/assets/images/images/005/816/361/large/grant-simon-basilisk.jpg?1493957901",
      cr: 3,
      hp: 52,
      maxHP: 52,
      ac: 15,
      exp: 700,
      skills: [
        {
          name: "Bite",
          emoji: ":punch:",
          damage: "2D6",
          hitBonus: 5,
          damageBonus: 3,
          extraDamage: "2D6",
        },
      ],
    },
    {
      name: "Manticore",
      combatantType: "enemy",
      avatarURL:
        "https://i.pinimg.com/originals/ac/a0/34/aca0347860175528c2ebd40ebb51760e.jpg",
      cr: 3,
      hp: 68,
      maxHP: 68,
      ac: 14,
      exp: 700,
      skills: [
        {
          name: "Bite",
          emoji: ":punch:",
          damage: "1D8",
          hitBonus: 5,
          damageBonus: 3,
          combo: "a",
        },
        {
          name: "Claw",
          extraAttacks: 1,
          emoji: ":punch:",
          damage: "1D6",
          hitBonus: 5,
          damageBonus: 3,
          combo: "a",
        },
      ],
    },
    {
      name: "Mummy",
      combatantType: "enemy",
      avatarURL:
        "https://i.pinimg.com/originals/ac/a0/34/aca0347860175528c2ebd40ebb51760e.jpg",
      cr: 3,
      hp: 58,
      maxHP: 58,
      ac: 11,
      exp: 700,
      skills: [
        {
          name: "Rotting Fist",
          emoji: ":punch:",
          damage: "2D6",
          hitBonus: 5,
          damageBonus: 3,
        },
      ],
    },
  ]

  // 4 CR Monsters

  const fourCRMonsters = [
    {
      name: "Elephant",
      combatantType: "enemy",
      avatarURL:
        "https://i.pinimg.com/originals/1c/93/49/1c934999df7b63c89adc6fefdb61a43a.jpg",
      cr: 4,
      hp: 76,
      maxHP: 76,
      ac: 12,
      exp: 1100,
      skills: [
        {
          name: "Gore",
          emoji: ":punch:",
          damage: "3D8",
          hitBonus: 8,
          damageBonus: 6,
        },
      ],
    },
    {
      name: "Lamia",
      combatantType: "enemy",
      avatarURL:
        "https://i.pinimg.com/originals/46/67/86/466786e51c7d369f3f59f067871edb6f.jpg",
      cr: 4,
      hp: 97,
      maxHP: 97,
      ac: 13,
      exp: 1100,
      skills: [
        {
          name: "Claws",
          emoji: ":punch:",
          damage: "2D10",
          hitBonus: 5,
          damageBonus: 3,
          combo: "a",
        },
        {
          name: "Dagger",
          emoji: ":crossed_swords:",
          damage: "1d4",
          hitBonus: 5,
          damageBonus: 3,
          combo: "a",
        },
      ],
    },
    {
      name: "Weretiger",
      combatantType: "enemy",
      avatarURL:
        "https://i.pinimg.com/originals/4d/c4/02/4dc4029113c3f52f87a5c69bceb52b60.jpg",
      cr: 4,
      hp: 120,
      maxHP: 120,
      ac: 12,
      exp: 1100,
      skills: [
        {
          name: "Claw",
          extraAttacks: 1,
          emoji: ":punch:",
          damage: "1D8",
          hitBonus: 5,
          damageBonus: 3,
        },
      ],
    },
  ]

  const monsterArrayNames = [
    quarterCRMonsters,
    halfCRMonsters,
    oneCRMonsters,
    twoCRMonsters,
    threeCRMonsters,
    fourCRMonsters,
  ]
  let encounter = []

  const encounterGenerator = (partyAverageLevel) => {
    encounter = []
    let encounterLevel = 0
    let remainingCR = partyAverageLevel
    do {
      let monsterArray =
        monsterArrayNames[Math.floor(Math.random() * (remainingCR + 2))]
      let monster =
        monsterArray[Math.floor(Math.random() * monsterArray.length)]
      encounterLevel = monster.cr + encounterLevel
      encounter.push(monster)
      remainingCR = remainingCR - encounterLevel
    } while (encounterLevel <= partyAverageLevel * 0.75)
    console.log("encounter", encounter)
  }

  return (
    <div>
      <button
        onClick={() => {
          encounterGenerator(2)
        }}
      >
        Generator Encounter
      </button>
    </div>
  )
}

export default Monsters
