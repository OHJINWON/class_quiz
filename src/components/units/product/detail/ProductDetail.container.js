import { useRouter } from "next/router"
import { useQuery } from "@apollo/client"
import ProductWriteUI from "../writer/ProductWrite.presenter"
import { FETCH_PRODUCT } from './ProductDetail.queries'
import ProductDetailUI from "./ProductDetail.presenter"

export default function PrdouctDetail() {
    const router = useRouter()
    
    const { data }  = useQuery(FETCH_PRODUCT, {
        variables: {
            productId : router.query.id
        }
    })
    
    console.log("data",data)

    console.log("router", router.query.id)
    return(
        <ProductDetailUI data={data}/>
    )
}