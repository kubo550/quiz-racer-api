import { Test, TestingModule } from '@nestjs/testing';
import { ChaptersController } from './chapters.controller';
import { ChaptersService } from './chapters.service';

describe('ChaptersController', () => {
  let controller: ChaptersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ChaptersController],
      providers: [ChaptersService],
    }).compile();

    controller = module.get(ChaptersController) as ChaptersController;
    console.log(controller);
  });

  describe('findAll', () => {});
});
