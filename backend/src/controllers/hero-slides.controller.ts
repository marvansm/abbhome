import { Controller, Get, Post, Body } from '@nestjs/common';
import { HeroSlidesService } from '../services/hero-slides.service';
import { HeroSlide } from '../schemas/hero-slide.schema';

@Controller('hero-slides')
export class HeroSlidesController {
  constructor(private readonly heroSlidesService: HeroSlidesService) {}

  @Get()
  async findAll(): Promise<HeroSlide[]> {
    return this.heroSlidesService.findAll();
  }

  @Post()
  async create(@Body() heroSlide: HeroSlide): Promise<HeroSlide> {
    return this.heroSlidesService.create(heroSlide);
  }
  

}
