import { gql, useMutation, useQuery } from "@apollo/client"

const FETCH_PRODUCTS = gql`
    query {
        fetchProducts(page:1){
            _id
            seller
            name
            detail
            price
            createdAt   
        }
    }
`
const DELETE_PRODUCT = gql`
    mutation deleteProduct($productId: ID){
        deleteProduct(productId: $productId) {
            message
        }
    }
`

export default function ProductsPage() {

    const { data } = useQuery(FETCH_PRODUCTS, {
        variables: {
            page:1 
        }
    })

    const [deleteProduct] = useMutation(DELETE_PRODUCT)

    const onClickDelete = async (e) => {
        try {
            const result = await deleteProduct({
                variables:{
                    productId: e.target.id
                },
                refetchQueries: [{query: FETCH_PRODUCTS}]
            })
            console.log("result:", result)
        } catch (error) {
            
        }
    }

    return(
        <div>
            {
                data?.fetchProducts.map(products => (
                    
                    <div key={products._id}>
                        <input type="radio"/>
                        <span>판매자: {products.seller}</span>
                        <span>제품: {products.name}</span>
                        <span>상세내용: {products.detail}</span>
                        <span>가격: {products.price}</span>
                        <button onClick={onClickDelete} id={products._id}>삭제</button>
                    </div>
                ))
            }
        </div>
    )
}