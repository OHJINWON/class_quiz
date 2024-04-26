const classmates = [
    { name: "철수", age: 10, school: "토끼초등학교" },
    { name: "영희", age: 13, school: "다람쥐초등학교" },
    { name: "훈이", age: 11, school: "토끼초등학교" },
]

export default function BonusPage() {

    const check = (classmates) => {
        if(classmates.school === "다람쥐초등학교") {
            return classmates.name + "어린이"
        } else {
            return classmates.concat(candy)
        }
    }

    console.log(check)
    console.log("classmates: ",classmates)
    return(
        <div>
            {
                classmates.map(classmates => (
                    <div>
                        <span>이름: {classmates.school === "다람쥐초등학교" ? classmates.name + "어린이" : classmates.name}</span>
                        <span>학교: {classmates.school}</span>
                        <span>{classmates.school === "토끼초등학교" ? "candy: 10" : ""}</span>
                    </div>
                ))
            }
        </div>
    )
}