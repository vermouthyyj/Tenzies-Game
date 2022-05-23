import React from "react";

export default function Timer(props) { 
    const [seconds, setSeconds] = React.useState(0)

    React.useEffect(() => { 
        const timer = setTimeout(() => 
            setSeconds(prev => prev+1)
            , 1000)
        if (props.tenzies) { 
            if (localStorage.getItem("bestScore")) {
                if (localStorage.getItem("bestScore") > seconds) {
                    localStorage.setItem("bestScore", seconds)
                }
            }
            else { 
                localStorage.setItem("bestScore", seconds)
            }
            
            clearTimeout(timer)
        }
    }, [seconds])
    return (
        <div>
            {/* { getRealTime() } */}
            <span>This Round: {seconds} s </span>
            <span>Best Score: { localStorage.getItem("bestScore")?localStorage.getItem("bestScore"):0 } s</span>
        </div>
    )
}