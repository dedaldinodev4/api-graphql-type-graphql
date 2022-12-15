import { Field, ObjectType } from "type-graphql";
import { v4 as uuid } from "uuid";

@ObjectType()
export class TypeHero {
  @Field()
  id: string

  @Field()
  name: string 
  
  constructor () {
    if (!this.id) {
      this.id = uuid()
    }
  }
}
