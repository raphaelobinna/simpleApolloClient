import { gql } from '@apollo/client'

export const CREATE_USER_MUTATION = gql `
    mutation signUp(
        $firstName: String!
        $lastName: String!
        $email: String!
        $phone_number: String!
        $country: String!
        $Address: String!
        $password: String!
    ){   
        signUp(createSignUpInput: {
        firstName:$firstName
        lastName: $lastName,
        Address: $Address,
        email: $email,
        phone_number: $phone_number,
        country: $country,
        password: $password
      }){
        accessToken
      }
    }
`