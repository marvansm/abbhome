import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { HeroSlidesModule } from './modules/hero-slides.module';
import { MortgageProductModule } from './modules/mortgage-products.module';
import { CategoriesModule } from './modules/categories.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://marvansm:mervan123@ac-tq2bzqm-shard-00-00.wwk0sz5.mongodb.net:27017,ac-tq2bzqm-shard-00-01.wwk0sz5.mongodb.net:27017,ac-tq2bzqm-shard-00-02.wwk0sz5.mongodb.net:27017/?replicaSet=atlas-kyzaxi-shard-0&ssl=true&authSource=admin'),
    HeroSlidesModule,
    MortgageProductModule,
    CategoriesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
