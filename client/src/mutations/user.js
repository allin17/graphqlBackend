import {gql} from 'graphql-tag'

export const CREATE_USER = gql`
mutation createUser($input: UserInput) {
    createUser(input: $input) {
        id, username, age
    }
}
`