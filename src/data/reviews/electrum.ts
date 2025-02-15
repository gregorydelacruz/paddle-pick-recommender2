
import { Review } from "@/types/review";

export const electrumReviews: Record<string, Review> = {
  "model-e-elite": {
    productReview: {
      summary: "The Electrum Model E Elite showcases sophisticated engineering with its premium construction and balanced performance characteristics. This paddle offers excellent versatility while maintaining high standards in both power and control aspects.",
      detailedAnalysis: [
        {
          section: "Construction Quality",
          content: "The Model E Elite features Toray carbon fiber construction with a 16mm polypropylene core. The thermoformed manufacturing process ensures exceptional consistency across the paddle face, while the elongated shape provides excellent reach without compromising maneuverability."
        },
        {
          section: "Performance Testing",
          content: "Testing revealed solid spin generation at 2091 RPM (49th percentile). The balanced swing weight of 117.8 (67th percentile) provides good stability, while maintaining maneuverability. Power metrics showed impressive results with serve speeds reaching 55.9 mph (69th percentile)."
        },
        {
          section: "Playing Experience",
          content: "During court testing, the Model E Elite demonstrated excellent versatility. The paddle provides good feedback for touch shots while maintaining enough pop for aggressive play. The elongated design proves particularly effective for reach without sacrificing control."
        },
        {
          section: "Durability",
          content: "The paddle showed excellent durability throughout testing. The premium materials and construction quality resulted in consistent performance characteristics even after extended use."
        }
      ],
      pros: [
        "Excellent build quality",
        "Balanced performance characteristics",
        "Good power generation",
        "Premium materials",
        "Consistent feel"
      ],
      cons: [
        "Higher price point",
        "Average spin generation",
        "Learning curve for optimal performance"
      ],
      bestFor: [
        "All-around players",
        "Those seeking premium quality",
        "Players who value consistency",
        "Intermediate to advanced players"
      ],
      valueRating: 4.3,
      performanceRating: 4.5,
      controlRating: 4.4,
      powerRating: 4.4,
      date: "2024-02-19"
    }
  }
};
