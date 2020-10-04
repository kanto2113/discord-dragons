import React, { useRef, useEffect, useState } from "react"
import htmlToImage from "html-to-image"
import CharacterGenerator from "./CharacterGenerator"
import CombatantListContainer from "./CombatantListContainer"
import Monsters from "./Monsters"

export const MonstersContext = React.createContext()
export const CombatantContext = React.createContext()

const ImageComponent = () => {
  useEffect(() => {
    makeImage()
  }, [])

  // monster state object

  const [monsters, setMonsters] = useState({
    name: "Zombie",
    combatantType: "enemy",
    avatarURL:
      "https://images-na.ssl-images-amazon.com/images/I/61ZVLlu1-kL._AC_SY741_.jpg",
    cr: 0.25,
    hp: 22,
    maxHP: 22,
    ac: 8,
    skills: [
      {
        name: "Slam",
        emoji: ":punch:",
        damage: "1D6",
        hitBonus: 3,
        damageBonus: 1,
        description: "Swing your longsword.",
        onHit: "Your longsword slashes the ENEMY dealing DAMAGE damgage. ROLL",
        onMiss: "Your longsword attack missed. ROLL",
      },
    ],
  })

  // charaters state array

  const [combatant, setCombatant] = useState([
    {
      ac: 16,
      cha: 14,
      chaBonus: 2,
      characterClass: "archer",
      combatantType: "character",
      con: 13,
      conBonus: 1,
      dex: 15,
      dexBonus: 2,
      exp: 0,
      hitDie: 10,
      hp: 11,
      init: 2,
      int: 10,
      intBonus: 0,
      level: 1,
      maxHP: 11,
      name: "Robin Hood",
      prof: 2,
      skills: [
        {
          damage: "1D8",
          description: "Shoot your longbow.",
          emoji: ":archery:",
          hitBonus: ["dexBonus", "prof"],
          damageBonus: "dexBonus",
          name: "Attack",
          onHit: "Your arrow pierces the ENEMY dealing DAMAGE damgage. ROLL",
          onMiss: "Your arrow shot missed. ROLL",
        },
        {
          description:
            "Increase damage done to this target by your arrows by 1d4.",
          emoji: ":arrow_down_small:",
          name: "Hunters Mark",
        },
      ],
      str: 8,
      strBonus: -1,
      wis: 12,
      wisBonus: 1,
    },
    {
      ac: 9,
      cha: 14,
      chaBonus: 2,
      characterClass: "mage",
      combatantType: "character",
      con: 13,
      conBonus: 1,
      dex: 8,
      dexBonus: -1,
      exp: 0,
      hitDie: 6,
      hp: 7,
      init: -1,
      int: 15,
      intBonus: 2,
      level: 1,
      maxHP: 7,
      name: "Merlin",
      prof: 2,
      spells: [
        {
          damage: "1D10",
          description: "Throw a small ball of fire from you hands.",
          emoji: ":fire:",
          hitBonus: ["intBonus", "prof"],
          level: 0,
          name: "Fire Bolt",
          onHit: "Your fire bolt burns the ENEMY dealing DAMAGE damgage. ROLL",
          onMiss: "Your bolt of fire missed. ROLL",
        },
        {
          description: "Your are surrounded by a magical armor.",
          emoji: ":shield:",
          level: 1,
          name: "Mage Armor",
          onUse:
            "You are surrounded by a shimmering glow. Your armor class has increase by NEWAC. NEWAC = 13 + character.dexBonus",
        },
      ],
      str: 12,
      strBonus: 1,
      wis: 10,
      wisBonus: 0,
    },
    {
      ac: 19,
      cha: 13,
      chaBonus: 1,
      characterClass: "warrior",
      combatantType: "character",
      con: 8,
      conBonus: -1,
      dex: 10,
      dexBonus: 0,
      exp: 0,
      hitDie: 10,
      hp: 9,
      init: 0,
      int: 14,
      intBonus: 2,
      level: 1,
      maxHP: 9,
      name: "Sir Galahad",
      prof: 2,
      skills: [
        {
          damage: "1D8",
          description: "Swing your longsword.",
          emoji: ":crossed_swords:",
          hitBonus: ["strBonus", "prof"],
          damageBonus: "strBonus",
          name: "Attack",
          onHit:
            "Your longsword slashes the ENEMY dealing DAMAGE damgage. ROLL",
          onMiss: "Your longsword attack missed. ROLL",
        },
        {
          description: "Increases chance of being attaced by an enemy.",
          emoji: ":face_with_symbols_over_mouth:",
          name: "Taunt",
        },
      ],
      str: 15,
      strBonus: 2,
      wis: 12,
      wisBonus: 1,
    },
    {
      ac: 17,
      cha: 8,
      chaBonus: -1,
      characterClass: "cleric",
      combatantType: "character",
      con: 14,
      conBonus: 2,
      dex: 12,
      dexBonus: 1,
      exp: 0,
      hitDie: 8,
      hp: 10,
      init: 1,
      int: 10,
      intBonus: 0,
      level: 1,
      maxHP: 10,
      name: "Greggory",
      prof: 2,
      skills: [
        {
          damage: "1D6",
          description: "Swing your hammer.",
          emoji: ":hammer:",
          damageBonus: "strBonus",
          hitBonus: ["strBonus", "prof"],
          name: "Attack",
          onHit: "Your hammer bludgeons the ENEMY dealing DAMAGE damgage. ROLL",
          onMiss: "Your hammer missed. ROLL",
        },
      ],
      spells: [
        {
          description: "Heal a character.",
          emoji: ":adhesive_bandage:",
          heal: "1D8",
          level: 1,
          name: "Cure Wounds",
          onUse:
            "Your holy light heals your companion CHARACTER for HEALING health. ROLL",
          spellBonus: ["wisBonus", "prof"],
        },
      ],
      str: 13,
      strBonus: 1,
      wis: 15,
      wisBonus: 2,
    },
  ])

  let containerRef = useRef()

  const makeImage = async () => {
    let image = await htmlToImage.toPng(containerRef?.current)
  }

  //  Calculate current HP % for health bars

  const calculateMonsterHealthBar = () => {
    let percentOfHP = ((monsters.hp / monsters.maxHP) * 100).toString()
    return percentOfHP
  }

  // use attack skill

  const attackHandler = (combatantIndex, skillIndex) => {
    let hitRoll = Math.floor(Math.random() * 20 + 1)
    let statBonus = combatant[combatantIndex].skills[skillIndex].hitBonus[0]
    let toHit =
      hitRoll +
      combatant[combatantIndex][statBonus] +
      combatant[combatantIndex].prof
    if (toHit >= monsters.ac) {
      let numOfDice = combatant[combatantIndex].skills[skillIndex].damage[0]
      let damageLength =
        combatant[combatantIndex].skills[skillIndex].damage.length
      let damageDie
      if (damageLength === 3) {
        damageDie = combatant[combatantIndex].skills[skillIndex].damage[2]
      } else {
        damageDie =
          combatant[combatantIndex].skills[skillIndex].damage[2] +
          combatant[combatantIndex].skills[skillIndex].damage[3]
      }
      let i
      let damage = 0
      for (i = 0; i < numOfDice; i++) {
        damage = damage + Math.floor(Math.random() * damageDie + 1)
      }
      let totalDMG =
        damage +
        combatant[combatantIndex][
          combatant[combatantIndex].skills[skillIndex].damageBonus
        ]
      let newMonsterHP = monsters.hp - totalDMG
      if (newMonsterHP < 0) {
        newMonsterHP = 0
        console.log(`${monsters.name} is dead!`)
      }
      setMonsters({ ...monsters, hp: newMonsterHP })
      console.log("hit!")
    } else {
      console.log("miss!")
    }
  }

  const attackSpellHandler = (combatantIndex, spellIndex) => {
    let hitRoll = Math.floor(Math.random() * 20 + 1)
    let statBonus = combatant[combatantIndex].spells[spellIndex].hitBonus[0]
    let toHit =
      hitRoll +
      combatant[combatantIndex][statBonus] +
      combatant[combatantIndex].prof
    if (toHit >= monsters.ac) {
      let numOfDice = combatant[combatantIndex].spells[spellIndex].damage[0]
      let damageLength =
        combatant[combatantIndex].spells[spellIndex].damage.length
      let damageDie
      if (damageLength === 3) {
        damageDie = combatant[combatantIndex].spells[spellIndex].damage[2]
      } else {
        damageDie =
          combatant[combatantIndex].spells[spellIndex].damage[2] +
          combatant[combatantIndex].spells[spellIndex].damage[3]
      }
      let i
      let damage = 0
      for (i = 0; i < numOfDice; i++) {
        damage = damage + Math.floor(Math.random() * damageDie + 1)
      }
      let newMonsterHP = monsters.hp - damage
      if (newMonsterHP < 0) {
        newMonsterHP = 0
        console.log(`${monsters.name} is dead!`)
      }
      setMonsters({ ...monsters, hp: newMonsterHP })
      console.log("hit!")
    } else {
      console.log("miss!")
    }
  }

  return (
    <CombatantContext.Provider value={[combatant, setCombatant]}>
      <MonstersContext.Provider value={[monsters, setMonsters]}>
        <div ref={containerRef} className="combat-render">
          <div>
            <div className="combat-container">
              {monsters?.name}
              <div
                className="combat-avatar"
                style={{ backgroundImage: `url('${monsters?.avatarURL}')` }}
              ></div>
              <div className="health-bar-outside">
                <span
                  className="monster-health-bar-current"
                  style={{ width: `${calculateMonsterHealthBar()}%` }}
                ></span>
              </div>
            </div>
          </div>
          <div>
            <CombatantListContainer></CombatantListContainer>
          </div>
          <div className="combat-render-buttons">
            <button
              onClick={() => {
                attackHandler(0, 0)
              }}
            >
              Attack
            </button>
            <button
              onClick={() => {
                attackSpellHandler(1, 0)
              }}
            >
              Spell Cast
            </button>
            <CharacterGenerator></CharacterGenerator>
            <Monsters></Monsters>
          </div>
        </div>
      </MonstersContext.Provider>
    </CombatantContext.Provider>
  )
}

export default ImageComponent
