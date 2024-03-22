import { useState } from "react"
import style from "@/styles/Index.module.css"

export default function StatePage() {
    
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [chkPassword, setChkPassword] = useState("")
    const [emailError, setEmailError] = useState("")
    const [passwordError, setPasswordError] = useState("")
    function onChangeEmail(e) {
        setEmail(e.target.value)
    }

    function onChangePassword(e) {
        setPassword(e.target.value)
    }

    function onChangeChkPassword(e) {
        setChkPassword(e.target.value)
    }

    function onClickBtn() {
    
        if(email.includes("@") === false) {
            setEmailError("올바른 형식이 아닙니다.")
        } else {
            setEmailError("")
        }
        if(password !== chkPassword) {
            console.log(password)
            console.log(chkPassword)
            setPasswordError("비밀번호가 서로 다릅니다,")
        } else {
            setPasswordError("")
        }

    }

    return(
        <div>
            <div>
                이메일<input type="text" onChange={onChangeEmail} value={email}/>
                <div className={style.errorMsg}>{emailError}</div>
                비밀번호<input type="password" onChange={onChangePassword} value={password}/>
                비밀번호 확인<input type="password" onChange={onChangeChkPassword} value={chkPassword}/>
               <div className={style.errorMsg}>{passwordError}</div>
               <button onClick={onClickBtn}>가입하기</button>
            </div>
        </div>
    )
}