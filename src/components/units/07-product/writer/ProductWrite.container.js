import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { useMutation } from "@apollo/client"
import ProductWriteUI from "./ProductWrite.presenter"
import { CREATE_PRODUCT } from './ProductWrite.queries'

export default function ProductWrite() {

    // useEffect(() => {
        // if(seller && name && detail && price) {
        //     setIsActive(true)
        // } else {
        //     setIsActive(false)
        // }
    // })

    const [isActive, setIsActive] = useState(false)
    const [seller, setSeller] = useState("")
    const [name, setName] = useState("")
    const [detail, setDetail] = useState("")
    const [price, setPrice] = useState()

    const router = useRouter()

    const [createProduct] = useMutation(CREATE_PRODUCT)

    const onChangeSeller = (e) => {
        setSeller(e.target.value)
        if(e.target.value && name && detail && price) {
            setIsActive(true)
        } else {
            setIsActive(false)
        }
    }

    const onChangeName = (e) => {
        setName(e.target.value)
        if(seller && e.target.value && detail && price) {
            setIsActive(true)
        } else {
            setIsActive(false)
        }
    }

    const onChangeDetail = (e) => {
        setDetail(e.target.value)
        if(seller && name && e.target.value && price) {
            setIsActive(true)
        } else {
            setIsActive(false)
        }
    }

    const onChangePrice = (e) => {
        setPrice(e.target.value)
        if(seller && name && detail && e.target.value) {
            setIsActive(true)
        } else {
            setIsActive(false)
        }
    }

    console.log(isActive)

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
        <ProductWriteUI isActive={isActive} seller={onChangeSeller} name={onChangeName} detail={onChangeDetail} price={onChangePrice} submit={onClickSubmit}/>
    )
}