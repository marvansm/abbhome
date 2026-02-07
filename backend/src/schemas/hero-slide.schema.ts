import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type HeroSlideDocument = HeroSlide & Document;

@Schema()
export class HeroSlide {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  image: string;

  @Prop()
  bgColor: string;

  @Prop()
  maxAmount: number;

  @Prop()
  minInterestRate: number;

  @Prop()
  maxTerm: number;

  @Prop()
  minDownPayment: number;
}

export const HeroSlideSchema = SchemaFactory.createForClass(HeroSlide);
