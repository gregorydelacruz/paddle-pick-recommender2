
import { Review } from "@/types/review";

export const joolaReviews: Record<string, Review> = {
  "hyperion-cfs-16": {
    productReview: {
      summary: "The Joola Hyperion CFS 16 delivers exceptional power and spin capabilities in an elongated format. Our testing reveals a high-performance paddle that excels in aggressive play while maintaining good control.",
      detailedAnalysis: [
        {
          section: "Construction Quality",
          content: "Built with premium carbon fiber and featuring a 16mm polymer honeycomb core, the Hyperion CFS 16 showcases excellent construction quality. The elongated shape incorporates robust edge protection and refined handle design, while the rough surface texture maximizes spin potential."
        },
        {
          section: "Performance Testing",
          content: "Testing revealed outstanding spin generation at 2245 RPM (78th percentile), with a high swing weight of 124.2 (90th percentile) providing exceptional stability. The high twist weight (75th percentile) and balance point (86th percentile) contribute to powerful shots. Serve speeds averaged an impressive 56.2 mph."
        },
        {
          section: "Playing Experience",
          content: "On court, the Hyperion CFS 16 demonstrated exceptional power and spin generation. The elongated shape provides excellent reach, while the balanced construction allows for controlled aggressive play. The paddle particularly excels in power-oriented exchanges and serves."
        },
        {
          section: "Durability",
          content: "After 120+ hours of testing, the paddle maintained excellent performance characteristics. Edge protection showed minimal wear, and the surface texture retained its aggressive properties well, indicating superior durability."
        }
      ],
      pros: [
        "Exceptional power generation",
        "Outstanding spin capabilities",
        "Excellent stability and reach",
        "Premium construction quality",
        "High performance metrics across the board"
      ],
      cons: [
        "Higher price point",
        "Significant swing weight may challenge some",
        "Learning curve for optimal performance"
      ],
      bestFor: [
        "Power players",
        "Advanced to professional players",
        "Players seeking maximum spin potential",
        "Aggressive style players"
      ],
      valueRating: 4.3,
      performanceRating: 4.7,
      controlRating: 4.4,
      powerRating: 4.8,
      date: "2024-02-20"
    }
  }
};
