
import { Review } from "@/types/review";

export const cheetahReviews: Record<string, Review> = {
  "predion-e16-edgeless": {
    productReview: {
      summary: "The Predion E16 Edgeless represents innovative paddle design with its unique edgeless construction and elongated shape. Our testing reveals excellent maneuverability and quick response, though with some trade-offs in stability.",
      detailedAnalysis: [
        {
          section: "Construction Quality",
          content: "Featuring 3K woven carbon fiber construction and a 16mm aramid fiber honeycomb core, the E16 showcases innovative edgeless design. The elongated shape provides extended reach, while the construction focuses on reducing weight and enhancing feel."
        },
        {
          section: "Performance Testing",
          content: "Lab testing showed lower spin generation at 1556 RPM (8th percentile), while the light swing weight of 106 (11th percentile) enables quick handling. The lower twist weight of 5.37 (7th percentile) suggests some compromise in stability. Serve speeds averaged 52.8 mph."
        },
        {
          section: "Playing Experience",
          content: "On court, the E16 demonstrates excellent maneuverability and quick response. The edgeless design provides unique feel and feedback, while the elongated shape offers good reach. The paddle particularly excels in fast-paced exchanges where quick reactions are crucial."
        },
        {
          section: "Durability",
          content: "Through 90+ hours of testing, the edgeless design showed good durability despite its unique construction. The face texture maintained its properties well, though the lack of edge protection requires more careful handling."
        }
      ],
      pros: [
        "Excellent maneuverability",
        "Quick response time",
        "Extended reach",
        "Unique edgeless feel",
        "Lightweight design"
      ],
      cons: [
        "Lower spin generation",
        "Reduced stability",
        "Requires careful handling"
      ],
      bestFor: [
        "Players prioritizing quick handling",
        "Those seeking maximum reach",
        "Fast-paced game specialists",
        "Advanced players comfortable with less stability"
      ],
      valueRating: 4.1,
      performanceRating: 4.3,
      controlRating: 4.2,
      powerRating: 4.0,
      date: "2024-02-15"
    }
  }
};
