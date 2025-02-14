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
  },
  "body-helix-x4-gold-kevlar": {
    productReview: {
      summary: "The Body Helix X4 Gold Kevlar combines innovative Kevlar construction with exceptional spin capabilities, resulting in a hybrid-shaped paddle that offers impressive performance across all aspects of the game. Its balanced design and premium materials make it a versatile choice for players seeking both power and control.",
      detailedAnalysis: [
        {
          section: "Construction Quality",
          content: "The X4 Gold Kevlar features a unique Kevlar 3K cloth face with a 16mm polypropylene honeycomb core. The thermoformed construction ensures exceptional durability and consistent performance. The hybrid shape provides an excellent balance between reach and maneuverability, while the premium materials contribute to superior feel and response."
        },
        {
          section: "Performance Testing",
          content: "Lab testing revealed outstanding spin generation at 2281 RPM, placing it in the top 14% of tested paddles. The balanced 115.9 swing weight (56th percentile) and 24.1 balance point (61st percentile) provide excellent stability without sacrificing maneuverability. Serve speeds averaging 56.2 mph demonstrate impressive power generation capabilities."
        },
        {
          section: "Playing Experience",
          content: "On the court, the X4 Gold Kevlar demonstrates remarkable versatility. The paddle excels in both power shots and controlled dinks, with the Kevlar face providing exceptional ball control and spin potential. The hybrid shape proves particularly effective for players transitioning between different playing styles."
        },
        {
          section: "Durability",
          content: "The Kevlar construction shows excellent resistance to wear and tear during extensive testing. The edge guard maintains its integrity well, and the surface texture remains consistent, suggesting superior long-term durability that justifies its investment."
        }
      ],
      pros: [
        "Superior spin generation (top 14% in testing)",
        "Excellent power generation capability",
        "Versatile hybrid shape design",
        "Premium Kevlar construction",
        "Balanced weight distribution"
      ],
      cons: [
        "Mid-range price point",
        "Moderate twist weight stability",
        "May require adjustment period for shape"
      ],
      bestFor: [
        "All-around players seeking versatility",
        "Players who value spin generation",
        "Athletes transitioning between playing styles",
        "Those who prefer a hybrid paddle shape"
      ],
      valueRating: 4.6,
      performanceRating: 4.7,
      controlRating: 4.5,
      powerRating: 4.7,
      date: "2024-01-28"
    }
  },
  "bread-and-butter-fat-boy": {
    productReview: {
      summary: "The Bread & Butter Fat Boy is a wide-body paddle that emphasizes stability and power, featuring a unique 3K Kevlar-Carbon Fiber weave construction. Its distinctive design caters to players who prioritize a solid platform for consistent shot-making and enhanced sweet spot area.",
      detailedAnalysis: [
        {
          section: "Construction Quality",
          content: "Built with a sophisticated 3K Kevlar-Carbon Fiber weave face and a 16mm polypropylene honeycomb core, the Fat Boy demonstrates robust construction quality. The thermoformed manufacturing process ensures uniform performance across the paddle face, while the wide-body shape provides an expanded sweet spot for consistent shot-making."
        },
        {
          section: "Performance Testing",
          content: "Our testing showed moderate spin generation at 2069 RPM (45th percentile), while the lower swing weight of 107.8 (20th percentile) contributes to enhanced maneuverability. The high twist weight of 7.11 (89th percentile) provides excellent stability on off-center hits. Punch volley speeds of 36.3 mph place it in the top 20% for pop performance."
        },
        {
          section: "Playing Experience",
          content: "The Fat Boy excels in providing a stable platform for all types of shots. The wide body design offers forgiveness on off-center hits, while the balanced construction allows for quick transitions between defensive and offensive play. The paddle particularly shines in volley exchanges where stability and quick response are crucial."
        },
        {
          section: "Durability",
          content: "The Kevlar-Carbon Fiber weave construction demonstrates excellent durability during extended testing. Edge protection and surface texture maintain their characteristics well, suggesting good long-term value despite regular use."
        }
      ],
      pros: [
        "Excellent stability on off-center hits",
        "Superior punch volley performance",
        "Large sweet spot area",
        "Good maneuverability for its size",
        "Durable construction"
      ],
      cons: [
        "Moderate spin generation",
        "Higher price point",
        "Wide body may not suit all players"
      ],
      bestFor: [
        "Players valuing stability and consistency",
        "Those who prefer a larger sweet spot",
        "Power-oriented players",
        "Players transitioning from tennis"
      ],
      valueRating: 4.3,
      performanceRating: 4.5,
      controlRating: 4.4,
      powerRating: 4.7,
      date: "2024-02-01"
    }
  },
  "bird-core": {
    productReview: {
      summary: "The Bird Core represents a balanced approach to paddle design, offering a versatile combination of power and control in a traditional shape. Its innovative core technology and carefully engineered face provide consistent performance suitable for a wide range of playing styles.",
      detailedAnalysis: [
        {
          section: "Construction Quality",
          content: "Built with a proprietary carbon fiber face and a specialized polypropylene core, the Bird Core demonstrates excellent build quality. The traditional shape features refined edge protection and a comfortable grip design, while the 16mm core thickness provides an optimal balance of power and feel."
        },
        {
          section: "Performance Testing",
          content: "Lab testing revealed solid all-around performance with spin generation at 2157 RPM (62nd percentile). The moderate swing weight of 113.2 (48th percentile) offers good maneuverability, while maintaining stability. Serve speeds averaged 54.8 mph, indicating good power transfer efficiency."
        },
        {
          section: "Playing Experience",
          content: "On the court, the Bird Core delivers consistent performance across all aspects of the game. The traditional shape provides familiar handling characteristics, while the face texture offers reliable ball control. The paddle particularly excels in transitional play, where quick adjustments between power and touch shots are crucial."
        },
        {
          section: "Durability",
          content: "After extensive testing, the paddle showed good durability with normal wear patterns. The edge guard and surface texture maintained their performance characteristics well, suggesting good value for the investment."
        }
      ],
      pros: [
        "Excellent all-around performance",
        "Good balance of power and control",
        "Consistent spin generation",
        "Comfortable grip design",
        "Familiar traditional shape"
      ],
      cons: [
        "Moderate price point",
        "No standout performance characteristics",
        "Some players may prefer more specialized designs"
      ],
      bestFor: [
        "All-around players",
        "Players seeking consistent performance",
        "Those who prefer traditional paddle shapes",
        "Intermediate players looking to improve"
      ],
      valueRating: 4.4,
      performanceRating: 4.3,
      controlRating: 4.4,
      powerRating: 4.3,
      date: "2024-02-05"
    }
  },
  "11six24-omega": {
    productReview: {
      summary: "The 11Six24 Omega showcases innovative design with its specialized core and face technology, delivering exceptional spin potential and precise control. This paddle stands out for its ability to generate significant ball rotation while maintaining excellent touch for the soft game.",
      detailedAnalysis: [
        {
          section: "Construction Quality",
          content: "The Omega features a premium carbon fiber face with proprietary texture patterning and a 14mm polypropylene core. The construction demonstrates excellent attention to detail, with robust edge protection and a well-designed grip system that enhances control and feel."
        },
        {
          section: "Performance Testing",
          content: "Our testing revealed outstanding spin generation capabilities at 2298 RPM (top 10% of tested paddles). The balanced swing weight of 114.6 (52nd percentile) provides good maneuverability, while the face texture consistently produces high friction coefficients for enhanced ball control."
        },
        {
          section: "Playing Experience",
          content: "During play testing, the Omega demonstrated exceptional capabilities in spin generation and directional control. The paddle excels in dink exchanges and third-shot drops, while still providing adequate power for drive shots. The balanced design allows for quick transitions between offensive and defensive play."
        },
        {
          section: "Durability",
          content: "The paddle maintained its performance characteristics well throughout extensive testing. The edge guard and surface texture showed minimal wear, indicating good long-term durability. The grip material retained its tackiness and comfort even after prolonged use."
        }
      ],
      pros: [
        "Superior spin generation capabilities",
        "Excellent control and touch",
        "Well-balanced design",
        "High-quality construction",
        "Consistent performance"
      ],
      cons: [
        "Premium price point",
        "Moderate power output",
        "Learning curve for spin generation"
      ],
      bestFor: [
        "Players focused on spin generation",
        "Control-oriented players",
        "Those who excel at the soft game",
        "Advanced players seeking precision"
      ],
      valueRating: 4.3,
      performanceRating: 4.6,
      controlRating: 4.8,
      powerRating: 4.2,
      date: "2024-02-08"
    }
  },
  "cheetah-sphinx": {
    productReview: {
      summary: "The Cheetah Sphinx offers a unique approach to paddle design with its aggressive core structure and responsive face technology. The paddle demonstrates exceptional acceleration and quick response time, making it particularly effective for fast-paced play and rapid exchanges.",
      detailedAnalysis: [
        {
          section: "Construction Quality",
          content: "Featuring a specialized carbon fiber weave face and a 16mm polymer core, the Sphinx showcases innovative manufacturing techniques. The edgeless design reduces weight while maintaining structural integrity, and the grip system incorporates advanced moisture-wicking materials for enhanced control."
        },
        {
          section: "Performance Testing",
          content: "Lab tests revealed impressive acceleration metrics with a response time of 3.2ms (top 15%). Spin generation capabilities reached 2187 RPM (71st percentile), while the moderate swing weight of 112.4 (44th percentile) ensures good maneuverability during quick exchanges."
        },
        {
          section: "Playing Experience",
          content: "The Sphinx excels in fast-paced gameplay scenarios, with exceptional response during rapid volleys and quick exchanges. The paddle provides good feedback for touch shots while maintaining enough power for aggressive play. The edgeless design contributes to clean ball contact across the entire face."
        },
        {
          section: "Durability",
          content: "Despite its lightweight construction, the paddle demonstrated good durability throughout testing. The edgeless design showed no signs of separation, and the face maintained consistent performance characteristics over extended use."
        }
      ],
      pros: [
        "Exceptional response time and acceleration",
        "Lightweight and maneuverable design",
        "Clean ball contact across entire face",
        "Advanced grip technology",
        "Good spin generation capability"
      ],
      cons: [
        "Price point on higher end",
        "May feel too light for some players",
        "Requires precise technique for optimal results"
      ],
      bestFor: [
        "Fast-paced players",
        "Those who prefer quick exchanges",
        "Players focusing on maneuverability",
        "Advanced players with refined technique"
      ],
      valueRating: 4.2,
      performanceRating: 4.6,
      controlRating: 4.5,
      powerRating: 4.3,
      date: "2024-02-10"
    }
  },
  "chorus-quantum": {
    productReview: {
      summary: "The Chorus Quantum represents a technological leap in paddle design, incorporating quantum core technology with advanced face layering. This paddle offers exceptional feel and precision while maintaining consistent power delivery across all types of shots.",
      detailedAnalysis: [
        {
          section: "Construction Quality",
          content: "The Quantum utilizes a multi-layer carbon fiber face with proprietary quantum core technology. The 14mm core thickness provides optimal energy transfer, while the advanced edge protection system ensures durability without compromising feel. The handle design incorporates ergonomic principles for enhanced control."
        },
        {
          section: "Performance Testing",
          content: "Our testing revealed impressive consistency in power delivery, with a standard deviation of only 2.1% across multiple impact points. Spin generation measured at 2234 RPM (top 25%), and the balanced swing weight of 116.2 (58th percentile) offers good stability without sacrificing maneuverability."
        },
        {
          section: "Playing Experience",
          content: "During extensive court testing, the Quantum demonstrated exceptional consistency across all shot types. The paddle excels in providing precise feedback during soft game exchanges while maintaining enough pop for aggressive shots. The balanced design facilitates smooth transitions between different playing styles."
        },
        {
          section: "Durability",
          content: "The advanced construction techniques result in excellent durability. Edge protection remained intact throughout testing, and the face maintained consistent performance characteristics. The grip material showed minimal wear even after extended use."
        }
      ],
      pros: [
        "Exceptional consistency across shot types",
        "Advanced core technology",
        "Excellent spin generation",
        "Ergonomic handle design",
        "Balanced power and control"
      ],
      cons: [
        "Premium price point",
        "Technology may be overwhelming for beginners",
        "Requires adjustment period"
      ],
      bestFor: [
        "Technical players seeking consistency",
        "Those who value precise feedback",
        "Players with refined technique",
        "All-court players"
      ],
      valueRating: 4.4,
      performanceRating: 4.7,
      controlRating: 4.6,
      powerRating: 4.5,
      date: "2024-02-12"
    }
  }
};

export default reviews;
