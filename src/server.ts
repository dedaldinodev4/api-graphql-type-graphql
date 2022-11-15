import 'reflect-metadata'

import path  from 'node:path'
import { ApolloServer } from 'apollo-server'
import { buildSchema } from 'type-graphql'


const bootstrap = async () => {
    const server = new ApolloServer({

    })

    const { url } = await server.listen();

    console.log(`HTTP server running on ${url}`);
}


bootstrap();



