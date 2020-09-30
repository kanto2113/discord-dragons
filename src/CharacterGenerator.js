import React from "react"

const CharacterGenerator = () => {

  let classArray = ["warrior", "archer", "mage", "cleric"]
  let defaultStatsArray = [14,13,12,10,8]
  let statBonusArray = [-5,-5,-4,-4,-3,-3,-2,-2,-1,-1,0,0,1,1,2,2,3,3,4,4,5]
  let profBonusArray = [0,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6]

  const characterBuilder = (characterClass) => {
    let strIndex
    let dexIndex
    let conIndex
    let intIndex
    let wisIndex
    let armorDexBonus

    let newCharacter = {}
    newCharacter.level = 1
    newCharacter.exp = 0


    switch(characterClass){
      //warrior
      case "warrior": 
        newCharacter.characterClass = "warrior"
        newCharacter.hitDie = 10
        // skills
        newCharacter.skills = [{
          name: "Attack",
          emoji: ":crossed_swords:",
          damage: "D8",
          hitBonus: ["strBonus","prof"],
          hitDC: "ac",
          description: "Swing your longsword.",
          onHit: `Your longsword slashes the ENEMY dealing DAMAGE damgage. ROLL`,
          onMiss: "Your longsword attack missed. ROLL"
        },{
          name: "Taunt",
          emoji: ":face_with_symbols_over_mouth:",
          description: "Increases chance of being attaced by an enemy.",
        }]
        // str
        newCharacter.str = 15
        newCharacter.strBonus = statBonusArray[newCharacter.str]
        // dex
        dexIndex = Math.floor(Math.random() * 5)
        newCharacter.dex = defaultStatsArray[dexIndex]
        defaultStatsArray.splice(dexIndex, 1)
        newCharacter.dexBonus = statBonusArray[newCharacter.dex]
        // con
        conIndex = Math.floor(Math.random() * 4)
        newCharacter.con = defaultStatsArray[conIndex]
        defaultStatsArray.splice(conIndex, 1)
        newCharacter.conBonus = statBonusArray[newCharacter.con]
        // int
        intIndex = Math.floor(Math.random() * 3)
        newCharacter.int = defaultStatsArray[intIndex]
        defaultStatsArray.splice(intIndex, 1)
        newCharacter.intBonus = statBonusArray[newCharacter.int]
        // wis
        wisIndex = Math.floor(Math.random() * 2)
        newCharacter.wis = defaultStatsArray[wisIndex]
        defaultStatsArray.splice(wisIndex, 1)
        newCharacter.wisBonus = statBonusArray[newCharacter.wis]
        //cha
        newCharacter.cha = defaultStatsArray[0]
        newCharacter.chaBonus = statBonusArray[newCharacter.cha]
        //reset defaultStatsArray
        defaultStatsArray = [14,13,12,10,8]
        //prof
        newCharacter.prof = profBonusArray[newCharacter.level]
        //hp
        newCharacter.maxHP = newCharacter.hitDie + newCharacter.conBonus
        newCharacter.hp = newCharacter.maxHP
        //ac with chainmail and shield fighting style: defense
        newCharacter.ac = 16 + 2 + 1
        // init
        newCharacter.init = newCharacter.dexBonus
        console.log(newCharacter)
        break

      // "archer"
      case "archer":
        newCharacter.characterClass = "archer"
        newCharacter.hitDie = 10
        // skills
        newCharacter.skills = [{
          name: "Attack",
          emoji: ":archery:",
          damage: "D8",
          hitBonus: ["dexBonus","prof"],
          hitDC: "ac",
          description: "Shoot your longbow.",
          onHit: `Your arrow pierces the ENEMY dealing DAMAGE damgage. ROLL`,
          onMiss: "Your arrow shot missed. ROLL"
        },{
          name: "Hunters Mark",
          emoji: ":arrow_down_small:",
          description: "Increase damage done to this target by your arrows by 1d4.",
        }]
        // dex
        newCharacter.dex = 15
        newCharacter.dexBonus = statBonusArray[newCharacter.dex]
        // str
        strIndex = Math.floor(Math.random() * 5)
        newCharacter.str = defaultStatsArray[strIndex]
        defaultStatsArray.splice(strIndex, 1)
        newCharacter.strBonus = statBonusArray[newCharacter.str]
        // con
        conIndex = Math.floor(Math.random() * 4)
        newCharacter.con = defaultStatsArray[conIndex]
        defaultStatsArray.splice(conIndex, 1)
        newCharacter.conBonus = statBonusArray[newCharacter.con]
        // int
        intIndex = Math.floor(Math.random() * 3)
        newCharacter.int = defaultStatsArray[intIndex]
        defaultStatsArray.splice(intIndex, 1)
        newCharacter.intBonus = statBonusArray[newCharacter.int]
        // wis
        wisIndex = Math.floor(Math.random() * 2)
        newCharacter.wis = defaultStatsArray[wisIndex]
        defaultStatsArray.splice(wisIndex, 1)
        newCharacter.wisBonus = statBonusArray[newCharacter.wis]
        //cha
        newCharacter.cha = defaultStatsArray[0]
        newCharacter.chaBonus = statBonusArray[newCharacter.cha]
        //reset defaultStatsArray
        defaultStatsArray = [14,13,12,10,8]
        //prof
        newCharacter.prof = profBonusArray[newCharacter.level]
        //hp
        newCharacter.maxHP = newCharacter.hitDie + newCharacter.conBonus
        newCharacter.hp = newCharacter.maxHP
        //ac with scale mail + dex bonus from armor
        if (newCharacter.dexBonus > 2){
          armorDexBonus = 2
        } else {
          armorDexBonus = newCharacter.dexBonus
        }
        newCharacter.ac = 14 + armorDexBonus
        // init
        newCharacter.init = newCharacter.dexBonus
        console.log(newCharacter)
        break

      //mage
      case "mage": 
        newCharacter.characterClass = "mage"
        newCharacter.hitDie = 6
        // skills
        newCharacter.spells = [{
          name: "Fire Bolt",
          emoji: ":fire:",
          level: 0,
          damage: "D10",
          hitBonus: ["intBonus","prof"],
          description: "Throw a small ball of fire from you hands.",
          onHit: `Your fire bolt burns the ENEMY dealing DAMAGE damgage. ROLL`,
          onMiss: "Your bolt of fire missed. ROLL"
        },{
          name: "Mage Armor",
          emoji: ":shield:",
          level: 1,
          description: "Your are surrounded by a magical armor.",
          onUse: "You are surrounded by a shimmering glow. Your armor class has increase by NEWAC. NEWAC = 13 + character.dexBonus"
        }]
        // int
        newCharacter.int = 15
        newCharacter.intBonus = statBonusArray[newCharacter.int]
        // dex
        dexIndex = Math.floor(Math.random() * 5)
        newCharacter.dex = defaultStatsArray[dexIndex]
        defaultStatsArray.splice(dexIndex, 1)
        newCharacter.dexBonus = statBonusArray[newCharacter.dex]
        // con
        conIndex = Math.floor(Math.random() * 4)
        newCharacter.con = defaultStatsArray[conIndex]
        defaultStatsArray.splice(conIndex, 1)
        newCharacter.conBonus = statBonusArray[newCharacter.con]
        // str
        strIndex = Math.floor(Math.random() * 3)
        newCharacter.str = defaultStatsArray[strIndex]
        defaultStatsArray.splice(strIndex, 1)
        newCharacter.strBonus = statBonusArray[newCharacter.str]
        // wis
        wisIndex = Math.floor(Math.random() * 2)
        newCharacter.wis = defaultStatsArray[wisIndex]
        defaultStatsArray.splice(wisIndex, 1)
        newCharacter.wisBonus = statBonusArray[newCharacter.wis]
        //cha
        newCharacter.cha = defaultStatsArray[0]
        newCharacter.chaBonus = statBonusArray[newCharacter.cha]
        //reset defaultStatsArray
        defaultStatsArray = [14,13,12,10,8]
        //prof
        newCharacter.prof = profBonusArray[newCharacter.level]
        //hp
        newCharacter.maxHP = newCharacter.hitDie + newCharacter.conBonus
        newCharacter.hp = newCharacter.maxHP
        //ac with natural armor
        newCharacter.ac = 10 + newCharacter.dexBonus
        // init
        newCharacter.init = newCharacter.dexBonus
        console.log(newCharacter)
        break

        
      //cleric
      case "cleric": 
      newCharacter.characterClass = "cleric"
      newCharacter.hitDie = 8
      // skills
      newCharacter.skills= [{
        name: "Attack",
        emoji: ":hammer:",
        damage: "D6",
        hitBonus: ["strBonus","prof"],
        hitDC: "ac",
        description: "Swing your hammer.",
        onHit: `Your hammer bludgeons the ENEMY dealing DAMAGE damgage. ROLL`,
        onMiss: "Your hammer missed. ROLL"
      }]
      // spells
      newCharacter.spells = [{
        name: "Cure Wounds",
        emoji: ":adhesive_bandage:",
        level: 1,
        heal: "D8",
        spellBonus: ["wisBonus" + "prof"],
        description: "Heal a character.",
        onUse: `Your holy light heals your companion CHARACTER for HEALING health. ROLL`,
      }]
      // wis
      newCharacter.wis = 15
      newCharacter.wisBonus = statBonusArray[newCharacter.wis]
      // dex
      dexIndex = Math.floor(Math.random() * 5)
      newCharacter.dex = defaultStatsArray[dexIndex]
      defaultStatsArray.splice(dexIndex, 1)
      newCharacter.dexBonus = statBonusArray[newCharacter.dex]
      // con
      conIndex = Math.floor(Math.random() * 4)
      newCharacter.con = defaultStatsArray[conIndex]
      defaultStatsArray.splice(conIndex, 1)
      newCharacter.conBonus = statBonusArray[newCharacter.con]
      // str
      strIndex = Math.floor(Math.random() * 3)
      newCharacter.str = defaultStatsArray[strIndex]
      defaultStatsArray.splice(strIndex, 1)
      newCharacter.strBonus = statBonusArray[newCharacter.str]
      // int
      intIndex = Math.floor(Math.random() * 2)
      newCharacter.int = defaultStatsArray[intIndex]
      defaultStatsArray.splice(intIndex, 1)
      newCharacter.intBonus = statBonusArray[newCharacter.int]
      //cha
      newCharacter.cha = defaultStatsArray[0]
      newCharacter.chaBonus = statBonusArray[newCharacter.cha]
      //reset defaultStatsArray
      defaultStatsArray = [14,13,12,10,8]
      //prof
      newCharacter.prof = profBonusArray[newCharacter.level]
      //hp
      newCharacter.maxHP = newCharacter.hitDie + newCharacter.conBonus
      newCharacter.hp = newCharacter.maxHP
      //ac with scale mail and shield
      newCharacter.ac = 14 + newCharacter.dexBonus + 2
      // init
      newCharacter.init = newCharacter.dexBonus
      console.log(newCharacter)
      break
    }
  }



  return (
    <div>
      <button onClick={()=>{characterBuilder(classArray[Math.floor(Math.random() * classArray.length)])}}>New Character</button>
    </div>
  )
}

export default CharacterGenerator