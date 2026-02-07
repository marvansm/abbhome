import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Category, CategoryDocument } from '../schemas/category.schema';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectModel(Category.name) private categoryModel: Model<CategoryDocument>,
  ) {}

  async findAll(): Promise<Category[]> {
    return this.categoryModel.find().exec();
  }

  async create(category: Category): Promise<Category> {
    const newCategory = new this.categoryModel(category);
    return newCategory.save();
  }

  async insertMany(categories: Category[]): Promise<Category[]> {
    return this.categoryModel.insertMany(categories);
  }
}
