import { Review } from "@/types/review";

export const cheetahReviews: Record<string, Review> = {
  "cheetah-sphinx": {
    productReview: {
      summary: "The Cheetah Sphinx offers a unique approach to paddle design with its aggressive core structure and responsive face technology. The paddle demonstrates exceptional acceleration and quick response time, making it particularly effective for fast-paced play and rapid exchanges.",
      detailedAnalysis: [
        {
          section: "Construction Quality",
          content: "Featuring a specialized carbon fiber weave face and a 16mm polymer core, the Sphinx showcases innovative manufacturing techniques. The edgeless design reduces weight while maintaining structural integrity, and the grip system incorporates advanced moisture-wicking materials for enhanced control."
        },
        {
          section: "Performance Testing",
          content: "Lab tests revealed impressive acceleration metrics with a response time of 3.2ms (top 15%). Spin generation capabilities reached 2187 RPM (71st percentile), while the moderate swing weight of 112.4 (44th percentile) ensures good maneuverability during quick exchanges."
        },
        {
          section: "Playing Experience",
          content: "The Sphinx excels in fast-paced gameplay scenarios, with exceptional response during rapid volleys and quick exchanges. The paddle provides good feedback for touch shots while maintaining enough power for aggressive play. The edgeless design contributes to clean ball contact across the entire face."
        },
        {
          section: "Durability",
          content: "Despite its lightweight construction, the paddle demonstrated good durability throughout testing. The edgeless design showed no signs of separation, and the face maintained consistent performance characteristics over extended use."
        }
      ],
      pros: [
        "Exceptional response time and acceleration",
        "Lightweight and maneuverable design",
        "Clean ball contact across entire face",
        "Advanced grip technology",
        "Good spin generation capability"
      ],
      cons: [
        "Price point on higher end",
        "May feel too light for some players",
        "Requires precise technique for optimal results"
      ],
      bestFor: [
        "Fast-paced players",
        "Those who prefer quick exchanges",
        "Players focusing on maneuverability",
        "Advanced players with refined technique"
      ],
      valueRating: 4.2,
      performanceRating: 4.6,
      controlRating: 4.5,
      powerRating: 4.3,
      date: "2024-02-10"
    }
  }
};
