export default function ProductDetailUI({data, onClickMove}) {
    return(
        // <div>
        //     {/* 조건부 렌더링의 && 연산자 */}
        //     <div>판매자: {data && data.fetchProduct.seller}</div>
        //     <div>상품명: {data && data.fetchProduct.name}</div> 
        //     <div>상품내용: {data && data.fetchProduct.detail}</div> 
        //     <div>상품가격: {data && data.fetchProduct.price}</div> 
        //     {/* 옵셔널 체이닝 */}
        //     <div>판매자: {data?.fetchProduct.seller}</div>
        //     <div>상품명: {data?.fetchProduct.name}</div> 
        //     <div>상품내용: {data?.fetchProduct.detail}</div> 
        //     <div>상품가격: {data?.fetchProduct.price}</div>
        //     {/* 삼항 연산자 */}
        //     <div>판매자: {data ? data.fetchProduct.seller : "loading..."}</div>
        //     <div>상품명: {data ? data.fetchProduct.name : "loading..."}</div> 
        //     <div>상품내용: {data ? data.fetchProduct.detail : "loading..."}</div> 
        //     <div>상품가격: {data ? data.fetchProduct.price : "loading..."}</div>
        // </div>
        <div>
            챔터8상세보기<br/>
            <div>판매자: {data?.fetchProduct.seller}</div>
            <div>제품이름: {data?.fetchProduct.name}</div>
            <div>상세설명: {data?.fetchProduct.detail}</div>
            <div>가격: {data?.fetchProduct.price}</div>
            <button onClick={onClickMove}>수정하러가기</button>
        </div>
    )
}