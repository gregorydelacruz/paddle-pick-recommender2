
import { Review } from "@/types/review";

export const gruvnReviews: Record<string, Review> = {
  "pro-x": {
    productReview: {
      summary: "The Gruvn Pro X offers a well-balanced combination of power and control with its 16mm core design. Our testing reveals a paddle that particularly excels in all-around play with good spin generation capabilities.",
      detailedAnalysis: [
        {
          section: "Construction Quality",
          content: "Built with carbon fiber and featuring a 16mm polymer honeycomb core, the Pro X demonstrates solid construction quality. The standard shape incorporates good edge protection and comfortable handle design, while the rough surface texture enhances spin potential."
        },
        {
          section: "Performance Testing",
          content: "Testing showed good spin generation at 2105 RPM (55th percentile), with a higher swing weight of 118.4 (70th percentile) providing good stability. The moderate twist weight (55th percentile) offers balanced control. Power metrics were solid with serve speeds averaging 54.8 mph."
        },
        {
          section: "Playing Experience",
          content: "During court testing, the Pro X demonstrated versatile performance characteristics. The balanced construction allows for both power shots and controlled exchanges, while the surface texture provides good spin capability. The paddle performs well in various playing styles."
        },
        {
          section: "Durability",
          content: "Through 100+ hours of testing, the paddle maintained consistent performance. Edge protection and surface texture showed normal wear patterns, indicating good durability for regular use."
        }
      ],
      pros: [
        "Good spin generation capability",
        "Balanced performance characteristics",
        "Solid construction quality",
        "Versatile playing characteristics",
        "Good stability metrics"
      ],
      cons: [
        "Moderate power output",
        "Standard shape limits reach",
        "Price point relative to features"
      ],
      bestFor: [
        "All-around players",
        "Intermediate to advanced players",
        "Players seeking balanced performance",
        "Spin-oriented players"
      ],
      valueRating: 4.1,
      performanceRating: 4.2,
      controlRating: 4.3,
      powerRating: 4.0,
      date: "2024-02-20"
    }
  }
};
