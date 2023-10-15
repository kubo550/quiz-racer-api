import { IsEmpty, IsNotEmpty } from 'class-validator';

export class CreateModuleDto {
  constructor() {
    this.title = '';
    this.createdBy = '';
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }

  @IsNotEmpty()
  title: string;

  @IsEmpty()
  createdBy: string;

  createdAt: Date;

  updatedAt: Date;
}
