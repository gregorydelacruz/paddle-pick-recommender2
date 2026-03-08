
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

  const { paddles: recommendedPaddles, isFallback, fallbackMessage } = getRecommendedPaddles(preferences);

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/5 via-background to-background">
      <div className="container max-w-7xl mx-auto px-4 py-12">
        <Button
          variant="ghost"
          onClick={() => navigate("/questionnaire", { state: { preferences } })}
          className="mb-8 hover:bg-primary/10"
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Questionnaire
        </Button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-12"
        >
          <div className="text-center space-y-4">
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent"
            >
              Your Perfect Paddle Matches
            </motion.h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {isFallback && fallbackMessage ? fallbackMessage : "Based on your preferences, we've found these paddles that match your playing style"}
            </p>
          </div>

          <div className="grid gap-8">
            {recommendedPaddles.map((paddle, index) => (
              <motion.div
                key={`${paddle.Company}-${paddle.Paddle}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <Card className="p-8 bg-card/50 backdrop-blur-sm border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-lg">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <h2 className="text-3xl font-bold text-foreground/90">{paddle.Paddle}</h2>
                        <p className="text-xl text-primary">{paddle.Company}</p>
                        <p className="text-2xl font-semibold">${paddle.Price}</p>
                        <div className="flex gap-4 mt-4">
                          <Button
                            variant="default"
                            onClick={() => navigate(`/paddle/${paddle.Company}-${paddle.Paddle}`.toLowerCase().replace(/\s+/g, '-'))}
                          >
                            View Details
                          </Button>
                          <Button
                            variant="secondary"
                            onClick={(e) => {
                              e.stopPropagation();
                              window.open("#", "_blank");
                            }}
                          >
                            Buy Now
                          </Button>
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold flex items-center gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                          Specifications
                        </h3>
                        <Table>
                          <TableBody className="divide-y divide-primary/10">
                            <TableRow className="hover:bg-primary/5">
                              <TableCell className="font-medium">Shape</TableCell>
                              <TableCell>{paddle.Shape}</TableCell>
                            </TableRow>
                            <TableRow className="hover:bg-primary/5">
                              <TableCell className="font-medium">Core Thickness</TableCell>
                              <TableCell>{paddle.CoreThickness}mm</TableCell>
                            </TableRow>
                            <TableRow className="hover:bg-primary/5">
                              <TableCell className="font-medium">Build Style</TableCell>
                              <TableCell>{paddle.BuildStyle}</TableCell>
                            </TableRow>
                            {paddle.FaceMaterial && (
                              <TableRow className="hover:bg-primary/5">
                                <TableCell className="font-medium">Face Material</TableCell>
                                <TableCell>{paddle.FaceMaterial}</TableCell>
                              </TableRow>
                            )}
                            {paddle.PaddleType && (
                              <TableRow className="hover:bg-primary/5">
                                <TableCell className="font-medium">Paddle Type</TableCell>
                                <TableCell>{paddle.PaddleType}</TableCell>
                              </TableRow>
                            )}
                          </TableBody>
                        </Table>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold flex items-center gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                          Performance Metrics
                        </h3>
                        <Table>
                          <TableBody className="divide-y divide-primary/10">
                            {paddle.SpinRPM != null && (
                              <TableRow className="hover:bg-primary/5">
                                <TableCell className="font-medium">Spin</TableCell>
                                <TableCell>
                                  <div className="flex items-center justify-between">
                                    <span>{paddle.SpinRPM} RPM</span>
                                    <span className="text-primary font-semibold">{paddle.SpinRating}</span>
                                  </div>
                                </TableCell>
                              </TableRow>
                            )}
                            {paddle.Power != null && (
                              <TableRow className="hover:bg-primary/5">
                                <TableCell className="font-medium">Power</TableCell>
                                <TableCell>
                                  <div className="flex items-center justify-between">
                                    <span>{paddle.Power} mph</span>
                                    <span className="text-primary font-semibold">{paddle.PowerPercentile}%</span>
                                  </div>
                                </TableCell>
                              </TableRow>
                            )}
                            {paddle.Pop != null && (
                              <TableRow className="hover:bg-primary/5">
                                <TableCell className="font-medium">Pop</TableCell>
                                <TableCell>
                                  <div className="flex items-center justify-between">
                                    <span>{paddle.Pop} mph</span>
                                    <span className="text-primary font-semibold">{paddle.PopPercentile}%</span>
                                  </div>
                                </TableCell>
                              </TableRow>
                            )}
                            {paddle.Firepower != null && (
                              <TableRow className="hover:bg-primary/5">
                                <TableCell className="font-medium">Firepower</TableCell>
                                <TableCell>
                                  <span className="text-primary font-semibold">{paddle.Firepower} ({paddle.FirepowerTier})</span>
                                </TableCell>
                              </TableRow>
                            )}
                          </TableBody>
                        </Table>

                        <h3 className="text-lg font-semibold mt-6 flex items-center gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                          Physical Properties
                        </h3>
                        <Table>
                          <TableBody className="divide-y divide-primary/10">
                            {paddle.GripLength && (
                              <TableRow className="hover:bg-primary/5">
                                <TableCell className="font-medium">Grip Length</TableCell>
                                <TableCell>{paddle.GripLength}"</TableCell>
                              </TableRow>
                            )}
                            <TableRow className="hover:bg-primary/5">
                              <TableCell className="font-medium">Weight</TableCell>
                              <TableCell>{paddle.StaticWeight}oz</TableCell>
                            </TableRow>
                            <TableRow className="hover:bg-primary/5">
                              <TableCell className="font-medium">Balance Point</TableCell>
                              <TableCell>{paddle.BalancePoint}mm</TableCell>
                            </TableRow>
                          </TableBody>
                        </Table>
                      </div>
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
