import React from "react"

const Party = () => {

  let playerCharacters = [{
    ac: 16,  ​
    cha: 14,  ​
    chaBonus: 2,  ​
    characterClass: "archer",  ​
    con: 13,  ​
    conBonus: 1,  ​
    dex: 15,  ​
    dexBonus: 2,
    exp: 0,  ​
    hitDie: 10,  ​
    hp: 11,  ​
    init: 2,  ​
    int: 10,  ​
    intBonus: 0,  ​
    level: 1,  ​
    maxHP: 11,  ​
    prof: 2,  ​
    skills: [{
      damage: "D8",
      description: "Shoot your longbow.",  ​​​
      emoji: ":archery:",  ​​​
      hitBonus:[ "dexBonus", "prof" ],
      hitDC: "ac",  ​​​
      name: "Attack",  ​​​
      onHit: "Your arrow pierces the ENEMY dealing DAMAGE damgage. ROLL",  ​​​
      onMiss: "Your arrow shot missed. ROLL",
    },{
      description: "Increase damage done to this target by your arrows by 1d4.",
      emoji: ":arrow_down_small:",​​​
      name: "Hunters Mark"
    }],
    str: 8,  ​
    strBonus: -1,  ​
    wis: 12,  ​
    wisBonus: 1,
  } , {
    ac: 9,
    cha: 14,
    chaBonus: 2,
    characterClass: "mage",
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
    prof: 2,
    spells: [{
      damage: "D10",​​​
      description: "Throw a small ball of fire from you hands.",
      emoji: ":fire:",
      hitBonus: [ "intBonus", "prof" ],
      level: 0,
      name: "Fire Bolt",
      onHit: "Your fire bolt burns the ENEMY dealing DAMAGE damgage. ROLL",
      onMiss: "Your bolt of fire missed. ROLL",
    },{
      description: "Your are surrounded by a magical armor.",
      emoji: ":shield:",
      level: 1,
      name: "Mage Armor",
      onUse: "You are surrounded by a shimmering glow. Your armor class has increase by NEWAC. NEWAC = 13 + character.dexBonus",
    }],
    str: 12,
    strBonus: 1,
    wis: 10,
    wisBonus: 0,
  },{
    ac: 19,
    cha: 13,
    chaBonus: 1,
    characterClass: "warrior",
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
    prof: 2,
    skills: [{
      damage: "D8",
      description: "Swing your longsword.",
      emoji: ":crossed_swords:",
      hitBonus: [ "strBonus", "prof" ],
      hitDC: "ac",
      name: "Attack",
      onHit: "Your longsword slashes the ENEMY dealing DAMAGE damgage. ROLL",
      onMiss: "Your longsword attack missed. ROLL",
    },{
      description: "Increases chance of being attaced by an enemy.",
      emoji: ":face_with_symbols_over_mouth:",
      name: "Taunt",
    }],
    str: 15,
    strBonus: 2,
    wis: 12,
    wisBonus: 1,
  },{
    ac: 17,
    cha: 8,
    chaBonus: -1,
    characterClass: "cleric",
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
    prof: 2,
    skills: [{
      damage: "D6",
      description: "Swing your hammer.",
      emoji: ":hammer:",
      hitBonus: [ "strBonus", "prof" ],
      hitDC: "ac",
      name: "Attack",
      onHit: "Your hammer bludgeons the ENEMY dealing DAMAGE damgage. ROLL",
      onMiss: "Your hammer missed. ROLL",
    }],
    spells: [{
      description: "Heal a character.",
      emoji: ":adhesive_bandage:",
      heal: "D8",
      level: 1,
      name: "Cure Wounds",
      onUse: "Your holy light heals your companion CHARACTER for HEALING health. ROLL",
      spellBonus: [ "wisBonus" , "prof" ],
      str: 13,
      strBonus: 1,
      wis: 15,
      wisBonus: 2,
    }]
  }]

  return (
    <div>

    </div>
  )
}

export default Party