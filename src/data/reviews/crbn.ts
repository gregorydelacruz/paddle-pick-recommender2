import { Review } from "@/types/review";

export const crbnReviews: Record<string, Review> = {
  "crbn-1x": {
    productReview: {
      summary: "The CRBN 1X is a professional-grade paddle that excels in providing exceptional control and spin generation. Its elongated shape and premium carbon fiber construction make it particularly suitable for players who prioritize precision and court coverage.",
      detailedAnalysis: [
        {
          section: "Construction Quality",
          content: "Built with premium Toray carbon fiber and a 14mm polypropylene core, the CRBN 1X demonstrates excellent build quality. The thermoformed construction ensures consistent performance across the entire paddle face, while the elongated shape provides extended reach without compromising maneuverability."
        },
        {
          section: "Performance Testing",
          content: "Our lab tests showed impressive spin generation at 2244 RPM (top 20% of tested paddles). The balanced weight distribution with a 24.2 balance point (67th percentile) offers excellent control. While serve speeds were moderate at 54.7 mph, the paddle excels in controlled, precise shots."
        },
        {
          section: "Playing Experience",
          content: "The CRBN 1X shines in situations requiring finesse and control. The paddle provides excellent feedback during soft game exchanges and allows for precise placement. The elongated shape helps with reach at the kitchen line, though some players may need time to adjust to the longer frame."
        },
        {
          section: "Durability",
          content: "After extensive testing, the paddle showed good durability with minimal wear. The edge guard and surface texture maintained their integrity well, suggesting good long-term durability that justifies the investment."
        }
      ],
      pros: [
        "Excellent spin generation capability",
        "Superior control and touch",
        "Extended reach with elongated design",
        "High-quality carbon fiber construction",
        "Good balance between power and control"
      ],
      cons: [
        "Higher price point",
        "Moderate power compared to some competitors",
        "May require adjustment period for some players"
      ],
      bestFor: [
        "Control-oriented players",
        "Players who prefer an elongated paddle shape",
        "Those who prioritize spin generation",
        "Players focusing on the soft game"
      ],
      valueRating: 4.3,
      performanceRating: 4.5,
      controlRating: 4.8,
      powerRating: 4.0,
      date: "2024-01-20"
    }
  }
};
