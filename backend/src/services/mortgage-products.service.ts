import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  MortgageProduct,
  MortgageProductDocument,
} from 'src/schemas/mortgage-product.schema';

@Injectable()
export class MortgageProductsService {
  constructor(
    @InjectModel(MortgageProduct.name)
    private model: Model<MortgageProductDocument>,
  ) {}
  findAll(categoryId: string) {
    if (categoryId) {
      return this.model.find({ category: categoryId }).populate('category');
    }
  }
  create(data: any) {
    return this.model.create(data);
  }
}
