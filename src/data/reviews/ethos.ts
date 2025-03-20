
import { Review } from "@/types/review";

export const ethosReviews: Record<string, Review> = {
  "ethos-dunamis": {
    productReview: {
      summary: "The Ethos Dunamis offers a balanced approach with its standard shape and 14mm core. Players appreciate its kevlar and carbon fiber construction, though its spin ratings are on the lower side at only 10th percentile. It's relatively lightweight with minimal swing weight, making it maneuverable but perhaps lacking in power generation.",
      detailedAnalysis: [
        {
          section: "Construction and Design",
          content: "The Ethos Dunamis features a standard shape paddle with kevlar and carbon fiber construction. Its 14mm core provides a good balance between power and control, though it leans more toward the control side of the spectrum."
        },
        {
          section: "Performance Characteristics",
          content: "With spin generation in the 10th percentile, the Dunamis isn't ideal for players who rely on heavy spin. The minimal swing weight enhances maneuverability but limits power potential, making this paddle better suited for control-oriented players who prioritize feel and placement over raw power."
        }
      ],
      pros: [
        "Good balance of control and maneuverability",
        "Kevlar and carbon fiber construction offers durability",
        "Comfortable standard shape works for many playing styles"
      ],
      cons: [
        "Low spin generation (10th percentile)",
        "Minimal swing weight may limit power potential",
        "Not ideal for power-focused playing styles"
      ],
      bestFor: [
        "Control-oriented players",
        "Beginners who prioritize maneuverability",
        "Players seeking durability",
        "Those who prefer feel over power"
      ],
      valueRating: 3.8,
      performanceRating: 3.7,
      controlRating: 4.1,
      powerRating: 3.5,
      date: "2024-03-15"
    }
  }
};
