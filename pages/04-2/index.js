import { gql, useMutation } from "@apollo/client"
import { useState } from "react"


const CREATE_BOARD = gql`
    mutation createBoard($writer: String, $title: String, $contents: String){
        createBoard(writer: $writer, title: $title, contents: $contents)
        {
            _id
            number
            message
        }
    }
`
    const CREATE_PRODUCT = gql`
        mutation creatrProduct($seller: String, $createProductInput: CreateProductInput!) {
            createProduct(
                seller: $seller,
                createProductInput: $createProductInput
            ){
                _id
                number
                message
            }
        }
    `
export default function GraphqlMutationPage() {

    // const [writer, setWriter] = useState("")
    // const [title, setTitle] = useState("")
    // const [contents, setContents] = useState("")
    
    // const [createBoard] = useMutation(CREATE_BOARD)

    // const onChangeWriter = (e) => {
    //     setWriter(e.target.value)
    // }

    // const onChangeTitle = (e) => {
    //     setTitle(e.target.value)
    // }

    // const onChangeContents = (e) => {
    //     setContents(e.target.value)
    // }

    // const onClickSubmit = async () => {
    //     const result = await createBoard({
    //         variables: {
    //             createBoardInput:{
    //                 writer: writer,
    //                 title: title,
    //                 contents: contents
    //             }
    //         }
    //     })
    //     console.log(result)
    // }

    const [seller, setSeller] = useState("")
    const [name, setName] =useState("")
    const [detail, setDetail] = useState("")
    const [price, setPrice] = useState();

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

    const [createProduct] = useMutation(CREATE_PRODUCT)

    const onClickSubmit = async () => {
        const result = await createProduct({
            variables:{
                seller: seller,
                createProductInput: {
                    name: name,
                    detail: detail,
                    price: Number(price)
                }
            }
        })
        console.log(result)
    }

    return(
        <div>
            {/* 작성자: <input type="text" onChange={onChangeWriter}/>
            제목: <input type="text" onChange={onChangeTitle}/>
            내용: <input type="text" onChange={onChangeContents}/>
            <button onClick={onClickSubmit}>GRAPHQL-API 요청하기</button> */}
            <div>
                판매자: <input type="text" onChange={onChangeSeller}/>
                판매이름: <input type="text" onChange={onChangeName}/>
                디테일: <input type="text" onChange={onChangeDetail}/>
                가격: <input type="text" onChange={onChangePrice}/>
                <button onClick={onClickSubmit}>GRAPHQL-API 요청하기</button>
            </div>
        </div>
    )
}