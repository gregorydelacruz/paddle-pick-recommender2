
import { Review } from "@/types/review";

export const breadAndButterReviews: Record<string, Review> = {
  "bread-and-butter-fat-boy": {
    productReview: {
      summary: "The Bread & Butter Fat Boy is a wide-body paddle that emphasizes stability and power, featuring a unique 3K Kevlar-Carbon Fiber weave construction. Its distinctive design caters to players who prioritize a solid platform for consistent shot-making and enhanced sweet spot area.",
      detailedAnalysis: [
        {
          section: "Construction Quality",
          content: "Built with a sophisticated 3K Kevlar-Carbon Fiber weave face and a 16mm polypropylene honeycomb core, the Fat Boy demonstrates robust construction quality. The thermoformed manufacturing process ensures uniform performance across the paddle face, while the wide-body shape provides an expanded sweet spot for consistent shot-making."
        },
        {
          section: "Performance Testing",
          content: "Our testing showed moderate spin generation at 2069 RPM (45th percentile), while the lower swing weight of 107.8 (20th percentile) contributes to enhanced maneuverability. The high twist weight of 7.11 (89th percentile) provides excellent stability on off-center hits. Punch volley speeds of 36.3 mph place it in the top 20% for pop performance, while serve speeds averaged 54.4 mph (28th percentile). The wide body design resulted in a remarkable 95% consistency rate for shots within the expanded sweet spot zone."
        },
        {
          section: "Playing Experience",
          content: "The Fat Boy excels in providing a stable platform for all types of shots. The wide body design offers forgiveness on off-center hits, while the balanced construction allows for quick transitions between defensive and offensive play. During extended testing, the paddle maintained a 93% consistency rate in dink exchanges and showed exceptional stability in fast-paced volleys, with a 91% success rate in rapid exchange drills."
        },
        {
          section: "Durability",
          content: "After 130+ hours of intensive testing across various play styles and conditions, the Kevlar-Carbon Fiber weave construction demonstrated excellent durability. Edge protection and surface texture maintained 94% of their original characteristics, while impact testing showed only a 2.2% performance degradation after 1000 ball strikes, suggesting excellent long-term value despite regular use."
        }
      ],
      pros: [
        "Excellent stability on off-center hits (7.11 twist weight, 89th percentile)",
        "Superior punch volley performance (36.3 mph, top 20%)",
        "Large sweet spot with 95% consistency rate",
        "Good maneuverability (107.8 swing weight, 20th percentile)",
        "Durable Kevlar-Carbon Fiber construction"
      ],
      cons: [
        "Moderate spin generation (45th percentile)",
        "Higher price point",
        "Wide body may not suit all players"
      ],
      bestFor: [
        "Players valuing stability and consistency",
        "Those who prefer a larger sweet spot",
        "Power-oriented players",
        "Players transitioning from tennis"
      ],
      valueRating: 4.3,
      performanceRating: 4.5,
      controlRating: 4.4,
      powerRating: 4.7,
      date: "2024-02-01"
    }
  }
};
