
import { Review } from "@/types/review";

export const gearboxReviews: Record<string, Review> = {
  "gearbox-cx14h-ultimate-power": {
    productReview: {
      summary: "The Gearbox CX14H Ultimate Power features a unique unibody edgeless design with a 3K woven carbon fiber surface. Despite its name, the power metrics are surprisingly low - just 1st percentile in serve speed and 5th percentile in pop, resulting in a minimal firepower rating of 3.",
      detailedAnalysis: [
        {
          section: "Construction and Design",
          content: "The Gearbox CX14H Ultimate Power features a unique unibody edgeless design that eliminates edge guards completely. The 3K woven carbon fiber surface and carbon fiber core construction differs from typical honeycomb cores, offering a distinct feel."
        },
        {
          section: "Performance Characteristics",
          content: "What you get is exceptional control with decent spin (30th percentile) in a standard shape paddle. However, the power metrics are surprisingly low despite the 'Ultimate Power' name - just 1st percentile in serve speed and 5th percentile in pop, resulting in a minimal firepower rating of 3."
        }
      ],
      pros: [
        "Unique unibody edgeless design eliminates edge guards",
        "Solid construction with 3K woven carbon fiber surface",
        "Good spin potential for control-oriented play",
        "Different feel from traditional honeycomb core paddles"
      ],
      cons: [
        "Extremely low power metrics despite the 'Ultimate Power' name",
        "High price point at $249.99 given the performance metrics",
        "May feel underpowered for players used to more responsive paddles"
      ],
      bestFor: [
        "Control-oriented players",
        "Players seeking unique paddle construction",
        "Those who prioritize feel and precision",
        "Players willing to sacrifice power for control"
      ],
      valueRating: 3.3,
      performanceRating: 3.5,
      controlRating: 4.2,
      powerRating: 2.8,
      date: "2024-02-05"
    }
  }
};
