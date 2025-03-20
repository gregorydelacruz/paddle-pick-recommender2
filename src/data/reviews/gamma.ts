
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
  },
  "gamma-obsidian-10": {
    productReview: {
      summary: "The Gamma Obsidian 10mm delivers an excellent combination of power and control, featuring a thin core design that enhances feel and maneuverability. Our testing reveals strong pop performance particularly suited for players seeking controlled aggression.",
      detailedAnalysis: [
        {
          section: "Construction Quality",
          content: "Built with Toray carbon fiber and featuring a 10mm polypropylene core, the Obsidian 10 demonstrates premium construction quality. The elongated shape provides excellent reach, while the surface texture enhances ball interaction."
        },
        {
          section: "Performance Testing",
          content: "Testing showed moderate spin generation at 1992 RPM (35th percentile), with a higher swing weight of 118.3 (69th percentile) providing good stability. The moderate twist weight (19th percentile) allows for quick handling. Punch volley speeds of 35.5 mph (63rd percentile) demonstrate excellent pop."
        },
        {
          section: "Playing Experience",
          content: "During court testing, the Obsidian 10 demonstrated excellent versatility with a focus on controlled power. The thin core provides enhanced feel for touch shots, while still delivering significant pop on aggressive shots. The paddle particularly excels in transitional play."
        },
        {
          section: "Durability",
          content: "Through 100+ hours of testing, the paddle maintained excellent performance characteristics despite its thinner core design. Edge protection showed minimal wear, and the surface texture retained its properties well."
        }
      ],
      pros: [
        "Excellent pop performance (63rd percentile)",
        "Enhanced feel with the 10mm core",
        "Good stability metrics",
        "Extended reach with elongated design",
        "Premium construction quality"
      ],
      cons: [
        "Moderate spin generation",
        "Thinner core requires adaptation",
        "Mid-range price point"
      ],
      bestFor: [
        "Players seeking controlled power",
        "Those who value feel and feedback",
        "Intermediate to advanced players",
        "Transitional play specialists"
      ],
      valueRating: 4.2,
      performanceRating: 4.3,
      controlRating: 4.1,
      powerRating: 4.4,
      date: "2024-02-22"
    }
  }
};
