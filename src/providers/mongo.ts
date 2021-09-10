import mongoose from 'mongoose';
import { mongoConnectionString } from '../includes/config';

export default class MongoProvider {
  static async connect(options?: mongoose.ConnectionOptions) {
    let mongoconnect = await mongoose.connect(mongoConnectionString, options);
    console.log('mongoconnected');
  }
}