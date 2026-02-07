import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { MortgageProduct, MortgageProductDocument } from '../schemas/mortgage-product.schema';

@Injectable()
export class MortgageProductService {
  constructor(
    @InjectModel(MortgageProduct.name) private mortgageProductModel: Model<MortgageProductDocument>,
  ) {}

  async findAll(categoryId?: string): Promise<MortgageProduct[]> {
    const filter = categoryId ? { category: categoryId } : {};
    return this.mortgageProductModel.find(filter).exec();
  }

  async create(product: MortgageProduct): Promise<MortgageProduct> {
    const newProduct = new this.mortgageProductModel(product);
    return newProduct.save();
  }

  async insertMany(products: MortgageProduct[]): Promise<MortgageProduct[]> {
    return this.mortgageProductModel.insertMany(products);
  }
}
