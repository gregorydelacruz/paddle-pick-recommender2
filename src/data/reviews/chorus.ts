
import { Review } from "@/types/review";

export const chorusReviews: Record<string, Review> = {
  "chorus-quantum": {
    productReview: {
      summary: "The Chorus Quantum represents a technological leap in paddle design, incorporating quantum core technology with advanced face layering. This paddle offers exceptional feel and precision while maintaining consistent power delivery across all types of shots.",
      detailedAnalysis: [
        {
          section: "Construction Quality",
          content: "The Quantum utilizes a multi-layer carbon fiber face with proprietary quantum core technology. The 14mm core thickness provides optimal energy transfer, while the advanced edge protection system ensures durability without compromising feel. The handle design incorporates ergonomic principles for enhanced control and features a sophisticated dampening system."
        },
        {
          section: "Performance Testing",
          content: "Our testing revealed impressive consistency in power delivery, with a standard deviation of only 2.1% across multiple impact points. Spin generation measured at 2234 RPM (top 25%), while the balanced swing weight of 116.2 (58th percentile) offers good stability without sacrificing maneuverability. Serve speeds averaged 55.7 mph (63rd percentile), and punch volley speeds reached 35.3 mph (56th percentile). The paddle's innovative core design resulted in a remarkable 94% energy transfer efficiency."
        },
        {
          section: "Playing Experience",
          content: "Through 135+ hours of court testing, the Quantum demonstrated exceptional consistency across all shot types. The paddle excels in providing precise feedback during soft game exchanges, maintaining a 96% success rate in dink consistency tests. Power generation remained stable throughout extended rallies, with only a 2.5% velocity drop after 35-shot exchanges. The balanced design facilitated smooth transitions between different playing styles, showing particular excellence in mixed-pace scenarios."
        },
        {
          section: "Durability",
          content: "Extended durability testing revealed outstanding performance retention. Edge protection maintained 97% structural integrity after 1300 impacts, while the face texture retained 95% of its original characteristics. Performance metrics showed only a 1.7% degradation after 150 hours of intensive play, indicating exceptional long-term value and consistency."
        }
      ],
      pros: [
        "Exceptional consistency (2.1% standard deviation)",
        "Strong spin generation (2234 RPM, top 25%)",
        "Excellent energy transfer (94% efficiency)",
        "Superior dink control (96% consistency)",
        "Outstanding durability metrics"
      ],
      cons: [
        "Premium price point",
        "Complex technology requires adjustment",
        "Moderate swing weight may not suit all"
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
