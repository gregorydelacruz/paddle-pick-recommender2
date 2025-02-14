import { Review } from "@/types/review";

export const birdReviews: Record<string, Review> = {
  "bird-core": {
    productReview: {
      summary: "The Bird Core represents a balanced approach to paddle design, offering a versatile combination of power and control in a traditional shape. Its innovative core technology and carefully engineered face provide consistent performance suitable for a wide range of playing styles.",
      detailedAnalysis: [
        {
          section: "Construction Quality",
          content: "Built with a proprietary carbon fiber face and a specialized polypropylene core, the Bird Core demonstrates excellent build quality. The traditional shape features refined edge protection and a comfortable grip design, while the 16mm core thickness provides an optimal balance of power and feel."
        },
        {
          section: "Performance Testing",
          content: "Lab testing revealed solid all-around performance with spin generation at 2157 RPM (62nd percentile). The moderate swing weight of 113.2 (48th percentile) offers good maneuverability, while maintaining stability. Serve speeds averaged 54.8 mph, indicating good power transfer efficiency."
        },
        {
          section: "Playing Experience",
          content: "On the court, the Bird Core delivers consistent performance across all aspects of the game. The traditional shape provides familiar handling characteristics, while the face texture offers reliable ball control. The paddle particularly excels in transitional play, where quick adjustments between power and touch shots are crucial."
        },
        {
          section: "Durability",
          content: "After extensive testing, the paddle showed good durability with normal wear patterns. The edge guard and surface texture maintained their performance characteristics well, suggesting good value for the investment."
        }
      ],
      pros: [
        "Excellent all-around performance",
        "Good balance of power and control",
        "Consistent spin generation",
        "Comfortable grip design",
        "Familiar traditional shape"
      ],
      cons: [
        "Moderate price point",
        "No standout performance characteristics",
        "Some players may prefer more specialized designs"
      ],
      bestFor: [
        "All-around players",
        "Players seeking consistent performance",
        "Those who prefer traditional paddle shapes",
        "Intermediate players looking to improve"
      ],
      valueRating: 4.4,
      performanceRating: 4.3,
      controlRating: 4.4,
      powerRating: 4.3,
      date: "2024-02-05"
    }
  }
};
