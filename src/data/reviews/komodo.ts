
import { Review } from "@/types/review";

export const komodoReviews: Record<string, Review> = {
  "k-1000": {
    productReview: {
      summary: "The Komodo K-1000 offers a balanced approach to performance with its 14mm core design. Our testing reveals a paddle that provides good all-around capabilities while maintaining consistent playability.",
      detailedAnalysis: [
        {
          section: "Construction Quality",
          content: "Built with carbon fiber and featuring a 14mm polymer honeycomb core, the K-1000 demonstrates solid construction quality. The standard shape incorporates reliable edge protection and comfortable handle design, while the medium surface texture provides consistent ball interaction."
        },
        {
          section: "Performance Testing",
          content: "Testing showed moderate spin generation at 2012 RPM (38th percentile), with a good swing weight of 116.8 (58th percentile) providing balanced stability. The moderate twist weight (48th percentile) offers good control. Power metrics were moderate with serve speeds averaging 54.2 mph."
        },
        {
          section: "Playing Experience",
          content: "During court testing, the K-1000 demonstrated consistent performance across all aspects of play. The balanced construction allows for adaptable play styles, while the surface texture provides reliable ball control. The paddle performs well in various game situations."
        },
        {
          section: "Durability",
          content: "Through 90+ hours of testing, the paddle maintained consistent performance characteristics. Edge protection and surface texture showed normal wear patterns, indicating good durability for regular use."
        }
      ],
      pros: [
        "Consistent overall performance",
        "Good stability metrics",
        "Balanced playability",
        "Comfortable handle design",
        "Reliable construction"
      ],
      cons: [
        "Moderate spin generation",
        "Limited power output",
        "Few standout features"
      ],
      bestFor: [
        "All-around players",
        "Intermediate players",
        "Players seeking consistency",
        "Recreational to club level players"
      ],
      valueRating: 4.0,
      performanceRating: 4.1,
      controlRating: 4.2,
      powerRating: 3.9,
      date: "2024-02-20"
    }
  }
};
