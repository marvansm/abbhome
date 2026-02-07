import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type MortgageProductDocument = MortgageProduct & Document;

@Schema({ timestamps: true })
export class MortgageProduct {
  @Prop({ required: true })
  title: string;
  @Prop()
  description: string;
  @Prop()
  image: string;
  @Prop()
  maxAmount: number;
  @Prop()
  minInterestRate: number;
  @Prop()
  maxTerm: number;
  @Prop()
  minDownPayment: number;
  @Prop({ type: Types.ObjectId, ref: 'Category', required: false })
  category?: Types.ObjectId;
  @Prop()
  bgColor: string;
}

export const MortgageProductSchema =
  SchemaFactory.createForClass(MortgageProduct);
