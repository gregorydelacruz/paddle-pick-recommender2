
import { Review } from "@/types/review";

export const gammaReviews: Record<string, Review> = {
  "airbender": {
    productReview: {
      summary: "The Gamma Airbender combines innovative design with exceptional power generation capabilities. Our testing reveals a paddle that excels in aggressive play while maintaining good control characteristics.",
      detailedAnalysis: [
        {
          section: "Construction Quality",
          content: "Built with Toray carbon fiber and featuring a unique 10mm core, the Airbender demonstrates innovative construction. The elongated shape incorporates solid edge protection and comfortable handle design, while the surface texture provides good ball interaction."
        },
        {
          section: "Performance Testing",
          content: "Testing showed good spin generation at 1988 RPM (34th percentile), with a moderate swing weight of 111.2 (31st percentile) enabling quick handling. The low twist weight of 5.08 (2nd percentile) suggests emphasis on maneuverability. Power metrics impressed with serve speeds averaging 55.7 mph (63rd percentile)."
        },
        {
          section: "Playing Experience",
          content: "On court, the Airbender demonstrates excellent power generation and quick handling. The thin core provides exceptional feel for touch shots, while maintaining enough pop for aggressive play. The elongated shape proves particularly effective for reach without adding unwanted weight."
        },
        {
          section: "Durability",
          content: "Through 90+ hours of testing, the paddle showed good durability despite its thin core. Edge protection maintained integrity, and the face texture retained its properties well, though the thinner core requires more careful handling."
        }
      ],
      pros: [
        "Excellent power generation",
        "Quick handling and maneuverability",
        "Extended reach",
        "Good touch feel",
        "Strong pop performance (72nd percentile)"
      ],
      cons: [
        "Lower stability (2nd percentile twist weight)",
        "Moderate spin generation",
        "Thin core requires careful handling"
      ],
      bestFor: [
        "Power-oriented players",
        "Those who value quick handling",
        "Players with refined technique",
        "Aggressive style players"
      ],
      valueRating: 4.2,
      performanceRating: 4.4,
      controlRating: 4.0,
      powerRating: 4.6,
      date: "2024-02-20"
    }
  }
};
