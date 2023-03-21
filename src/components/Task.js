import React, { useState } from 'react'
import './Task.css'
export default function Task() {
    const [value, setValue] = useState(false)
    const [color, setColor] = useState({
        odd: "white",
        even: "white"
    })
    const arr = [[1, 2, 3, 4, 5, 6], [6, 5, 4, 3, 2, 1], [1, 2, 3, 4, 5, 6]] 

    const handleClick = (val) => {
        setValue(true)
        if (val % 2 == 0) {
            setColor({
                odd: "red",
                even: "white"
            })
        } else {
            setColor({
                odd: "white",
                even: "red"
            })
        }
    }
    const handleAlrt = (ele) => {
            alert(ele)
    }
    return (
        <div className="App" style={{width:"500px"}}>
            {
                arr.map((element, index) => (
                    <div id='span' key={index}>{element.map((ele) => (
                        <span id='span' onClick={() => !value ? handleClick(ele) : (color.even == "white" || color.odd == "white") && handleAlrt(ele)} style={{border: "2px solid black", backgroundColor: ele % 2 == 0 ? color.odd : color.even }}>{ele}
                        </span>
                    ))}</div>
                ))
            }
        </div>
    );
}
