import Image from 'next/image'
// import aa from '@/public/images/group.png'
// import Rectangle from "@/public/images/rectangle-1.png"
import styles from "@/styles/ItsLoad.module.css"
import Link from 'next/link'
import { useState } from 'react'
export default function ItsLoad() {

    const [email, setEmail] = useState("");
    const [password, setPasswrod] = useState("");
    const [emailMsg, setEmailMsg] = useState("")
    const [passwordMsg, setPasswordMsg] = useState("");
    const [passwordChk, setPasswordChk] = useState(false);
    
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*?_]).{8,16}$/;

    function onChangeEmail(e) {
        setEmail(e.target.value)
    }

    function onChangePassword(e) {
        setPasswrod(e.target.value)
    }

    function onClickLoginBtn() {
        if(email.includes("@") === false) {
            setEmailMsg("이메일 주소를 다시 확인해주세요.")
        } else {
            setEmailMsg("")
        }
        console.log("password", passwordRegex.test(password))
        if(passwordRegex.test(password) === passwordChk) {
            setPasswordMsg("8~16자의 영문, 숫자, 특수 문자만 사용 가능합니다.")
        } else {
            setPasswordMsg("")
        }
    }

    return(
        <div className={styles.background} >
            <div className={styles.contentBox}>
                <div className={styles.logoBox}>
                    <div className={styles.logo_01}>
                        {/* <Image src={aa}/> */}
                        <img src='/group.png'/>
                    </div> 
                    <div className={styles.logo_02}>
                        {/* <Image src={Rectangle}/> */}
                        <img src='/rectangle-1.png' alt='이미지'/>
                    </div>
                </div>
                <div className={styles.name}>
                    <h1>잇츠로드</h1>
                </div>
                <div className={styles.loginBox}>
                    <div className={styles.email}>
                        <input className={styles.input} type="text" placeholder="이메일" value={email} onChange={onChangeEmail}/>
                    </div>
                    <div className={styles.text}>{emailMsg}</div>
                    <div className={styles.password}>
                        <input className={styles.input} type="password" placeholder="비밀번호" value={password} onChange={onChangePassword}/>
                    </div>
                    <div className={styles.text}>{passwordMsg}</div>
                </div>
                <div className={styles.btn}>
                    <button onClick={onClickLoginBtn}>로그인</button>
                </div>
                <div className={styles.find}>
                    {/* 이메일찾기 | 비밀번호찾기 | 회원가입 */}
                    <ul className={styles.ul}>
                        <li><Link href="./">이메일찾기</Link></li>
                        <li><Link href="./">비밀번호찾기</Link></li>
                        <li><Link href="./">회원가입</Link></li>
                    </ul>
                </div>
                <div className={styles.kakakoLogin}>
                    <button>카카오톡 로그인</button>
                </div>
            </div>
        </div>
    )
}