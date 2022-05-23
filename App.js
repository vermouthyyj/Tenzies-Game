import React from "react";
import Dice from "./component/Dice"
import { nanoid } from "nanoid"
import Confetti from "react-confetti"
import Timer from "./component/Timer"

export default function App() { 
    const [dices, setDices] = React.useState(() => allNewDice())
    const [tenzies, setTenzies] = React.useState(false)
    const [left, setLeft] = React.useState(10)
    
    React.useEffect(() => { 
        const allHeld = dices.every(dice => dice.isHeld)
        const firstValue = dices[0].randomNum
        const allSameValue = dices.every(dice => dice.randomNum === firstValue)
        if (allHeld && allSameValue) { 
            setTenzies(true)
        }

        var count = 0
        dices.map(item => { 
            if (item.isHeld && item.randomNum === firstValue) { 
                count++
            }
            console.log(count)
        })
        setLeft(10-count)
    }, [dices])

    function handleClick() { 
        (tenzies ? window.location.reload(false): setDices(refreshDice()))
        
    }
    
    function allNewDice() { 
        const newDice = []
        for (let i = 0; i < 10; i++) { 
            newDice.push({
                randomNum: Math.ceil(Math.random() * 6),
                isHeld: false,
                id: nanoid()
            })
        }
        return newDice
    }

    function refreshDice() { 
        const newDice = []
        setTenzies(false)
        for (let i = 0; i < 10; i++) { 
            if (dices[i].isHeld) {
                // 不改变数字
                newDice.push(dices[i])
            }
            else { 
                newDice.push({
                    randomNum: Math.ceil(Math.random() * 6),
                    isHeld: dices[i].isHeld,
                    id: dices[i].id
                })
            }
        }
        return newDice
    }

    function heldDice(id) { 
        setDices(prevState => { 
            let newDices = []
            for (let i = 0; i < dices.length; i++) { 
                if (prevState[i].id === id) {
                    newDices.push({ ...prevState[i], isHeld: !prevState[i].isHeld })
                }
                else { 
                    newDices.push(prevState[i])
                }
            }
            return newDices
        })
    }

    const diceElement = dices.map((dice) => { 
        return <Dice key={dice.id} value={dice.randomNum} isHeld={dice.isHeld} heldDice={heldDice} id={ dice.id }></Dice>
    })
    return (
        <main>
            {tenzies && <Confetti />}
            
            <div className="game-title">Tenzies</div>
            <Timer tenzies={tenzies} />
            <span># of rolls to win the game: { left }</span>
            <div className="game-instruction">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</div>
            <div className="dice-container">
                { diceElement }
            </div>
            <button onClick={handleClick}>{ (tenzies)? "New Game": "Roll"}</button>
        </main>
    )
}