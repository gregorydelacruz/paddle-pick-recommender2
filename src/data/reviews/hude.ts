
import { Review } from "@/types/review";

export const hudeReviews: Record<string, Review> = {
  "pro-control": {
    productReview: {
      summary: "The Hude Pro Control lives up to its name with excellent control characteristics and a thinner 13mm core design. Our testing reveals a paddle that excels in precise shot placement and controlled exchanges.",
      detailedAnalysis: [
        {
          section: "Construction Quality",
          content: "Built with carbon fiber and featuring a 13mm polymer honeycomb core, the Pro Control demonstrates good build quality. The standard shape incorporates reliable edge protection and ergonomic handle design, while the medium surface texture provides consistent ball interaction."
        },
        {
          section: "Performance Testing",
          content: "Testing showed above-average spin generation at 2155 RPM (62nd percentile), with a moderate swing weight of 112.5 (35th percentile) enabling quick handling. The balanced twist weight (42nd percentile) provides good control. Serve speeds averaged 53.9 mph, focusing on precision over power."
        },
        {
          section: "Playing Experience",
          content: "During extensive court testing, the Pro Control demonstrated excellent touch and feel. The thinner core provides great ball control and feedback, while maintaining enough pop for effective defensive play. The paddle particularly excels in controlled exchanges and dinking."
        },
        {
          section: "Durability",
          content: "Through 95+ hours of testing, the paddle showed good durability despite its thinner core. Edge protection maintained integrity, and the surface texture retained its properties well, though careful handling is recommended."
        }
      ],
      pros: [
        "Excellent control characteristics",
        "Good spin generation (62nd percentile)",
        "Quick handling and maneuverability",
        "Great touch and feel",
        "Consistent performance"
      ],
      cons: [
        "Limited power output",
        "Thinner core requires careful handling",
        "Lower stability metrics"
      ],
      bestFor: [
        "Control-oriented players",
        "Touch players",
        "Defensive specialists",
        "Players prioritizing feel over power"
      ],
      valueRating: 4.2,
      performanceRating: 4.1,
      controlRating: 4.5,
      powerRating: 3.8,
      date: "2024-02-20"
    }
  }
};
