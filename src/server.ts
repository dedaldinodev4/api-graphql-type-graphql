import 'reflect-metadata'
import path  from 'node:path'

import { ApolloServer } from 'apollo-server'
import { buildSchema } from 'type-graphql'
import { HeroesResolver } from './resolvers/heroes-resolver'
import { TypeHeroResolver } from './resolvers/types-heroes-resolver'


const bootstrap = async () => {

    const schema = await buildSchema({
        resolvers: [
            HeroesResolver,
            TypeHeroResolver
        ],
        emitSchemaFile: path.resolve(__dirname, 'schema.gql'),
    })

    const server = new ApolloServer({
        schema
    })

    const { url } = await server.listen();

    console.log(`HTTP server running on ${url}`);
}

bootstrap();



