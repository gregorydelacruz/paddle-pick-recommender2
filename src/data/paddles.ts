import { Paddle } from "@/types/paddle";
import csvData from "./paddles.csv?raw";

function parsePercentile(val: string): number {
  if (!val || val.trim() === '') return 0;
  return parseFloat(val.replace('%', ''));
}

function parsePrice(val: string): number {
  if (!val || val.trim() === '') return 0;
  return parseFloat(val.replace('$', '').trim());
}

function parseNum(val: string): number | null {
  if (!val || val.trim() === '') return null;
  const n = parseFloat(val);
  return isNaN(n) ? null : n;
}

function parseCSV(csv: string): string[][] {
  const lines = csv.trim().split('\n');
  return lines.map(line => {
    const result: string[] = [];
    let current = '';
    let inQuotes = false;
    for (let i = 0; i < line.length; i++) {
      const char = line[i];
      if (char === '"') {
        inQuotes = !inQuotes;
      } else if (char === ',' && !inQuotes) {
        result.push(current);
        current = '';
      } else {
        current += char;
      }
    }
    result.push(current);
    return result;
  });
}

function loadPaddles(): Paddle[] {
  const rows = parseCSV(csvData);
  const headers = rows[0];
  const dataRows = rows.slice(1);

  return dataRows.map(row => {
    const get = (col: string) => {
      const idx = headers.findIndex(h => h.replace(/\uFEFF/, '').trim() === col);
      return idx >= 0 ? (row[idx] || '').trim() : '';
    };

    return {
      Company: get('Brand'),
      Paddle: get('Paddle Name'),
      Price: parsePrice(get('Price')),
      YearReleased: parseNum(get('Year Released')) as number | null,
      ApprovalBody: get('Approval Body'),
      Shape: get('Shape'),
      FaceMaterial: get('Face Material'),
      GritType: get('Grit Type'),
      BuildStyle: get('Build Style'),
      PaddleType: get('Paddle Type'),
      CoreThickness: parseFloat(get('Core Thickness (mm)')) || 0,
      GripLength: parseNum(get('Grip Length (in)')),
      GripSize: parseNum(get('Grip Size (in)')),
      StaticWeight: parseFloat(get('Weight (oz)')) || 0,
      SwingWeight: parseFloat(get('Swingweight')) || 0,
      SwingWeightPercentile: parsePercentile(get('Swingweight Percentile')),
      TwistWeight: parseFloat(get('Twistweight')) || 0,
      TwistWeightPercentile: parsePercentile(get('Twistweight Percentile')),
      BalancePoint: parseFloat(get('Balance Point (mm)')) || 0,
      SpinRating: get('Spin Rating'),
      SpinRPM: parseNum(get('Spin (RPM)')),
      Power: parseNum(get('Power (MPH)')),
      PowerPercentile: parseNum(get('Power Percentile')?.replace('%', '')),
      Pop: parseNum(get('Pop (MPH)')),
      PopPercentile: parseNum(get('Pop Percentile')?.replace('%', '')),
      FirepowerPercentile: parseNum(get('Firepower Percentile')?.replace('%', '')),
      Firepower: parseNum(get('Firepower Z')),
      FirepowerTier: get('Firepower Z Tier'),
    } as Paddle;
  }).filter(p => p.Company && p.Paddle);
}

const paddles: Paddle[] = loadPaddles();

export default paddles;
