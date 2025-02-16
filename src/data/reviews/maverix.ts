
import { Review } from "@/types/review";

export const maverixReviews: Record<string, Review> = {
  "pro-tour": {
    productReview: {
      summary: "The Maverix Pro Tour combines power and control in an elongated format with its 15mm core design. Our testing reveals a paddle that excels in aggressive play while maintaining good touch capabilities.",
      detailedAnalysis: [
        {
          section: "Construction Quality",
          content: "Built with carbon fiber and featuring a 15mm polymer honeycomb core, the Pro Tour demonstrates excellent build quality. The elongated shape incorporates solid edge protection and refined handle design, while the rough surface texture enhances spin potential."
        },
        {
          section: "Performance Testing",
          content: "Testing showed strong spin generation at 2188 RPM (70th percentile), with a high swing weight of 120.5 (78th percentile) providing good stability. The above-average twist weight (62nd percentile) and balance point (65th percentile) contribute to well-rounded performance. Serve speeds averaged 55.5 mph."
        },
        {
          section: "Playing Experience",
          content: "On court, the Pro Tour demonstrated excellent versatility with a slight bias toward power play. The elongated shape provides good reach, while the balanced construction allows for both aggressive shots and controlled exchanges. The paddle particularly excels in baseline play and serves."
        },
        {
          section: "Durability",
          content: "Through 110+ hours of testing, the paddle maintained excellent performance characteristics. Edge protection showed minimal wear, and the surface texture retained its properties well, indicating good long-term durability."
        }
      ],
      pros: [
        "Strong spin generation",
        "Good power potential",
        "Extended reach",
        "Balanced performance metrics",
        "Solid construction quality"
      ],
      cons: [
        "Higher swing weight may require adjustment",
        "Price point relative to features",
        "Learning curve for optimal performance"
      ],
      bestFor: [
        "All-around players with power preference",
        "Intermediate to advanced players",
        "Players seeking extended reach",
        "Baseline-oriented players"
      ],
      valueRating: 4.2,
      performanceRating: 4.3,
      controlRating: 4.2,
      powerRating: 4.4,
      date: "2024-02-20"
    }
  }
};
