import { Injectable } from '@nestjs/common';
import { CreateChapterDto } from './dto/create-chapter.dto';
import { UpdateChapterDto } from './dto/update-chapter.dto';
import { ChaptersRepository } from './chapters.repository';

@Injectable()
export class ChaptersService {
  constructor(private readonly chaptersRepository: ChaptersRepository) {}
  create(createChapterDto: CreateChapterDto) {
    console.log(createChapterDto);
    return '';
  }

  findAll() {
    return this.chaptersRepository.getAllChapters();
  }

  findOne(id: number) {
    return `This action returns a #${id} chapter`;
  }

  update(id: number, updateChapterDto: UpdateChapterDto) {
    console.log(updateChapterDto);
    return `This action updates a #${id} chapter`;
  }

  remove(id: number) {
    return `This action removes a #${id} chapter`;
  }
}
