
export interface CustomerReview {
  author: string;
  rating: number;
  title: string;
  content: string;
  date: string;
  verifiedPurchase: boolean;
  playingLevel?: "Beginner" | "Intermediate" | "Advanced";
}

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
  customerReviews: CustomerReview[];
}
