import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ModulesService } from './modules.service';
import { CreateModuleDto } from './dto/create-module.dto';

import { UpdateModuleDto } from './dto/update-module.dto';
import { logger } from '../lib/logger/logger';

@Controller('modules')
export class ModulesController {
  constructor(private readonly moduleService: ModulesService) {}

  @Post()
  async create(@Body() createModuleDto: CreateModuleDto) {
    logger.log('modules controller - create', { createModuleDto });

    const created = await this.moduleService.create(createModuleDto);
    return { id: created.id };
  }

  @Get()
  async findAll() {
    logger.log('modules controller - findAll');
    const modules = await this.moduleService.findAll();
    logger.log('modules controller - found all modules', {
      length: modules.length,
    });
    return { modules };
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.moduleService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateModuleDto: UpdateModuleDto) {
    return this.moduleService.update(+id, updateModuleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.moduleService.remove(+id);
  }
}
