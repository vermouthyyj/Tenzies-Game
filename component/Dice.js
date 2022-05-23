import React from "react";

export default function Dice(props) { 
    const styles = {
        backgroundColor: props.isHeld ? "#3F704D" : "tomato"
    }
    let diceValue;
    switch (props.value) { 
        case 1:
            diceValue = "first-face"
            break
        case 2:
            diceValue = "second-face"
            break
        case 3: 
            diceValue = "third-face"
            break
        case 4:
            diceValue = "forth-face"
            break
        case 5:
            diceValue = "fifth-face"
            break
        case 6:
            diceValue = "sixth-face"
            break
    }

    function getSpanElements(n) {
        var indents = []
        for (let i = 0; i < n; i++) {
            indents.push(<span className='dot' key={i}></span>)
        }
        return indents
    }
        
    return (
        <div style={styles} className={`dice ${diceValue}`} onClick={() => props.heldDice(props.id)}>
            { getSpanElements(props.value) }
        </div>  
    )
}