import { useState } from "react"

// 1. 위 이미지 2개(노란색, 회색)를 다운로드 받고, img 태그를 활용하여 직접 1번의 별점선택 기능을 구현해 보세요.
// 2. 직접 만든 기능의 별점을 클릭하면, 해당 점수(예, 3점)를 경고메시지로 나타내 보세요.
// 3. 직접 만든 기능의 별점을 클릭하면, 별점 아랫부분에 해당 점수(예, 2점)을 나타내 보세요.

export default function App () {

    const rate = ["1", "2", "3", "4", "5"]
    const [selectedRate, setSelectedRate] = useState(0)

    const handleRateClick = (value) => {
        alert(value)
        setSelectedRate(value)
    }

    return (
        <div>
            {
                rate.map((el, index) => (
                    <img 
                        // src="/images/check.png"
                        src={el <= selectedRate ? "/images/checked.png" : "/images/check.png"}
                        alt="별점, "
                        key={index}
                        onClick={() => handleRateClick(el)}
                    />
                    
                ))
            }
            <div>
            {
                selectedRate ? <span>{`${selectedRate}점 입니다.`}</span> : ""
            }
            </div>
        </div>
    )
}