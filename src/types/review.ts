
export interface Review {
  author: string;
  rating: number;
  title: string;
  content: string;
  date: string;
  verifiedPurchase: boolean;
  playingLevel?: "Beginner" | "Intermediate" | "Advanced";
}
