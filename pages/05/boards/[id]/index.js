import { useQuery, gql } from "@apollo/client"
import { useRouter } from "next/router"

const FETCH_PRODUCT = gql`
    query fetchProduct($productId : ID){
        fetchProduct(productId: $productId){
            seller
            name
            detail
            price
        }
    }
`

export default function Number() {

    const router = useRouter()
    
    const { data }  = useQuery(FETCH_PRODUCT, {
        variables: {
            productId : router.query.id
        }
    })
    
    console.log("data",data)

    console.log("router", router.query.id)
    return(
        <div>
            {/* 조건부 렌더링의 && 연산자 */}
            <div>판매자: {data && data.fetchProduct.seller}</div>
            <div>상품명: {data && data.fetchProduct.name}</div> 
            <div>상품내용: {data && data.fetchProduct.detail}</div> 
            <div>상품가격: {data && data.fetchProduct.price}</div> 
            {/* 옵셔널 체이닝 */}
            <div>판매자: {data?.fetchProduct.seller}</div>
            <div>상품명: {data?.fetchProduct.name}</div> 
            <div>상품내용: {data?.fetchProduct.detail}</div> 
            <div>상품가격: {data?.fetchProduct.price}</div>
            {/* 삼항 연산자 */}
            <div>판매자: {data ? data.fetchProduct.seller : "loading..."}</div>
            <div>상품명: {data ? data.fetchProduct.name : "loading..."}</div> 
            <div>상품내용: {data ? data.fetchProduct.detail : "loading..."}</div> 
            <div>상품가격: {data ? data.fetchProduct.price : "loading..."}</div>
        </div>
    )
}