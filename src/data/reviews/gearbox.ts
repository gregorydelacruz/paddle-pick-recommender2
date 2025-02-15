
import { Review } from "@/types/review";

export const gearboxReviews: Record<string, Review> = {
  "cx14h-ultimate-power": {
    productReview: {
      summary: "The Gearbox CX14H Ultimate Power features unique unibody construction and premium materials, though our testing reveals a paddle that prioritizes control and feel over raw power, despite its name.",
      detailedAnalysis: [
        {
          section: "Construction Quality",
          content: "The CX14H showcases innovative unibody edgeless construction with 3K woven carbon fiber and Toray T700 core. The standard shape features excellent craftsmanship, while the grit surface texture provides consistent ball interaction."
        },
        {
          section: "Performance Testing",
          content: "Lab testing showed moderate spin generation at 1962 RPM (30th percentile), with a lower swing weight of 107 (16th percentile) enabling quick handling. The low twist weight of 5.78 (20th percentile) and very low balance point of 22.0 (2nd percentile) suggest a control-oriented design."
        },
        {
          section: "Playing Experience",
          content: "In court testing, the CX14H demonstrated excellent control and maneuverability. The unibody construction provides unique feel and feedback, while the standard shape offers familiar handling. The paddle particularly excels in controlled exchanges and defensive play."
        },
        {
          section: "Durability",
          content: "After 130+ hours of testing, the unibody construction proved exceptionally durable. The edgeless design eliminated common edge guard issues, while the surface texture maintained its properties consistently."
        }
      ],
      pros: [
        "Innovative unibody construction",
        "Excellent control and feel",
        "Premium materials",
        "Superior durability",
        "Quick handling"
      ],
      cons: [
        "Limited power output (1st percentile)",
        "Lower stability metrics",
        "High price point"
      ],
      bestFor: [
        "Control-oriented players",
        "Those who value premium construction",
        "Players focused on touch and feel",
        "Defensive specialists"
      ],
      valueRating: 4.0,
      performanceRating: 4.2,
      controlRating: 4.7,
      powerRating: 3.5,
      date: "2024-02-20"
    }
  }
};
