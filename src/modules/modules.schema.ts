import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ autoIndex: true, timestamps: true, collection: 'modules' })
export class Module extends Document {
  @Prop({ required: false })
  id: string;

  @Prop({ required: false })
  title: string;

  @Prop({ required: false })
  slug: string;

  @Prop({ required: false })
  createdBy: string;

  @Prop({ required: false })
  createdAt: string;

  @Prop({ required: false })
  description: string;
}

export const ModulesSchema = SchemaFactory.createForClass(Module);
