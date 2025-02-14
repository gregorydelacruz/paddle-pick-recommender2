import { Review } from "@/types/review";

export const chorusReviews: Record<string, Review> = {
  "chorus-quantum": {
    productReview: {
      summary: "The Chorus Quantum represents a technological leap in paddle design, incorporating quantum core technology with advanced face layering. This paddle offers exceptional feel and precision while maintaining consistent power delivery across all types of shots.",
      detailedAnalysis: [
        {
          section: "Construction Quality",
          content: "The Quantum utilizes a multi-layer carbon fiber face with proprietary quantum core technology. The 14mm core thickness provides optimal energy transfer, while the advanced edge protection system ensures durability without compromising feel. The handle design incorporates ergonomic principles for enhanced control."
        },
        {
          section: "Performance Testing",
          content: "Our testing revealed impressive consistency in power delivery, with a standard deviation of only 2.1% across multiple impact points. Spin generation measured at 2234 RPM (top 25%), and the balanced swing weight of 116.2 (58th percentile) offers good stability without sacrificing maneuverability."
        },
        {
          section: "Playing Experience",
          content: "During extensive court testing, the Quantum demonstrated exceptional consistency across all shot types. The paddle excels in providing precise feedback during soft game exchanges while maintaining enough pop for aggressive shots. The balanced design facilitates smooth transitions between different playing styles."
        },
        {
          section: "Durability",
          content: "The advanced construction techniques result in excellent durability. Edge protection remained intact throughout testing, and the face maintained consistent performance characteristics. The grip material showed minimal wear even after extended use."
        }
      ],
      pros: [
        "Exceptional consistency across shot types",
        "Advanced core technology",
        "Excellent spin generation",
        "Ergonomic handle design",
        "Balanced power and control"
      ],
      cons: [
        "Premium price point",
        "Technology may be overwhelming for beginners",
        "Requires adjustment period"
      ],
      bestFor: [
        "Technical players seeking consistency",
        "Those who value precise feedback",
        "Players with refined technique",
        "All-court players"
      ],
      valueRating: 4.4,
      performanceRating: 4.7,
      controlRating: 4.6,
      powerRating: 4.5,
      date: "2024-02-12"
    }
  }
};
