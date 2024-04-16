import { useRouter } from "next/router"
import { useState } from "react"
import { useMutation } from "@apollo/client"
import ProductWriteUI from "./ProductWrite.presenter"
import { CREATE_PRODUCT } from './ProductWrite.queries'

export default function ProductWrite() {
    const [seller, setSeller] = useState("")
    const [name, setName] = useState("")
    const [detail, setDetail] = useState("")
    const [price, setPrice] = useState()

    const router = useRouter()

    const [createProduct] = useMutation(CREATE_PRODUCT)

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

    console.log(router)

    const onClickSubmit = async() => {
        try {
            const result = await createProduct({
                variables:{
                    seller: seller,
                    createProductInput: {
                        name:name,
                        detail: detail,
                        price:Number(price)
                    }              
                }
            })
            console.log(result)
            router.push(`/06/boards/${result.data.createProduct._id}`)
        } catch (error) {
            alert("틀림")
        }
    }
    
    return(
        <ProductWriteUI seller={onChangeSeller} name={onChangeName} detail={onChangeDetail} price={onChangePrice} submit={onClickSubmit}/>
    )
}