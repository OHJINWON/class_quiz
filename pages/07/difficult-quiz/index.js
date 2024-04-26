// 아래의 UI를 만들고(UI는 모두 하드코딩 합니다), 체크박스 클릭 알고리즘을 완성하세요.
// 1-1) 최상단 체크박스를 선택하면, 모든 체크박스가 선택되어야 합니다.
// 1-2) 최상단 체크박스를 선택 해제하면, 모든 체크박스도 선택 해제되어야 합니다.
// 1-3) 최상단 체크박스가 선택 해제 되어있더라도, 나머지 체크박스를 모두 선택하면 최상단 체크박스가 선택되어야 합니다.
// 1-4) 최상단 체크박스가 선택되어있더라도, 나머지 체크박스 중 하나라도 선택 해제하면, 최상단 체크박스도 선택 해제되어야 합니다.
import { useState } from 'react';
import { Container, MyTd,MyTr, Table } from './index.styles'
import { ClassNames } from '@emotion/react';

const dataList = [
    { id: 1, data: "9월달 시스템 점검 안내입니다.", date: "2020.09.19" },
    { id: 2, data: "안녕하세요! 공지사항 전달드립니다.", date: "2020.09.17" },
    { id: 3, data: "개인정보 처리방침 변경 사전 안내", date: "2020.09.12" },
    { id: 4, data: "ios 10.0이하 지원 중단 안내", date: "2020.08.10" },
    { id: 5, data: "이용약관 변경 사전 안내", date: "2020.08.01" },
    { id: 6, data: "개인정보 처리방침 변경 사전 안내", date: "2020.07.19" },
];

export default function DifficultPage() {

    const [checkedList, setCheckedList] = useState([])
    const [ischecked, setIsChecked] = useState(false)


    const onChangeChceckBtn = (e) => {
        // 전체체크 박스가 true면 체크 faslse면 노체크
        const isChecked = e.target.checked
        // true면 하단체크 박스 모두 true로 변경
        setIsChecked(isChecked)
        setCheckedList(
            isChecked ? dataList.map((item) => item.id) : []
        )
    }

    const onChangeInput = (e, id) => {
        
        const isChecked = e.target.checked
        let updatedCheckedList = [...checkedList]
       
        if(isChecked) {
            updatedCheckedList.push(id)
        } else {
            updatedCheckedList = updatedCheckedList.filter(
                (item) => item !== id
            )
        }
        setCheckedList(updatedCheckedList)
        setIsChecked(updatedCheckedList.length === dataList.length)
    }
    
    const onClickBtn = () => {
        const removeData = dataList.filter( (item) => 
            !checkedList.includes(item.id)
        )
        
    }
    // console.log(checkedList)
    // console.log(checkedList)
    return(
        <Container>
            <Table>
                <tr>
                    <th>
                        <input checked={ischecked} onChange={onChangeChceckBtn} type="checkbox" style={{marginTop:"5px"}}></input>
                    </th>
                    <th>번호</th>
                    <th>제목</th>
                    <th>작성일</th>
                </tr>
                {
                    dataList.map(dataList => (
                        <MyTr key={dataList.id}>
                            <MyTd>
                                <input  id={dataList.id} type='checkbox'
                                    onChange={(e) => onChangeInput(e, dataList.id)}
                                    checked={checkedList.includes(dataList.id)}
                                    />
                            </MyTd>
                            <MyTd>{dataList.id}</MyTd>
                            <MyTd>{dataList.data}</MyTd>
                            <MyTd>{dataList.date}</MyTd>
                        </MyTr>
                    ))
                }
            </Table>
            <div>
                <button onClick={onClickBtn}>선택 삭제</button>
            </div>
        </Container>
    )
}