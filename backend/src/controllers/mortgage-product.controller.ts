import { Controller, Get, Post, Body, Query } from '@nestjs/common';
import { MortgageProductService } from '../services/mortgage-product.service';
import { MortgageProduct } from '../schemas/mortgage-product.schema';

@Controller('mortgage-products')
export class MortgageProductController {
  constructor(private readonly mortgageProductService: MortgageProductService) {}

  @Get()
  async findAll(@Query('category') categoryId?: string): Promise<MortgageProduct[]> {
    return this.mortgageProductService.findAll(categoryId);
  }

  @Post()
  async create(@Body() product: MortgageProduct): Promise<MortgageProduct> {
    return this.mortgageProductService.create(product);
  }


}
