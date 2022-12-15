import { Resolver, Query, Mutation, Arg, FieldResolver, Root } from 'type-graphql'
import { CreateHeroInput } from '../dtos/imputs/create-hero-input'
import { Hero } from '../dtos/models/hero-model'
import { TypeHero } from '../dtos/models/typeHero-model'
import { datas } from '../data'


@Resolver(() => Hero)
export class HeroesResolver {

    @Query(() => [Hero])
    async heroes() {
        return datas
    }

    @Mutation(() => Hero)
    async createHero(@Arg('data') data: CreateHeroInput) {
        const hero = {
            name: data.name,
            age: data.age,
            power: data.power,
            nickname: data.nickname,
            typeHeroId: data.typeHeroId
        }

        datas.push(hero)
        return hero;
    }

    @FieldResolver(() => TypeHero)
    async typeHero(@Root() hero: Hero) {
        console.log(hero)
        return {
            name: 'Super-hero'
        }
    }
}