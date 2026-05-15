const CENTER_PRICES = {
  "Priya Diagnostic Centre": {
    blood: "Price varies by selected test/package",
    ecg: "Rs. 300",
    "x-ray": "Rs. 500",
    ultrasound: "Rs. 1,200",
    nuchal: "Rs. 2,200",
    echocardiogram: "Rs. 2,000",
    "advanced-scan": "Rs. 5,500"
  },
  "Aarthi Scans": {
    blood: "Price varies by selected test/package",
    ecg: "Rs. 250",
    "x-ray": "Rs. 450",
    ultrasound: "Rs. 1,100",
    nuchal: "Rs. 2,100",
    echocardiogram: "Rs. 1,900",
    "advanced-scan": "Rs. 5,000"
  },
  "CareWell Labs": {
    blood: "Price varies by selected test/package",
    ecg: "Rs. 350",
    "x-ray": "Rs. 400"
  },
  "City Health Diagnostics": {
    blood: "Price varies by selected test/package",
    ecg: "Rs. 300",
    "x-ray": "Rs. 550",
    ultrasound: "Rs. 1,000",
    nuchal: "Rs. 2,300",
    echocardiogram: "Rs. 1,800",
    "advanced-scan": "Rs. 4,800"
  },
  "Apollo Diagnostics": {
    blood: "Price varies by selected test/package",
    ecg: "Rs. 350",
    "x-ray": "Rs. 600",
    ultrasound: "Rs. 1,500",
    nuchal: "Rs. 2,600",
    echocardiogram: "Rs. 2,500",
    "advanced-scan": "Rs. 6,500"
  },
  "MedScan Imaging Centre": {
    ecg: "Rs. 250",
    "x-ray": "Rs. 450",
    ultrasound: "Rs. 900",
    nuchal: "Rs. 2,000",
    "advanced-scan": "Rs. 4,500"
  },
  "LifeCare Diagnostics": {
    blood: "Price varies by selected test/package",
    ecg: "Rs. 300",
    "x-ray": "Rs. 350"
  },
  "SRL Diagnostics": {
    blood: "Price varies by selected test/package",
    ecg: "Rs. 300",
    "x-ray": "Rs. 500",
    ultrasound: "Rs. 1,300",
    nuchal: "Rs. 2,400",
    echocardiogram: "Rs. 2,200",
    "advanced-scan": "Rs. 5,800"
  }
};

const DEFAULT_PRICES = {
  blood: "Price varies by selected test/package",
  ecg: "Rs. 300",
  "x-ray": "Rs. 450",
  ultrasound: "Rs. 1,200",
  nuchal: "Rs. 2,200",
  echocardiogram: "Rs. 2,000",
  "advanced-scan": "Rs. 5,500",
  general: "Price will be confirmed by the centre"
};

const getPriceServiceType = (serviceName) => {
  const normalized = serviceName.toLowerCase();
  if (normalized.includes("nuchal")) return "nuchal";
  if (normalized.includes("echo")) return "echocardiogram";
  if (normalized.includes("ecg")) return "ecg";
  if (normalized.includes("ultrasound")) return "ultrasound";
  if (normalized.includes("x-ray")) return "x-ray";
  if (normalized.includes("blood")) return "blood";
  if (normalized.includes("scan")) return "advanced-scan";
  return "general";
};

export const getPriceDetails = (centerName, serviceName) => {
  const type = getPriceServiceType(serviceName);
  return CENTER_PRICES[centerName]?.[type] || DEFAULT_PRICES[type];
};

export const SERVICE_PRICE_SUMMARY = {
  blood: "Price varies by selected test/package",
  ecg: "Rs. 300",
  "x-ray": "Rs. 500",
  ultrasound: "Rs. 1,200",
  nuchal: "Rs. 2,200",
  echocardiogram: "Rs. 2,000",
  scans: "Rs. 5,500"
};
