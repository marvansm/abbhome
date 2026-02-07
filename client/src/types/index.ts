export interface HeroSlide {
  _id: string;
  title: string;
  description: string;
  image: string;
  bgColor?: string;
  maxAmount?: number;
  minInterestRate?: number;
  maxTerm?: number;
  minDownPayment?: number;
}

export interface MortgageProduct {
  _id: string;
  title: string;
  description: string;
  image: string;
  maxAmount: number;
  minInterestRate: number;
  maxTerm: number;
  minDownPayment: number;
  bgColor?: string;
}

export interface Category {
  _id: string;
  name: string;
}
