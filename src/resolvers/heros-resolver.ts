
import { Resolver, Query } from 'type-graphql'

@Resolver()
export class HeroesResolver {

    @Query(() => [])
    async heroes() {
        return []
    }
}