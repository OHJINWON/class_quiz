import { useState } from "react"

export default function StatePage() {
    // 1-1) let과 document.getElementById()를 사용해 주세요.

    // function onClickChangeCode() {
    //     let changeCode =  Number(document.getElementById("code").innerText)
    //     let defultCode = Math.floor(Math.random() * 899999) + 100000
    //     alert(defultCode)
    //     document.getElementById.innerText = defultCode
    // }

    // 1-2) state를 사용해 주세요.
    const [number, setNumber] = useState("000000")
    
    function onClickChangeCode() {
        Math.floor()
    }

    return (
        <div>
            <div id="code">000000</div>
            <button onClick={onClickChangeCode}>인증번호전송</button>
        </div>
    )
}