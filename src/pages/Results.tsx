
import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import { getRecommendedPaddles } from "@/utils/paddleRecommendations";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const Results = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const preferences = location.state?.preferences;
  
  if (!preferences) {
    navigate("/questionnaire");
    return null;
  }

  const recommendedPaddles = getRecommendedPaddles(preferences);

  return (
    <div className="min-h-screen bg-gradient-to-b from-muted to-background">
      <div className="container max-w-7xl mx-auto px-4 py-12">
        <Button
          variant="outline"
          onClick={() => navigate("/questionnaire")}
          className="mb-8"
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Questionnaire
        </Button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-8"
        >
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Your Recommended Paddles</h1>
            <p className="text-muted-foreground">
              Based on your preferences, here are your top paddle matches
            </p>
          </div>

          <div className="grid gap-8">
            {recommendedPaddles.map((paddle, index) => (
              <motion.div
                key={`${paddle.Company}-${paddle.Paddle}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h2 className="text-2xl font-bold mb-2">{paddle.Paddle}</h2>
                      <p className="text-lg text-muted-foreground mb-4">{paddle.Company}</p>
                      
                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Basic Information</h3>
                        <Table>
                          <TableBody>
                            <TableRow>
                              <TableCell className="font-medium">Price</TableCell>
                              <TableCell>${paddle.Price}</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell className="font-medium">Shape</TableCell>
                              <TableCell>{paddle.Shape}</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell className="font-medium">Core Thickness</TableCell>
                              <TableCell>{paddle.CoreThickness}mm</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell className="font-medium">Manufacturing Process</TableCell>
                              <TableCell>{paddle.ManufacturingProcess}</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell className="font-medium">Surface Material</TableCell>
                              <TableCell>{paddle.SurfaceMaterial}</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell className="font-medium">Core Material</TableCell>
                              <TableCell>{paddle.CoreMaterial}</TableCell>
                            </TableRow>
                          </TableBody>
                        </Table>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold">Performance Metrics</h3>
                      <Table>
                        <TableBody>
                          <TableRow>
                            <TableCell className="font-medium">Spin (RPM)</TableCell>
                            <TableCell>{paddle.SpinRPM} ({paddle.SpinPercentile}%)</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">Serve Speed</TableCell>
                            <TableCell>{paddle.ServeSpeed} ({paddle.PowerPercentile}%)</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">Punch Volley Speed</TableCell>
                            <TableCell>{paddle.PunchVolleySpeed} ({paddle.PopPercentile}%)</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">Firepower Rating</TableCell>
                            <TableCell>{paddle.Firepower}</TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>

                      <h3 className="text-lg font-semibold mt-4">Physical Specifications</h3>
                      <Table>
                        <TableBody>
                          <TableRow>
                            <TableCell className="font-medium">Dimensions (L×W)</TableCell>
                            <TableCell>{paddle.Length}" × {paddle.Width}"</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">Handle Length</TableCell>
                            <TableCell>{paddle.HandleLength}"</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">Weight</TableCell>
                            <TableCell>{paddle.StaticWeight}oz</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">Swing Weight</TableCell>
                            <TableCell>{paddle.SwingWeight} ({paddle.SwingWeightPercentile}%)</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">Twist Weight</TableCell>
                            <TableCell>{paddle.TwistWeight} ({paddle.TwistWeightPercentile}%)</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">Balance Point</TableCell>
                            <TableCell>{paddle.BalancePoint}" ({paddle.BalancePointPercentile}%)</TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Results;
