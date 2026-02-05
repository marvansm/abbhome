import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MortgageProductSchema } from 'src/schemas/mortgage-product.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: MortgageProductModule.name, schema: MortgageProductSchema },
    ]),
  ],
  controllers: [],
  providers: [],
})
export class MortgageProductModule {}
