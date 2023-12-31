import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { CreateModuleDto } from './dto/create-module.dto';
import { UpdateModuleDto } from './dto/update-module.dto';
import { Module as ModuleModel } from './modules.schema';
import { InjectModel } from '@nestjs/mongoose';
import { v4 } from 'uuid';

@Injectable()
export class ModulesService {
  constructor(
    @InjectModel(ModuleModel.name) private moduleModel: Model<ModuleModel>,
  ) {}

  create(createModuleDto: CreateModuleDto) {
    const createdModule = new this.moduleModel({ id: v4(), createModuleDto });
    return createdModule.save();
  }

  findAll() {
    return this.moduleModel.find({}, { _id: 0, __v: 0 }).exec();
  }

  findOne(id: number) {
    return `This action returns a #${id} module`;
  }

  update(id: number, updateModuleDto: UpdateModuleDto) {
    return `This action updates a #${id} module, ${updateModuleDto}`;
  }

  remove(id: number) {
    return `This action removes a #${id} module`;
  }
}
