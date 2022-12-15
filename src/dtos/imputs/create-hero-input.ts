import { Field, InputType } from "type-graphql";

@InputType()
export class CreateHeroInput {
  @Field()
  name: string

  @Field()
  age: number
  
  @Field()
  nickname: string
  
  @Field()
  power: string

  @Field()
  typeHeroId: string
}