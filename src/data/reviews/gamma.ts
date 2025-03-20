
import { Review } from "@/types/review";

export const gammaReviews: Record<string, Review> = {
  "gamma-airbender": {
    productReview: {
      summary: "The Gamma Airbender with its 10mm core thickness offers an interesting blend of control and pop. Its elongated shape and Toray carbon fiber surface provide good reach and decent spin generation (34th percentile). What stands out is the paddle's impressive power metrics - 63rd percentile in serve speed and 72nd percentile in punch volley speed, resulting in a solid 67 firepower rating.",
      detailedAnalysis: [
        {
          section: "Construction and Design",
          content: "The Gamma Airbender features a 10mm core with an elongated shape and Toray carbon fiber surface. This combination creates a paddle that offers excellent reach while maintaining good maneuverability."
        },
        {
          section: "Performance Characteristics",
          content: "The extremely low twist weight (2nd percentile) makes it highly maneuverable, ideal for quick exchanges at the net. With serve speed in the 63rd percentile and punch volley speed in the 72nd percentile, this paddle delivers impressive power when needed."
        }
      ],
      pros: [
        "Excellent maneuverability with very low twist weight",
        "Strong power metrics for serves and volleys",
        "Good reach with the elongated shape",
        "Solid overall firepower rating of 67"
      ],
      cons: [
        "Average spin generation might limit control for some players",
        "10mm core may feel too thin for players used to thicker cores",
        "Higher price point at $199.99"
      ],
      bestFor: [
        "Players who prioritize maneuverability",
        "Power-oriented playing styles",
        "Those who need reach advantage",
        "Quick reflex players at the kitchen line"
      ],
      valueRating: 4.0,
      performanceRating: 4.2,
      controlRating: 4.0,
      powerRating: 4.5,
      date: "2024-02-10"
    }
  }
};
