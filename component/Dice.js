import React from "react";

export default function Dice(props) { 
    const styles = {
        backgroundColor: props.isHeld ? "#59E391" : "white"
    }

    return (
        <div style={styles} className="each-dice" onClick={ () => props.heldDice(props.id) }>{ props.value }</div>
    )
}