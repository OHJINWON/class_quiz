
export default function ProductWriteUI({isEdit, onClickSubmit, onClickUpdate, onChangeSeller, onChangeName, onChangeDetail, onChangePrice, data}) {
    return (

        //판매자, 제품이름, 상세설명, 가격
        <div>
            챔터8<br/>
            판매자: <input type="text" onChange={onChangeSeller} defaultValue={data?.fetchProduct.seller}/><br/>
            제품이름: <input type="text" onChange={onChangeName} defaultValue={data?.fetchProduct.name}/><br/>
            상세설명: <input type="text" onChange={onChangeDetail} defaultValue={data?.fetchProduct.detail}/><br/>
            가격: <input type="text" onChange={onChangePrice} defaultValue={data?.fetchProduct.price}/><br/>
            <button onClick={isEdit ? onClickUpdate : onClickSubmit}>{isEdit ? "수정" : "등록"}하기</button>
       </div>
    )
}