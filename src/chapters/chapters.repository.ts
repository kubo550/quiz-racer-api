import { ConfigurationMongoConnectionProvider } from '../lib/infrastructure/ConfigurationMongoConnectionProvider';
import mongoose, { Schema } from 'mongoose';

const ChapterSchema = new Schema({
  title: { type: String, required: true },
  content: String,
  //  TODO: add more fields
});

const ChapterModel = mongoose.model('Chapter', ChapterSchema);

export class ChaptersRepository {
  public async getAllChapters() {
    await ConfigurationMongoConnectionProvider.get();
    return ChapterModel.find().select({ _id: 0 }).exec();
  }
}
