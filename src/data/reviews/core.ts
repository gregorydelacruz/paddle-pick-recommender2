
import { Review } from "@/types/review";

export const coreReviews: Record<string, Review> = {
  "reaction-pro-elongated": {
    productReview: {
      summary: "The Core Reaction Pro Elongated offers an accessible entry into premium paddle performance with its elongated design and quality construction. While prioritizing control and reach, it maintains good overall playability for developing players.",
      detailedAnalysis: [
        {
          section: "Construction Quality",
          content: "Built with T700 carbon fiber and featuring a 16mm polypropylene core, the Reaction Pro demonstrates solid construction quality. The cold-layered manufacturing process ensures consistency, while the elongated shape provides extended reach."
        },
        {
          section: "Performance Testing",
          content: "Lab testing showed moderate spin generation at 1863 RPM (22nd percentile). The high swing weight of 125.4 (93rd percentile) provides excellent stability, while the high balance point of 24.8 (94th percentile) enhances reach and power potential."
        },
        {
          section: "Playing Experience",
          content: "On court, the Reaction Pro Elongated excels in reach and stability. The paddle provides good feedback during controlled exchanges and offers solid performance in defensive situations. The higher swing weight benefits power generation but may require adjustment."
        },
        {
          section: "Durability",
          content: "The paddle showed good durability during testing, with the edge protection and surface texture maintaining their characteristics well. The build quality suggests good long-term value at its price point."
        }
      ],
      pros: [
        "Excellent stability",
        "Extended reach",
        "Good value for features",
        "Solid construction",
        "High balance point for power"
      ],
      cons: [
        "Lower spin generation",
        "Higher swing weight may challenge some",
        "Moderate power output"
      ],
      bestFor: [
        "Players seeking stability",
        "Those who value reach",
        "Players transitioning to elongated paddles",
        "Value-conscious players"
      ],
      valueRating: 4.5,
      performanceRating: 4.1,
      controlRating: 4.3,
      powerRating: 4.0,
      date: "2024-02-18"
    }
  }
};
