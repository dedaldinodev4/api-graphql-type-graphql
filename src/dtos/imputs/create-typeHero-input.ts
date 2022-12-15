import { Field, InputType } from "type-graphql";

@InputType()
export class CreateTypeHeroInput {
  @Field()
  name: 'classic' | 'super-hero' | 'Anti-hero' | 'Epic'
}
