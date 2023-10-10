import { Module } from '@nestjs/common';
import { ChaptersService } from './chapters.service';
import { ChaptersController } from './chapters.controller';
import { ChaptersRepository } from './chapters.repository';

@Module({
  controllers: [ChaptersController],
  providers: [ChaptersRepository, ChaptersService],
})
export class ChaptersModule {}
