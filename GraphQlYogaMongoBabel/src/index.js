import { GraphQLServer }  from 'graphql-yoga'
import { typeDefs } from "./typeDef";
import { resolvers } from "./resolvers";


const server = new GraphQLServer({
    typeDefs,
    resolvers
})

server.start(()=>{
    console.log("Server is running!")
}); //localhost:4000