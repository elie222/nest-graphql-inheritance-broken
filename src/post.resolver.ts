import { Query, Resolver } from '@nestjs/graphql';
import { AppService } from './app.service';
import { Post } from './post.entity';

@Resolver(() => Post)
export class PostResolver {
  constructor(private readonly appService: AppService) {}

  @Query(() => Post)
  async post() {
    return this.appService.getPost();
  }
}
