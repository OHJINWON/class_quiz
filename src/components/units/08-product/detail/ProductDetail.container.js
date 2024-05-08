import { useRouter } from "next/router"
import { useQuery } from "@apollo/client"
import { FETCH_PRODUCT } from './ProductDetail.queries'
import ProductDetailUI from "./ProductDetail.presenter"

export default function PrdouctDetail() {
    const router = useRouter()
    
    const { data }  = useQuery(FETCH_PRODUCT, {
        variables: {
            productId : router.query.id
        }
    })
    
    // console.log(router)
    // console.log(router.query.id)

    const onClickMove = () => {
        router.push(`/08/product/${router.query.id}/edit`)
    }

    return(
        <ProductDetailUI data={data} onClickMove={onClickMove}/>
    )
}