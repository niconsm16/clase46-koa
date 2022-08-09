// import { buildSchema } from "graphql";
import { gql } from 'apollo-server-express';

export const productosGraphQlSchema = gql`

input ProductosInput {
    nombre: String,
    precio: Float,
    foto: String    
}

input ProductosModif {
    id: ID!
    nombre: String,
    precio: Float,
    foto: String    
}

type Productos {
    id: ID!
    nombre: String,
    precio: Float,
    foto: String
}

type Query {
    getAll: [Productos]
}

type Mutation {
    newItem(prod: ProductosInput): Boolean,
    updateItem( prod: ProductosModif): Boolean,
    delItem(id: ID!): Boolean,
}
`
