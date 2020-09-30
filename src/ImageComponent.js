import React, {useRef, useEffect, useState } from 'react'
import htmlToImage from 'html-to-image'
import CharacterGenerator from "./CharacterGenerator"

const ImageComponent = () => {
  useEffect(()=>{
    makeImage()
  }, [])
  
  let containerRef = useRef()

  const makeImage = async () => {
    let image = await htmlToImage.toPng(containerRef?.current)
  }


  // charaters state array

  const [characters, setCharacters] = useState([{
    name: "Tommy Gun",
    avatarURL: "https://i.pinimg.com/originals/d6/bb/74/d6bb74ef943be62db9122e78ede268b2.png",
    characterClass: "warrior",
    level: 1,
    exp: 0,
    hp: 10,
    maxHP: 15,
    hitDie: 10,
    ac: 19,
    init: 2,
    skills: [{
          name: "Attack",
          emoji: ":crossed_swords:",
          damage: "D8",
          hitBonus: ["strBonus","prof"],
          description: "Swing your longsword.",
          onHit: `Your longsword slashes the ENEMY dealing DAMAGE damgage. ROLL`,
          onMiss: "Your longsword attack missed. ROLL"
        },{
          name: "Taunt",
          emoji: ":face_with_symbols_over_mouth:",

          description: "Increases chance of being attaced by an enemy.",
        }],
    prof: 2,
    str: 16,
    dex: 15,
    con: 16,
    int: 8,
    wis: 8,
    cha: 8,
    strBonus: 3,
    dexBonus: 2,
    conBonus: 3,
    intBonus: -1,
    wisBonus: -1,
    chaBonus: -1,
  }])

  // monster state object

  const [monster, setMonster] = useState({
    name: "Zombie",
    avatarURL: 'https://images-na.ssl-images-amazon.com/images/I/61ZVLlu1-kL._AC_SY741_.jpg',
    cr : .25,
    hp: 22,
    maxHP: 22,
    ac: 8,
    skills: [{
      name: "Slam",
      emoji: ":punch:",
      damage: "D6",
      hitBonus: 3,
      damageBonus: 1,
      description: "Swing your longsword.",
      onHit: "Your longsword slashes the ENEMY dealing DAMAGE damgage. ROLL",
      onMiss: "Your longsword attack missed. ROLL"
    }]
  })

  //  Calculate current HP % for health bars

  const calculatePlayerHealthBar = () => {
    let percentOfHP = (characters[0].hp/characters[0].maxHP * 100).toString()
    return percentOfHP
  }

  const calculateMonsterHealthBar = () => {
    let percentOfHP = (monster.hp/monster.maxHP * 100).toString()
    return percentOfHP
  }

  // Basic melee attack

  const attackHandler = () => {
    let hitRoll = Math.floor(Math.random() * 20 + 1)
    let toHit = hitRoll + characters[0].strBonus + characters[0].prof
    if(toHit >= monster.ac){
      let damage = Math.floor(Math.random() * 8 + 1)
      let totalDMG = damage + characters[0].strBonus
      let newMonsterHP = monster.hp - totalDMG
      if(newMonsterHP < 0){
        newMonsterHP = 0
        console.log(`${monster.name} is dead!`)
      }
      setMonster({...monster, hp : newMonsterHP})
      console.log("hit!")
    } else {
      console.log("miss!")
    }
  }


  return (
    <div ref={containerRef}>

      <div className="combat-monster-container">
        <div className="health-bar-outside">
          <span className="health-bar-current" style = {{width: `${calculateMonsterHealthBar()}%`}}></span>
        </div>
        <div className="combat-character-avatar" style={{ backgroundImage: `url('${monster.avatarURL}')`}}>
        </div>
      {monster.name}
      </div>

      <br></br>
      <br></br>
      <br></br>

      <div className="combat-character-container">
        {characters[0].name}

        <div>
        </div>
        <div className="combat-character-avatar" style={{ backgroundImage: `url('${characters[0].avatarURL}')`}}>
        </div>
        <div className="health-bar-outside">
          <span className="health-bar-current" style={{width: `${calculatePlayerHealthBar()}%`}}></span>
        </div>
      </div>

      <button onClick={attackHandler}>Attack</button>
      <br></br>
      <CharacterGenerator></CharacterGenerator>
    </div>
    )

}

export default ImageComponent