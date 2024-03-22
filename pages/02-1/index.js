import { useState } from "react"

export default function Hello () {
    // 1-1) let과 document.getElementById()를 사용해 주세요.
    // let text = "반갑습니다."

    // function onClickHello() {
    //     document.getElementById("hello").innerText = text
    // }

    // 1-2) state를 사용해 주세요.
    const [text, setText] = useState("안녕하세요")
    function onClickHello() {
        setText("반갑습니다")
    }


    return (
        <div>
            {/* <button onClick={onClickHello} id="hello">안녕하세요</button> */}
            <button onClick={onClickHello} id="hello">{text}</button>
        </div>
    )
}