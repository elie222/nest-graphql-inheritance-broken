import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
class Common {
  @Field(() => Int)
  version: number;
}

@ObjectType()
export class Post extends Common {
  @Field()
  content: string;
  startDate?: Date;
  endDate?: Date;
}
