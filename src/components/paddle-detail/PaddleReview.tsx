
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Review } from "@/types/review";

interface PaddleReviewProps {
  review?: Review;
}

export const PaddleReview = ({ review }: PaddleReviewProps) => {
  if (!review?.productReview) return null;

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold">Expert Review</h2>
      <div className="space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">{review.productReview.summary}</p>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Pros</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2">
                {review.productReview.pros.map((pro, index) => (
                  <li key={index} className="text-muted-foreground">{pro}</li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Cons</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2">
                {review.productReview.cons.map((con, index) => (
                  <li key={index} className="text-muted-foreground">{con}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {review.productReview.detailedAnalysis.map((section, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{section.section}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{section.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Ratings</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <p className="text-lg font-semibold">{review.productReview.valueRating}/5</p>
                <p className="text-sm text-muted-foreground">Value</p>
              </div>
              <div className="text-center">
                <p className="text-lg font-semibold">{review.productReview.performanceRating}/5</p>
                <p className="text-sm text-muted-foreground">Performance</p>
              </div>
              <div className="text-center">
                <p className="text-lg font-semibold">{review.productReview.controlRating}/5</p>
                <p className="text-sm text-muted-foreground">Control</p>
              </div>
              <div className="text-center">
                <p className="text-lg font-semibold">{review.productReview.powerRating}/5</p>
                <p className="text-sm text-muted-foreground">Power</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Best For</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2">
              {review.productReview.bestFor.map((item, index) => (
                <li key={index} className="text-muted-foreground">{item}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
