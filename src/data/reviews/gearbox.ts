
import { Review } from "@/types/review";

export const gearboxReviews: Record<string, Review> = {
  "gearbox-cx14h-ultimate-power": {
    title: "Gearbox CX14H Ultimate Power",
    content: "The Gearbox CX14H Ultimate Power features a unique unibody edgeless design with a 3K woven carbon fiber surface. Despite its name, the power metrics are surprisingly low - just 1st percentile in serve speed and 5th percentile in pop, resulting in a minimal firepower rating of 3. What you get instead is exceptional control with decent spin (30th percentile) in a standard shape paddle. The carbon fiber core construction differs from typical honeycomb cores, offering a distinct feel that some players may prefer for precise shot placement.",
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
    rating: 3.5
  }
};
