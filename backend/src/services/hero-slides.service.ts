import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { HeroSlide, HeroSlideDocument } from '../schemas/hero-slide.schema';

@Injectable()
export class HeroSlidesService {
  constructor(
    @InjectModel(HeroSlide.name) private heroSlideModel: Model<HeroSlideDocument>,
  ) {}

  async findAll(): Promise<HeroSlide[]> {
    return this.heroSlideModel.find().exec();
  }

  async create(heroSlide: HeroSlide): Promise<HeroSlide> {
    const newSlide = new this.heroSlideModel(heroSlide);
    return newSlide.save();
  }
  
  async insertMany(slides: HeroSlide[]): Promise<HeroSlide[]> {
      return this.heroSlideModel.insertMany(slides);
  }
}
