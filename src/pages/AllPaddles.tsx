
import { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import paddles from "@/data/paddles";
import { motion } from "framer-motion";
import { Filter, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const AllPaddles = () => {
  const navigate = useNavigate();
  const [selectedCompany, setSelectedCompany] = useState<string>("");
  const [selectedShape, setSelectedShape] = useState<string>("");
  const [maxPrice, setMaxPrice] = useState<number>(250);

  const companies = Array.from(new Set(paddles.map(paddle => paddle.Company)));
  const shapes = Array.from(new Set(paddles.map(paddle => paddle.Shape)));

  const filteredPaddles = paddles.filter(paddle => {
    const companyMatch = selectedCompany ? paddle.Company === selectedCompany : true;
    const shapeMatch = selectedShape ? paddle.Shape === selectedShape : true;
    const priceMatch = paddle.Price <= maxPrice;
    return companyMatch && shapeMatch && priceMatch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/5 via-background to-background">
      <div className="container mx-auto px-4 py-12">
        <Button 
          variant="ghost" 
          onClick={() => navigate("/")}
          className="mb-8 hover:bg-primary/10"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Button>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Filters Section */}
          <div className="w-full md:w-64 space-y-6">
            <div className="p-6 bg-card/50 backdrop-blur-sm border border-primary/10 rounded-2xl">
              <h2 className="text-xl font-semibold mb-4 flex items-center">
                <Filter className="mr-2 h-5 w-5" />
                Filters
              </h2>

              <div className="space-y-6">
                <div className="space-y-2">
                  <Label>Manufacturer</Label>
                  <Select value={selectedCompany} onValueChange={setSelectedCompany}>
                    <SelectTrigger>
                      <SelectValue placeholder="All Manufacturers" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="">All Manufacturers</SelectItem>
                      {companies.map(company => (
                        <SelectItem key={company} value={company}>
                          {company}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Shape</Label>
                  <Select value={selectedShape} onValueChange={setSelectedShape}>
                    <SelectTrigger>
                      <SelectValue placeholder="All Shapes" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="">All Shapes</SelectItem>
                      {shapes.map(shape => (
                        <SelectItem key={shape} value={shape}>
                          {shape}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Max Price: ${maxPrice}</Label>
                  <Slider
                    value={[maxPrice]}
                    onValueChange={(value) => setMaxPrice(value[0])}
                    max={250}
                    step={10}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Paddles Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPaddles.map((paddle, index) => (
                <motion.div
                  key={`${paddle.Company}-${paddle.Paddle}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <div className="p-6 bg-card/50 backdrop-blur-sm border border-primary/10 hover:border-primary/30 rounded-2xl transition-all duration-300">
                    <h3 className="font-semibold text-lg">{paddle.Paddle}</h3>
                    <p className="text-muted-foreground">{paddle.Company}</p>
                    <div className="mt-4 space-y-2">
                      <p className="text-foreground">Shape: {paddle.Shape}</p>
                      <p className="text-foreground">Price: ${paddle.Price}</p>
                      <p className="text-sm text-muted-foreground">
                        Core: {paddle.CoreMaterial}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllPaddles;
