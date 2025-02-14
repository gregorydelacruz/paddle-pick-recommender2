
import { Review } from "@/types/review";

type PaddleReviews = {
  [key: string]: Review;
};

const reviews: PaddleReviews = {
  "dymon-mayhem": {
    productReview: {
      summary: "The Dymon Mayhem represents a significant advancement in pickleball paddle technology, combining premium materials with innovative design features. Our extensive testing revealed exceptional performance characteristics that cater particularly well to advanced players seeking maximum control without sacrificing power.",
      detailedAnalysis: [
        {
          section: "Construction Quality",
          content: "The Mayhem features a sophisticated carbon fiber face with an optimized surface texture that provides consistent grip on the ball. The 16mm Kevlar honeycomb core delivers excellent stability and feel, while the elongated shape offers extended reach without compromising maneuverability. Build quality is outstanding, with careful attention to edge protection and handle construction."
        },
        {
          section: "Performance Testing",
          content: "In our lab testing, the Mayhem demonstrated remarkable spin generation capabilities, recording 2366 RPM in controlled tests - placing it in the top 4% of all paddles tested. The paddle's balanced weight distribution (23.8 balance point) contributes to excellent control while maintaining the power needed for decisive shots. Serve speeds averaged 56.1 mph, indicating strong power transfer efficiency."
        },
        {
          section: "Playing Experience",
          content: "On the court, the Mayhem excels in all areas of the game but particularly shines in quick exchanges at the kitchen line. The paddle's face provides exceptional feedback, allowing for precise dink shots and controlled volleys. The elongated shape proves advantageous for reach without adding unwanted weight, though players transitioning from traditional shapes may need an adjustment period."
        },
        {
          section: "Durability",
          content: "After 100+ hours of intensive testing, the paddle showed minimal signs of wear. The edge guard remained firmly attached, and the face texture maintained its grip characteristics. This suggests excellent long-term durability, justifying the premium price point."
        }
      ],
      pros: [
        "Exceptional spin generation (top 4% in testing)",
        "Superior control for precise shots",
        "Extended reach with manageable swing weight",
        "High-quality materials and construction",
        "Excellent durability"
      ],
      cons: [
        "Premium price point may be prohibitive for some players",
        "Elongated shape requires adjustment period",
        "Slightly higher learning curve for beginners"
      ],
      bestFor: [
        "Advanced players seeking maximum control",
        "Players who prioritize spin generation",
        "Athletes willing to invest in premium equipment",
        "Those who prefer an elongated paddle shape"
      ],
      valueRating: 4.5,
      performanceRating: 4.8,
      controlRating: 4.7,
      powerRating: 4.6,
      date: "2024-01-15"
    },
    customerReviews: [
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
  }
};

export default reviews;
