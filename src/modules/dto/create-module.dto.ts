export class CreateModuleDto {
  constructor() {
    this.name = '';
    this.description = '';
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }

  name: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
}
