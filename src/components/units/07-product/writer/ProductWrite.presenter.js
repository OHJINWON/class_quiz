import { Button } from './ProductWrite.style'

export default function ProductWriteUI({isActive, seller, name, detail, price, submit}) {
    return (
        // 판매자, 상품명, 상품내용, 상품가격
        <div>
           판매자: <input type="text" onChange={seller}/>
           상품명: <input type="text" onChange={name}/>
           상품내용: <input type="text" onChange={detail}/>
           상품가격: <input type="text" onChange={price}/>
           {/* <button onClick={submit}>상품 등록</button> */}
           <Button isActive={isActive} onClick={submit}>상품 등록</Button>
        </div>
    )
}