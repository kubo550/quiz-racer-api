import { Module } from '@nestjs/common';
import { ModulesService } from './modules.service';
import { ModulesController } from './modules.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ModulesSchema, Module as ModuleModel } from './modules.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: ModuleModel.name, schema: ModulesSchema },
    ]),
  ],
  controllers: [ModulesController],
  providers: [ModulesService],
})
export class ModulesModule {}
