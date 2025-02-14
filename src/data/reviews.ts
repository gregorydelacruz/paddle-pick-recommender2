
import { Review } from "@/types/review";

type PaddleReviews = {
  [key: string]: Review[];
};

const reviews: PaddleReviews = {
  "dymon-mayhem": [
    {
      author: "Michael Chen",
      rating: 5,
      title: "Perfect Balance of Power and Control",
      content: "I've been playing with the Dymon Mayhem for three months now and I'm thoroughly impressed. The carbon fiber face gives exceptional power on drives while maintaining excellent touch for dinks. The elongated shape takes some getting used to but provides amazing reach at the kitchen line. One of the standout features is the spin potential - I can really make the ball dance with this paddle. The only minor drawback might be the slightly higher learning curve for beginners.",
      date: "2024-02-15",
      verifiedPurchase: true,
      playingLevel: "Advanced"
    }
  ]
};

export default reviews;
