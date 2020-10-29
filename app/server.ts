import {ApolloServer, gql, makeExecutableSchema} from 'apollo-server-express'
import express from 'express'
import {buildSchema} from 'type-graphql'

// resolvers

const PORT = process.env.PORT || 5000;

const main = async () => {
    const schema = await buildSchema({
        resolvers: [''],
        emitSchemaFile: true,
        validate: false
    })

    const server = new ApolloServer({schema})
    const app = express()
    server.applyMiddleware({app})

    app.listen(PORT, () => {
        console.log(`Apollo Server on http://loclhost:${PORT}/graphql`)
    })
}

main().catch((error) => {
    console.log(error, 'error')
})