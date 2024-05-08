import { useRouter } from "next/router"
import ProductWriteUI from "./ProductWrite.presenter"
import { CREATE_PRODUCT, UPDATE_PRODUCT, FETCH_PRODUCT} from "./ProductWrite.queries"
import { useState } from "react"
import { useMutation, useQuery } from "@apollo/client"

export default function ProductWrite({isEdit}) {
    //판매자, 제품이름, 상세설명, 가격
    const [seller, setSeller] = useState("")
    const [name, setName] = useState("")
    const [detail, setDetail] = useState("")
    const [price, setPrice] = useState()

    const router = useRouter()
    
    const [createProduct] = useMutation(CREATE_PRODUCT)
    
    const [updateProduct] = useMutation(UPDATE_PRODUCT)

    const { data } = useQuery(FETCH_PRODUCT, {
        variables : {
            productId: router.query.id
        }
    })

    const onChangeSeller = (e) => {
        setSeller(e.target.value)
    }
    const onChangeName = (e) => {
        setName(e.target.value)
    }
    const onChangeDetail = (e) => {
        setDetail(e.target.value)
    }
    const onChangePrice = (e) => {
        setPrice(e.target.value)
    }

    const onClickSubmit = async() => {
        try {
            const result = await createProduct({
                variables: {
                    seller: seller,
                    createProductInput: {
                        name: name,
                        detail: detail,
                        price: Number(price)
                    }
                }
            })
        router.push(`/08/product/${result.data?.createProduct._id}`)
        } catch (error) {
            console.log("error.message", error.message)
        }
    }
    
    console.log("name", name)
    console.log("detail", detail)
    console.log("price", price)

    const onClickUpdate = async() => {
        const updateProductInput = {}
        if(name) updateProductInput.name = name
        if(detail) updateProductInput.detail = detail
        if(price) updateProductInput.price = Number(price)
        try {
            const result = await updateProduct({
                variables: {
                    productId: router.query.id,
                    updateProductInput
                }
            })
            console.log("result",result)
            router.push(`../${router.query.id}`)
        } catch (error) {
            console.log(error.message)
        }
    }
  
    return(
        <ProductWriteUI 
            isEdit={isEdit}
            onClickSubmit={onClickSubmit}
            onClickUpdate={onClickUpdate}
            onChangeSeller={onChangeSeller}
            onChangeName={onChangeName}
            onChangeDetail={onChangeDetail}
            onChangePrice={onChangePrice}
            data={data}/>
    )
}