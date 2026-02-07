import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { HeroSlide, HeroSlideSchema } from '../schemas/hero-slide.schema';
import { HeroSlidesController } from '../controllers/hero-slides.controller';
import { HeroSlidesService } from '../services/hero-slides.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: HeroSlide.name, schema: HeroSlideSchema },
    ]),
  ],
  controllers: [HeroSlidesController],
  providers: [HeroSlidesService],
})
export class HeroSlidesModule {}
