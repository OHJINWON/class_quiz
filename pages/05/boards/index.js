import { useMutation, gql } from "@apollo/client"
import { useRouter } from "next/router"
import { useState } from "react"

const CREATE_PRODUCT = gql`
    mutation createProduct($seller: String, $createProductInput: CreateProductInput!){
        createProduct(seller: $seller, createProductInput: $createProductInput) {
            number
            message
            _id
        }
    }
`

export default function BoardsPage() {

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
            router.push(`/05/boards/${result.data.createProduct._id}`)
        } catch (error) {
            alert("틀림")
        }
    }
    
    

    return(
        // 판매자, 상품명, 상품내용, 상품가격
        <div>
           판매자: <input type="text" onChange={onChangeSeller}/>
           상품명: <input type="text" onChange={onChangeName}/>
           상품내용: <input type="text" onChange={onChangeDetail}/>
           상품가격: <input type="text" onChange={onChangePrice}/>
           <button onClick={onClickSubmit}>상품 등록</button>
        </div>
    )
}