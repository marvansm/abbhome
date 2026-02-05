import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Category, CategoryDocument } from 'src/schemas/category.schema';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectModel(Category.name) private model: Model<CategoryDocument>,
  ) {}
  findAll() {
    return this.model.find();
  }
  create(name: string) {
    return this.model.create({ name });
  }
}
