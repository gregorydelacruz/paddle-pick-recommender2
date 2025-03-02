
import { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import paddles from "@/data/paddles";
import { motion } from "framer-motion";
import { Filter, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Checkbox } from "@/components/ui/checkbox";

const AllPaddles = () => {
  const navigate = useNavigate();
  const [selectedCompany, setSelectedCompany] = useState<string>("all");
  const [selectedShape, setSelectedShape] = useState<string>("all");
  const [selectedCore, setSelectedCore] = useState<string>("all");
  const [maxPrice, setMaxPrice] = useState<number>(250);
  const [showHighPerformance, setShowHighPerformance] = useState<boolean>(false);

  const companies = Array.from(new Set(paddles.map(paddle => paddle.Company)));
  const shapes = Array.from(new Set(paddles.map(paddle => paddle.Shape)));
  const coreThicknesses = Array.from(new Set(paddles.map(paddle => paddle.CoreThickness.toString())));

  const filteredPaddles = paddles.filter(paddle => {
    const companyMatch = selectedCompany === "all" ? true : paddle.Company === selectedCompany;
    const shapeMatch = selectedShape === "all" ? true : paddle.Shape === selectedShape;
    const coreMatch = selectedCore === "all" ? true : paddle.CoreThickness.toString() === selectedCore;
    const priceMatch = paddle.Price <= maxPrice;
    const performanceMatch = showHighPerformance ? paddle.Firepower >= 60 : true;
    return companyMatch && shapeMatch && priceMatch && coreMatch && performanceMatch;
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
                      <SelectItem value="all">All Manufacturers</SelectItem>
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
                      <SelectItem value="all">All Shapes</SelectItem>
                      {shapes.map(shape => (
                        <SelectItem key={shape} value={shape}>
                          {shape}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Core Thickness</Label>
                  <Select value={selectedCore} onValueChange={setSelectedCore}>
                    <SelectTrigger>
                      <SelectValue placeholder="All Core Thicknesses" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Core Thicknesses</SelectItem>
                      {coreThicknesses.sort((a, b) => parseFloat(a) - parseFloat(b)).map(thickness => (
                        <SelectItem key={thickness} value={thickness}>
                          {thickness}mm
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
                    max={300}
                    step={10}
                  />
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="highPerformance" 
                    checked={showHighPerformance}
                    onCheckedChange={(checked) => setShowHighPerformance(checked as boolean)}
                  />
                  <label
                    htmlFor="highPerformance"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    High Performance Only (60+ Firepower)
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Paddles Grid */}
          <div className="flex-1">
            <div className="mb-4">
              <p className="text-muted-foreground">{filteredPaddles.length} paddles found</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPaddles.map((paddle, index) => (
                <motion.div
                  key={`${paddle.Company}-${paddle.Paddle}-${paddle.CoreThickness}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => navigate(`/paddle/${paddle.Company}-${paddle.Paddle}`.toLowerCase().replace(/\s+/g, '-'))}
                  className="cursor-pointer"
                >
                  <div className="p-6 bg-card/50 backdrop-blur-sm border border-primary/10 hover:border-primary/30 rounded-2xl transition-all duration-300">
                    <h3 className="font-semibold text-lg">{paddle.Paddle}</h3>
                    <p className="text-muted-foreground">{paddle.Company}</p>
                    <div className="mt-4 space-y-2">
                      <p className="text-foreground">Shape: {paddle.Shape}</p>
                      <p className="text-foreground">Price: ${paddle.Price}</p>
                      <p className="text-sm text-muted-foreground">
                        Core: {paddle.CoreMaterial} ({paddle.CoreThickness}mm)
                      </p>
                      <div className="mt-2 flex items-center">
                        <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                          Firepower: {paddle.Firepower}
                        </span>
                      </div>
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
