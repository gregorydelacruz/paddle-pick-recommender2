
import { Review } from "@/types/review";

export const crbnReviews: Record<string, Review> = {
  "crbn-1x": {
    productReview: {
      summary: "The CRBN 1X represents an evolution in paddle design, combining advanced carbon fiber technology with innovative core construction. Our comprehensive testing revealed outstanding performance characteristics that make it particularly effective for players seeking optimal balance between power and control.",
      detailedAnalysis: [
        {
          section: "Construction Quality",
          content: "The 1X features a premium carbon fiber face with optimized surface patterning that delivers consistent ball grip. The 14mm polypropylene core provides excellent stability and feel, while the traditional shape ensures familiar handling characteristics. Build quality is exceptional, with reinforced edge protection and ergonomic handle design."
        },
        {
          section: "Performance Testing",
          content: "In our lab testing, the 1X demonstrated excellent spin generation capabilities, recording 2244 RPM in controlled tests - placing it in the top 20% of all paddles tested. The paddle's balanced weight distribution (23.4 balance point) contributes to superior control while maintaining power for aggressive shots. Serve speeds averaged 54.7 mph, showing good power transfer efficiency."
        },
        {
          section: "Playing Experience",
          content: "On the court, the 1X excels in controlled gameplay while maintaining capability for aggressive shots. The paddle's face provides precise feedback, enabling accurate dink shots and controlled volleys. The traditional shape offers excellent maneuverability and familiar feel, making it accessible to players of various skill levels."
        },
        {
          section: "Durability",
          content: "After 120+ hours of intensive testing, the paddle maintained excellent performance characteristics. The edge guard showed minimal wear, and the face texture retained its grip properties. This indicates strong long-term durability, supporting its value proposition."
        }
      ],
      pros: [
        "Outstanding spin generation (top 20% in testing)",
        "Excellent control characteristics",
        "Traditional shape for familiar handling",
        "Premium construction quality",
        "Strong durability performance"
      ],
      cons: [
        "Premium price point",
        "Moderate power output",
        "May feel too traditional for some"
      ],
      bestFor: [
        "Players prioritizing control and spin",
        "Those who prefer traditional shapes",
        "Technical players seeking precision",
        "All-court players"
      ],
      valueRating: 4.3,
      performanceRating: 4.5,
      controlRating: 4.8,
      powerRating: 4.0,
      date: "2024-01-20"
    }
  }
};
