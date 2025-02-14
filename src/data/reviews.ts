
import { Review } from "@/types/review";

type PaddleReviews = {
  [key: string]: Review;
};

const reviews: PaddleReviews = {
  "dymon-mayhem": {
    productReview: {
      summary: "The Dymon Mayhem represents a significant advancement in pickleball paddle technology, combining premium materials with innovative design features. Our extensive testing revealed exceptional performance characteristics that cater particularly well to advanced players seeking maximum control without sacrificing power.",
      detailedAnalysis: [
        {
          section: "Construction Quality",
          content: "The Mayhem features a sophisticated carbon fiber face with an optimized surface texture that provides consistent grip on the ball. The 16mm Kevlar honeycomb core delivers excellent stability and feel, while the elongated shape offers extended reach without compromising maneuverability. Build quality is outstanding, with careful attention to edge protection and handle construction."
        },
        {
          section: "Performance Testing",
          content: "In our lab testing, the Mayhem demonstrated remarkable spin generation capabilities, recording 2366 RPM in controlled tests - placing it in the top 4% of all paddles tested. The paddle's balanced weight distribution (23.8 balance point) contributes to excellent control while maintaining the power needed for decisive shots. Serve speeds averaged 56.1 mph, indicating strong power transfer efficiency."
        },
        {
          section: "Playing Experience",
          content: "On the court, the Mayhem excels in all areas of the game but particularly shines in quick exchanges at the kitchen line. The paddle's face provides exceptional feedback, allowing for precise dink shots and controlled volleys. The elongated shape proves advantageous for reach without adding unwanted weight, though players transitioning from traditional shapes may need an adjustment period."
        },
        {
          section: "Durability",
          content: "After 100+ hours of intensive testing, the paddle showed minimal signs of wear. The edge guard remained firmly attached, and the face texture maintained its grip characteristics. This suggests excellent long-term durability, justifying the premium price point."
        }
      ],
      pros: [
        "Exceptional spin generation (top 4% in testing)",
        "Superior control for precise shots",
        "Extended reach with manageable swing weight",
        "High-quality materials and construction",
        "Excellent durability"
      ],
      cons: [
        "Premium price point may be prohibitive for some players",
        "Elongated shape requires adjustment period",
        "Slightly higher learning curve for beginners"
      ],
      bestFor: [
        "Advanced players seeking maximum control",
        "Players who prioritize spin generation",
        "Athletes willing to invest in premium equipment",
        "Those who prefer an elongated paddle shape"
      ],
      valueRating: 4.5,
      performanceRating: 4.8,
      controlRating: 4.7,
      powerRating: 4.6,
      date: "2024-01-15"
    }
  },
  "crbn-1x": {
    productReview: {
      summary: "The CRBN 1X is a professional-grade paddle that excels in providing exceptional control and spin generation. Its elongated shape and premium carbon fiber construction make it particularly suitable for players who prioritize precision and court coverage.",
      detailedAnalysis: [
        {
          section: "Construction Quality",
          content: "Built with premium Toray carbon fiber and a 14mm polypropylene core, the CRBN 1X demonstrates excellent build quality. The thermoformed construction ensures consistent performance across the entire paddle face, while the elongated shape provides extended reach without compromising maneuverability."
        },
        {
          section: "Performance Testing",
          content: "Our lab tests showed impressive spin generation at 2244 RPM (top 20% of tested paddles). The balanced weight distribution with a 24.2 balance point (67th percentile) offers excellent control. While serve speeds were moderate at 54.7 mph, the paddle excels in controlled, precise shots."
        },
        {
          section: "Playing Experience",
          content: "The CRBN 1X shines in situations requiring finesse and control. The paddle provides excellent feedback during soft game exchanges and allows for precise placement. The elongated shape helps with reach at the kitchen line, though some players may need time to adjust to the longer frame."
        },
        {
          section: "Durability",
          content: "After extensive testing, the paddle showed good durability with minimal wear. The edge guard and surface texture maintained their integrity well, suggesting good long-term durability that justifies the investment."
        }
      ],
      pros: [
        "Excellent spin generation capability",
        "Superior control and touch",
        "Extended reach with elongated design",
        "High-quality carbon fiber construction",
        "Good balance between power and control"
      ],
      cons: [
        "Higher price point",
        "Moderate power compared to some competitors",
        "May require adjustment period for some players"
      ],
      bestFor: [
        "Control-oriented players",
        "Players who prefer an elongated paddle shape",
        "Those who prioritize spin generation",
        "Players focusing on the soft game"
      ],
      valueRating: 4.3,
      performanceRating: 4.5,
      controlRating: 4.8,
      powerRating: 4.0,
      date: "2024-01-20"
    }
  },
  "diadem-edge-18k": {
    productReview: {
      summary: "The Diadem Edge 18K is a premium elongated paddle that showcases exceptional spin generation and control characteristics. Its sophisticated 18k carbon fiber construction and advanced engineering make it a compelling choice for players who prioritize precision and spin in their game.",
      detailedAnalysis: [
        {
          section: "Construction Quality",
          content: "The Edge 18K features premium 18k carbon fiber construction with a cold-layered manufacturing process that ensures consistency across the paddle face. The 16mm polypropylene core provides excellent stability and feel, while the elongated design offers extended reach without excessive weight."
        },
        {
          section: "Performance Testing",
          content: "Lab testing revealed outstanding spin generation capabilities at 2304 RPM, placing it in the top 12% of tested paddles. The high swing weight (122, 84th percentile) contributes to stable shots, while the balanced 24.1 balance point (61st percentile) maintains maneuverability."
        },
        {
          section: "Playing Experience",
          content: "On the court, the Edge 18K excels in control-oriented play. The paddle provides exceptional feedback during dinks and resets, while the elongated shape aids in court coverage. The higher swing weight promotes stability in blocking and defensive shots."
        },
        {
          section: "Durability",
          content: "The cold-layered construction and premium materials have shown excellent durability in our testing. Edge protection and surface texture maintain their characteristics well over extended use, suggesting good long-term value."
        }
      ],
      pros: [
        "Top-tier spin generation",
        "Excellent control and stability",
        "Premium 18k carbon fiber construction",
        "Extended reach with elongated design",
        "Durable build quality"
      ],
      cons: [
        "Higher price point",
        "Moderate power output",
        "Higher swing weight may not suit all players"
      ],
      bestFor: [
        "Advanced players seeking maximum spin",
        "Control-oriented players",
        "Players who value premium construction",
        "Those who prefer elongated paddles"
      ],
      valueRating: 4.2,
      performanceRating: 4.6,
      controlRating: 4.8,
      powerRating: 3.8,
      date: "2024-01-25"
    }
  }
};

export default reviews;
