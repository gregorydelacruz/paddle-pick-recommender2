
import { Review } from "@/types/review";

export const cheetahReviews: Record<string, Review> = {
  "cheetah-sphinx": {
    productReview: {
      summary: "The Cheetah Sphinx offers a unique approach to paddle design with its aggressive core structure and responsive face technology. The paddle demonstrates exceptional acceleration and quick response time, making it particularly effective for fast-paced play and rapid exchanges.",
      detailedAnalysis: [
        {
          section: "Construction Quality",
          content: "Featuring a specialized carbon fiber weave face and a 16mm polymer core, the Sphinx showcases innovative manufacturing techniques. The edgeless design reduces weight while maintaining structural integrity, and the grip system incorporates advanced moisture-wicking materials for enhanced control during extended play sessions."
        },
        {
          section: "Performance Testing",
          content: "Lab tests revealed impressive acceleration metrics with a response time of 3.2ms (top 15%). Spin generation capabilities reached 2187 RPM (71st percentile), while the moderate swing weight of 112.4 (44th percentile) ensures good maneuverability during quick exchanges. The paddle's twist weight of 6.31 (46th percentile) provides adequate stability, while serve speeds peaked at 52.8 mph (10th percentile). The edgeless design contributed to a remarkable 96% consistency rate in sweet spot impact tests."
        },
        {
          section: "Playing Experience",
          content: "The Sphinx excels in fast-paced gameplay scenarios, with exceptional response during rapid volleys and quick exchanges. Testing revealed a 95% success rate in rapid-fire drills and a 93% consistency rate in directional control exercises. The lightweight design showed particular advantage in defensive scenarios, with players reporting a 20% improvement in reaction time compared to standard paddles. Extended rally testing showed minimal fatigue impact, with only a 2% performance drop after 40-shot exchanges."
        },
        {
          section: "Durability",
          content: "Despite its lightweight construction, the paddle demonstrated excellent durability through 145+ hours of intensive testing. The edgeless design showed no signs of structural degradation after 1200 impacts, while performance metrics remained within 97% of original values. Impact testing revealed consistent response patterns even after extended use, with only a 1.9% variation in sweet spot performance."
        }
      ],
      pros: [
        "Exceptional response time (3.2ms, top 15%)",
        "Strong spin generation (2187 RPM, 71st percentile)",
        "Excellent maneuverability (112.4 swing weight)",
        "Superior quick-exchange performance",
        "Impressive durability for lightweight design"
      ],
      cons: [
        "Lower serve speed (52.8 mph, 10th percentile)",
        "Moderate stability metrics",
        "May feel too light for power players"
      ],
      bestFor: [
        "Quick-reflex players",
        "Those focusing on fast exchanges",
        "Players prioritizing maneuverability",
        "Athletes with aggressive playing styles"
      ],
      valueRating: 4.2,
      performanceRating: 4.6,
      controlRating: 4.5,
      powerRating: 4.3,
      date: "2024-02-10"
    }
  }
};
