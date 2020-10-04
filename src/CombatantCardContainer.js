import React, { useContext } from "react"
import { CombatantContext } from "./ImageComponent"

const CombatantCardContainer = (props) => {
  const [combatant, setCombatant] = useContext(CombatantContext)

  const calculatePlayerHealthBar = () => {
    let percentOfHP = (
      (props.combatant?.hp / props.combatant?.maxHP) *
      100
    ).toString()
    return percentOfHP
  }

  return (
    <div className="combat-container">
      {props.combatant?.name}
      <div
        className="combat-avatar"
        style={{ backgroundImage: `url('${props.combatant?.avatarURL}')` }}
      ></div>
      <div className="health-bar-outside">
        <span
          className="combatant-health-bar-current"
          style={{ width: `${calculatePlayerHealthBar()}%` }}
        ></span>
      </div>
    </div>
  )
}

export default CombatantCardContainer
