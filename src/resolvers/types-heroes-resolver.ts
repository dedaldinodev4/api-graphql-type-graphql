import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { CreateTypeHeroInput } from "../dtos/imputs/create-typeHero-input";
import { TypeHero } from "../dtos/models/typeHero-model";


@Resolver(() => TypeHero)
export class TypeHeroResolver {
  
  @Query(() => [TypeHero])
  async typesHeroes() {
    return []
  }

  @Mutation(() => TypeHero)
  async createTypeHero(@Arg('data') data: CreateTypeHeroInput) {
    const typeHero = {
      name: data.name
    }
    return typeHero
  }

}