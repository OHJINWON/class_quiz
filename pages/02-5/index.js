import Image from 'next/image'
// import aa from '@/public/images/group.png'
// import Rectangle from "@/public/images/rectangle-1.png"
import styles from "@/styles/ItsLoad.module.css"
import Link from 'next/link'
export default function ItsLoad() {

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
                        <input className={styles.input} type="text" placeholder="이메일"/>
                    </div>
                    <div className={styles.text}>이메일주소확인</div>
                    <div className={styles.password}>
                        <input className={styles.input} type="password" placeholder="비밀번호"/>
                    </div>
                    <div className={styles.text}>비밀번호 확인</div>
                </div>
                <div className={styles.btn}>
                    <button>로그인</button>
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