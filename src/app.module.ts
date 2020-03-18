import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostResolver } from './post.resolver';
import { GraphQLModule } from '@nestjs/graphql';

@Module({
  imports: [
    GraphQLModule.forRoot({
      path: '/graphql',
      autoSchemaFile: 'schema.gql',
      playground: true,
      introspection: true,
      context: ({ req }) => ({ req }),
      formatError: error => {
        console.error('error', error);
        return error;
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService, PostResolver],
})
export class AppModule {}
