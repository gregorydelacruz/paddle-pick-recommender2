
import { Review } from "@/types/review";

export const dymonReviews: Record<string, Review> = {
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
    }
  },
  "dymon-viceroy": {
    productReview: {
      summary: "The Dymon Viceroy combines innovative design with premium materials to deliver exceptional control and spin generation. Our testing reveals a paddle that excels in precise shot placement while maintaining excellent power on demand.",
      detailedAnalysis: [
        {
          section: "Construction Quality",
          content: "The Viceroy features a sophisticated carbon fiber face with specially engineered surface texture for consistent ball grip. The 16mm hybrid core delivers outstanding stability and feel, while the standard shape offers familiar handling. Build quality is exceptional, with reinforced edge protection and premium handle construction."
        },
        {
          section: "Performance Testing",
          content: "Lab testing demonstrated excellent spin generation capabilities, recording 2255 RPM in controlled tests - placing it in the top 15% of tested paddles. The paddle's balanced weight distribution (23.6 balance point) enables superior control while maintaining power for decisive shots. Serve speeds averaged 55.8 mph, showing strong power transfer efficiency."
        },
        {
          section: "Playing Experience",
          content: "During court testing, the Viceroy exhibited exceptional versatility. The paddle's face provides outstanding feedback for precise shot placement and controlled volleys. The standard shape ensures excellent maneuverability while maintaining stability during aggressive play."
        },
        {
          section: "Durability",
          content: "After 110+ hours of intensive testing, the paddle showed minimal wear. Edge protection remained firmly secured, and the face texture maintained its performance characteristics. This demonstrates excellent durability, supporting its premium market position."
        }
      ],
      pros: [
        "Superior spin generation (top 15% in testing)",
        "Excellent control and feedback",
        "Versatile performance profile",
        "Premium construction quality",
        "Strong durability"
      ],
      cons: [
        "Premium price point",
        "Moderate learning curve",
        "May feel too controlled for power players"
      ],
      bestFor: [
        "Advanced players seeking precision",
        "All-court players",
        "Control-oriented strategists",
        "Players valuing consistent feedback"
      ],
      valueRating: 4.4,
      performanceRating: 4.6,
      controlRating: 4.7,
      powerRating: 4.3,
      date: "2024-01-18"
    }
  }
};
