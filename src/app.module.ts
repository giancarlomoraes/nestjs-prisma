import { Module } from '@nestjs/common';
import { PostModule } from './modules/post/post.module';
import { UserModule } from './modules/user/user.module';
import { PrismaService } from './database/PrismaService';
import { AuthModule } from './modules/auth/auth.module';

@Module({
  imports: [PostModule, UserModule, AuthModule],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
