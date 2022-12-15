import { Field, ObjectType } from 'type-graphql'
import { v4 as uuid } from 'uuid'

@ObjectType()
export class Hero {
  @Field()
  id: string

  @Field()
  name: string

  @Field()
  nickname: string
  
  @Field()
  power: string

  @Field()
  age: number

  constructor() {
    if (!this.id) {
      this.id = uuid()
    }
  }
}