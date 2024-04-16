import { gql } from "@apollo/client"

export const CREATE_PRODUCT = gql`
    mutation createProduct($seller: String, $createProductInput: CreateProductInput!){
        createProduct(seller: $seller, createProductInput: $createProductInput) {
            number
            message
            _id
        }
    }
`