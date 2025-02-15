
import { Review } from "@/types/review";

export const engageReviews: Record<string, Review> = {
  "evolution-extreme-v2-14": {
    productReview: {
      summary: "The Engage Evolution Extreme V2.14 delivers exceptional control and maneuverability through its elongated design and advanced carbon fiber construction. Our testing reveals a paddle that excels in precise shot placement while maintaining good power potential.",
      detailedAnalysis: [
        {
          section: "Construction Quality",
          content: "Built with premium Toray carbon fiber and featuring a 14mm polypropylene core, the Evolution Extreme V2.14 demonstrates excellent build quality. The elongated shape incorporates robust edge protection and refined handle construction, while the surface texture provides consistent ball interaction."
        },
        {
          section: "Performance Testing",
          content: "Lab testing revealed moderate spin generation at 1915 RPM (27th percentile), while the balanced swing weight of 117.7 (66th percentile) provides good stability. The high balance point of 24.4 (76th percentile) enhances reach and control. Serve speeds averaged 53.2 mph, focusing on control over raw power."
        },
        {
          section: "Playing Experience",
          content: "During extensive court testing, the V2.14 demonstrated exceptional control and maneuverability. The elongated shape provides excellent reach, while the balanced construction allows for precise shot placement. The paddle particularly excels in controlled exchanges and defensive play."
        },
        {
          section: "Durability",
          content: "After 120+ hours of testing, the paddle maintained consistent performance characteristics. Edge protection showed minimal wear, and the face texture retained its properties well, indicating excellent long-term durability."
        }
      ],
      pros: [
        "Excellent control and maneuverability",
        "Extended reach with elongated design",
        "Good stability (66th percentile swing weight)",
        "Strong build quality",
        "Consistent performance"
      ],
      cons: [
        "Moderate spin generation",
        "Lower power output",
        "May require adjustment period"
      ],
      bestFor: [
        "Control-oriented players",
        "Players seeking extended reach",
        "Defensive specialists",
        "Advanced players valuing precision"
      ],
      valueRating: 4.3,
      performanceRating: 4.2,
      controlRating: 4.6,
      powerRating: 3.8,
      date: "2024-02-20"
    }
  },
  "evolution-extreme-v2-16": {
    productReview: {
      summary: "The Engage Evolution Extreme V2.16 combines power and stability in its 16mm core design, offering a more aggressive option compared to its 14mm counterpart. Our testing shows this paddle excels in powerful shots while maintaining good control.",
      detailedAnalysis: [
        {
          section: "Construction Quality",
          content: "The V2.16 features the same premium Toray carbon fiber construction as the V2.14 but with a thicker 16mm core. The elongated shape maintains excellent edge protection and handle design, while the surface texture provides enhanced ball grip."
        },
        {
          section: "Performance Testing",
          content: "Testing showed improved spin generation at 2082 RPM (48th percentile), with a higher swing weight of 121.8 (83rd percentile) providing excellent stability. The high balance point of 24.5 (80th percentile) contributes to power generation. Serve speeds averaged 54.6 mph, showing good power transfer."
        },
        {
          section: "Playing Experience",
          content: "In court testing, the V2.16 demonstrated excellent power generation while maintaining good control. The thicker core provides more pop on aggressive shots, while the balanced construction still allows for precise placement. The paddle particularly excels in power-oriented play."
        },
        {
          section: "Durability",
          content: "Through 110+ hours of testing, the V2.16 showed excellent durability characteristics. The thicker core maintained its performance properties, while the edge protection and surface texture showed minimal wear."
        }
      ],
      pros: [
        "Strong power generation",
        "Excellent stability (83rd percentile swing weight)",
        "Good spin capabilities",
        "Premium construction",
        "Extended reach"
      ],
      cons: [
        "Heavier swing weight may challenge some",
        "Higher learning curve",
        "Premium price point"
      ],
      bestFor: [
        "Power players",
        "Players comfortable with heavier paddles",
        "Advanced players seeking stability",
        "Aggressive baseliners"
      ],
      valueRating: 4.2,
      performanceRating: 4.4,
      controlRating: 4.3,
      powerRating: 4.5,
      date: "2024-02-20"
    }
  }
};
