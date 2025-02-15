
import { Review } from "@/types/review";

export const gentleBoomsReviews: Record<string, Review> = {
  "gbs-001": {
    productReview: {
      summary: "The Gentle Booms GBS-001 offers an entry-level option with unique aluminum construction. While budget-friendly, our testing reveals limited performance characteristics compared to composite paddles.",
      detailedAnalysis: [
        {
          section: "Construction Quality",
          content: "Built with aluminum materials throughout, including an aluminum honeycomb core, the GBS-001 features basic but functional construction. The standard shape includes welded edge protection, while the grit surface provides consistent ball interaction."
        },
        {
          section: "Performance Testing",
          content: "Testing showed lower spin generation at 1493 RPM (7th percentile), with a moderate swing weight of 115 (49th percentile). The higher twist weight of 6.65 (69th percentile) provides some stability. Power metrics were lower, with serve speeds averaging 51.9 mph (4th percentile)."
        },
        {
          section: "Playing Experience",
          content: "On court, the GBS-001 demonstrates basic functionality with consistent performance. The aluminum construction provides predictable ball response, though lacking the sophistication of composite paddles. The paddle performs adequately for recreational play."
        },
        {
          section: "Durability",
          content: "Through 80+ hours of testing, the aluminum construction showed good durability against impacts, though more susceptible to denting than composite paddles. The welded construction maintained structural integrity well."
        }
      ],
      pros: [
        "Budget-friendly price point",
        "Durable aluminum construction",
        "Good stability (69th percentile twist weight)",
        "Consistent performance",
        "Simple maintenance"
      ],
      cons: [
        "Limited spin generation",
        "Low power output",
        "Basic performance characteristics",
        "Susceptible to denting"
      ],
      bestFor: [
        "Beginning players",
        "Budget-conscious buyers",
        "Recreational players",
        "Facility/club usage"
      ],
      valueRating: 4.0,
      performanceRating: 3.5,
      controlRating: 3.8,
      powerRating: 3.2,
      date: "2024-02-20"
    }
  }
};
