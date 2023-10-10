import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ChaptersModule } from './chapters/chapters.module';

@Module({
  imports: [ChaptersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
