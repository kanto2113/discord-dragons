import React, { useContext } from "react"
import CombatantCardContainer from "./CombatantCardContainer"
import { CombatantContext } from "./ImageComponent"

const CombatantListContainer = () => {
  const [combatant] = useContext(CombatantContext)

  return (
    <div className="combatant-list-container">
      {combatant?.map((combatant) => {
        return (
          <CombatantCardContainer key={combatant.name} combatant={combatant} />
        )
      })}
    </div>
  )
}

export default CombatantListContainer
