import { useState } from "react"

export default function CountPage() {
    
    // 1-1) let과 document.getElementById()를 사용해 주세요.
    // let defultNumber = 0

    // function onClickCount() {
    //     const result = Number(document.getElementById("number").innerText)
    //     document.getElementById("number").innerHTML = result + 1
    // }

    // 1-2) state를 사용해 주세요.
    const [defultNumber, setDefultNumber] = useState(0)
    function onClickCount() {
        setDefultNumber(defultNumber + 1)
    }

    return(
        <div>
            <div id="number">{defultNumber}</div>
            <button onClick={onClickCount}>증가</button>
        </div>
    )
}