import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MortgageProduct, MortgageProductSchema } from '../schemas/mortgage-product.schema';
import { MortgageProductController } from '../controllers/mortgage-product.controller';
import { MortgageProductService } from '../services/mortgage-product.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: MortgageProduct.name, schema: MortgageProductSchema },
    ]),
  ],
  controllers: [MortgageProductController],
  providers: [MortgageProductService],
})
export class MortgageProductModule {}
