
import { Review } from "@/types/review";

export const birdReviews: Record<string, Review> = {
  "ball-hawk-classic": {
    productReview: {
      summary: "The Ball Hawk Classic demonstrates excellent control characteristics through its traditional shape and refined construction. Our testing reveals a paddle that excels in precise shot placement while offering good stability and consistent performance.",
      detailedAnalysis: [
        {
          section: "Construction Quality",
          content: "Built with T700 carbon fiber and featuring a 14mm polypropylene core, the Ball Hawk Classic shows solid construction quality. The traditional shape incorporates well-designed edge protection and comfortable handle construction, while the surface texture provides consistent ball interaction."
        },
        {
          section: "Performance Testing",
          content: "Testing recorded moderate spin generation at 2099 RPM (50th percentile). The high twist weight of 7.05 (86th percentile) provides excellent stability, while the lower swing weight of 106 (11th percentile) enables quick handling. Serve speeds averaged 51.3 mph, focusing on control over power."
        },
        {
          section: "Playing Experience",
          content: "During court testing, the Ball Hawk Classic demonstrated exceptional control and maneuverability. The traditional shape provides familiar handling, while the balanced construction allows for precise shot placement. The paddle excels in defensive play and controlled exchanges."
        },
        {
          section: "Durability",
          content: "After 100+ hours of testing, the paddle maintained consistent performance characteristics. Edge protection and face texture showed minimal wear, indicating good long-term durability at its competitive price point."
        }
      ],
      pros: [
        "Excellent stability (86th percentile twist weight)",
        "Good maneuverability",
        "Strong control characteristics",
        "Competitive price point",
        "Familiar traditional shape"
      ],
      cons: [
        "Lower power output",
        "Average spin generation",
        "Limited reach with traditional shape"
      ],
      bestFor: [
        "Control-oriented players",
        "Traditional shape enthusiasts",
        "Value-conscious players",
        "Defensive specialists"
      ],
      valueRating: 4.4,
      performanceRating: 4.2,
      controlRating: 4.5,
      powerRating: 3.8,
      date: "2024-02-05"
    }
  }
};
