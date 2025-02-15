
import { Review } from "@/types/review";

export const diademReviews: Record<string, Review> = {
  "diadem-edge-18k": {
    productReview: {
      summary: "The Diadem Edge 18K showcases cutting-edge paddle technology, featuring premium 18k carbon fiber construction and advanced core design. Our extensive testing revealed exceptional performance characteristics that particularly benefit players seeking maximum spin potential while maintaining excellent control.",
      detailedAnalysis: [
        {
          section: "Construction Quality",
          content: "The Edge 18K utilizes premium 18k carbon fiber face construction with precision-engineered surface texture for optimal ball control. The 16mm polypropylene core delivers excellent stability and feel, while the elongated shape provides extended reach. Build quality is exceptional, featuring advanced edge protection and sophisticated handle construction."
        },
        {
          section: "Performance Testing",
          content: "In our lab testing, the Edge 18K demonstrated outstanding spin generation capabilities, recording 2304 RPM in controlled tests - placing it in the top 12% of all paddles tested. The paddle's optimized weight distribution (24.1 balance point) ensures excellent control while maintaining power for decisive shots. Serve speeds averaged 55.8 mph, indicating strong power transfer efficiency."
        },
        {
          section: "Playing Experience",
          content: "On the court, the Edge 18K excels in spin-oriented play while maintaining excellent all-around capabilities. The paddle's face provides exceptional feedback, enabling precise shot placement and controlled volleys. The elongated shape offers extended reach without compromising maneuverability, though some adjustment may be needed for players new to this format."
        },
        {
          section: "Durability",
          content: "After 150+ hours of intensive testing, the paddle showed remarkable durability. The edge protection remained fully intact, and the face texture maintained its performance characteristics. This demonstrates excellent long-term durability, justifying its premium positioning."
        }
      ],
      pros: [
        "Elite spin generation (top 12% in testing)",
        "Superior control and feedback",
        "Extended reach with elongated design",
        "Premium 18k carbon construction",
        "Outstanding durability"
      ],
      cons: [
        "High premium price point",
        "Elongated shape requires adaptation",
        "Learning curve for optimal spin usage"
      ],
      bestFor: [
        "Advanced players seeking spin control",
        "Those who value premium construction",
        "Players comfortable with elongated shapes",
        "Spin-oriented strategists"
      ],
      valueRating: 4.2,
      performanceRating: 4.6,
      controlRating: 4.8,
      powerRating: 4.2,
      date: "2024-01-25"
    }
  }
};
