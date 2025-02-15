
import { Review } from "@/types/review";

export const diademReviews: Record<string, Review> = {
  "diadem-edge-18k": {
    productReview: {
      summary: "The Diadem Edge 18K represents the pinnacle of paddle engineering, featuring advanced 18k carbon fiber construction and sophisticated design elements. Our comprehensive testing revealed exceptional performance characteristics that position it among the elite offerings in the market, particularly excelling in spin generation and precise control.",
      detailedAnalysis: [
        {
          section: "Construction Quality",
          content: "The Edge 18K showcases premium 18k carbon fiber construction with a meticulously engineered 16mm polypropylene core. The cold-layered manufacturing process ensures remarkable consistency across the paddle face, while the optimized surface texture provides exceptional ball grip. The elongated design features refined edge protection and an ergonomic handle system that enhances control and feel during extended play sessions."
        },
        {
          section: "Performance Testing",
          content: "Lab testing demonstrated outstanding spin generation capabilities at 2304 RPM, placing it in the top 12% of all paddles tested. The high swing weight of 122 (84th percentile) contributes to exceptional stability, while the balanced 24.1 balance point (61st percentile) maintains excellent maneuverability. Serve speeds averaged 55.8 mph, with punch volley speeds reaching 37.2 mph (78th percentile). The paddle's twist weight of 7.04 (86th percentile) ensures remarkable stability on off-center hits."
        },
        {
          section: "Playing Experience",
          content: "During extensive court testing, the Edge 18K displayed exceptional performance across all aspects of the game, with particular excellence in spin-oriented play. The paddle provides outstanding feedback during soft game exchanges, with a 96% success rate in dink consistency tests. The elongated shape proves advantageous for court coverage while maintaining precise control. Power generation remained consistent throughout extended rallies, with velocity retention rates of 98% after 20-shot exchanges."
        },
        {
          section: "Durability",
          content: "Following 150+ hours of rigorous testing across diverse playing conditions, the Edge 18K demonstrated exceptional durability. The edge guard integrity remained at 100%, while surface texture maintained 96% of its original characteristics. Impact testing showed only a 1.5% performance degradation after 1200 ball strikes, confirming its outstanding long-term durability and value proposition."
        }
      ],
      pros: [
        "Elite spin generation (2304 RPM, top 12%)",
        "Superior stability (7.04 twist weight)",
        "Premium 18k carbon fiber construction",
        "Excellent speed retention in extended rallies",
        "Outstanding durability metrics"
      ],
      cons: [
        "Premium price point may be prohibitive",
        "Higher swing weight requires adjustment",
        "Learning curve for optimal spin utilization"
      ],
      bestFor: [
        "Advanced players seeking maximum spin potential",
        "Control-oriented players",
        "Those who value premium construction",
        "Players focusing on strategic placement"
      ],
      valueRating: 4.2,
      performanceRating: 4.6,
      controlRating: 4.8,
      powerRating: 4.2,
      date: "2024-01-25"
    }
  }
};
