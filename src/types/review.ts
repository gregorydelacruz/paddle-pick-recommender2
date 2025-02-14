
export interface ProductReview {
  summary: string;
  detailedAnalysis: {
    section: string;
    content: string;
  }[];
  pros: string[];
  cons: string[];
  bestFor: string[];
  valueRating: number;
  performanceRating: number;
  controlRating: number;
  powerRating: number;
  date: string;
}

export interface Review {
  productReview: ProductReview;
}
