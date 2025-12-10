import type { Product } from "~/types/intake-form/checkout";

// --- PRODUCT DATA ---

// This is the master list of all available products.

export const products: Product[] = [
  {
    id: "a9ea1b19-ac05-4827-ad7b-5dcac1f0d700",
    name: "Compounded Semaglutide",
    description: "Same active ingredient as Ozempic®* and Wegovy®*• Price Includes Consult + Medication + Shipping • 15-20% average weight loss in clinical trials • 4 Weekly Subcutaneous Injections* If medication isn't prescribed, the tele-health consult fee is $80. Compounded medications are tailored to patients & made in licensed US facilities per a Rx from a medical professional. Important safety information",
    category: "weight-loss",
    img: "https://storage.googleapis.com/care360-next-public/productImages%2Fa9ea1b19-ac05-4827-ad7b-5dcac1f0d700%2FSemaglutide%20Vial%20Example.png",
    thumbnail: "https://storage.googleapis.com/care360-next-public/productImages%2Fa9ea1b19-ac05-4827-ad7b-5dcac1f0d700%2FSemaglutide%20Vial%20Example.png",
    prices: {
      monthly: 300
    },
    productBundleIds: {},
    features: [],
    type: "injection",
    popular: false,
    quiz: "nad-plus"
  },
  {
    id: "6e0ad4a2-a283-4105-a749-afb4b3a33f5b",
    name: "Compounded Tirzepatide",
    description: "Same active ingredient as Mounjaro®* and Zepbound®*• Price Includes Consult + Medication + Shipping • 20-25% average weight loss in clinical trials• 4 Weekly Subcutaneous Injections* If medication isn't prescribed, the tele-health consult fee is $80. Compounded medications are tailored to patients & made in licensed US facilities per a Rx from a medical professional. Important safety information",
    category: "weight-loss",
    img: "https://storage.googleapis.com/care360-next-public/productImages%2Fd3b463da-46c2-4ce2-b836-58a89f549cff%2FTirzepatide%20Vial%20Example.png",
    thumbnail: "https://storage.googleapis.com/care360-next-public/productImages%2Fd3b463da-46c2-4ce2-b836-58a89f549cff%2FTirzepatide%20Vial%20Example.png",
    prices: {
      monthly: 500
    },
    productBundleIds: {},
    features: [],
    type: "injection",
    popular: false,
    quiz: "acne"
  },
  {
    id: "ozempic-injection",
    name: "Ozempic Injection",
    description: "Weekly GLP-1 injection for weight loss and blood sugar control",
    img: "/assets/images/products/ozempic-injection.png",
    thumbnail: "/assets/images/products/ozempic-injection.png",
    prices: {
      monthly: 399,
      threeMonthly: 349,
      sixMonthly: 349
    },
    productBundleIds: {
      monthly: "ozempic-injection-monthly",
      threeMonthly: "ozempic-injection-three-monthly",
      sixMonthly: "ozempic-injection-six-monthly"
    },
    availability: "in_stock",
    type: "injection",
    category: "weight-loss",
    features: [
      "Weekly subcutaneous injection",
      "GLP-1 receptor agonist",
      "Weight loss support",
      "Blood sugar control",
      "Prescription required"
    ],
    quiz: null,
    order: 1
  },
  {
    id: "mounjaro-injection",
    name: "Mounjaro Injection",
    description: "Weekly GLP-1 injection for weight loss and diabetes management",
    img: "/assets/images/products/mounjaro-injection.png",
    thumbnail: "/assets/images/products/mounjaro-injection.png",
    prices: {
      monthly: 399,
      threeMonthly: 349,
      sixMonthly: 349
    },
    productBundleIds: {
      monthly: "mounjaro-injection-monthly",
      threeMonthly: "mounjaro-injection-three-monthly",
      sixMonthly: "mounjaro-injection-six-monthly"
    },
    popular: true,
    availability: "in_stock",
    type: "injection",
    category: "weight-loss",
    features: [
      "Weekly subcutaneous injection",
      "GLP-1 receptor agonist",
      "Effective for weight loss",
      "Diabetes management",
      "Prescription required"
    ],
    quiz: null,
    order: 2
  },
  {
    id: "methylcobalamin-injection",
    name: "Methylcobalamin Injection",
    description: "Vitamin B12 injection for energy and neurological health",
    img: "/assets/images/products/methylcobalamin-injection.png",
    thumbnail: "/assets/images/products/methylcobalamin-injection.png",
    prices: {
      monthly: 399,
      threeMonthly: 349,
      sixMonthly: 349
    },
    productBundleIds: {
      monthly: "methylcobalamin-injection-monthly",
      threeMonthly: "methylcobalamin-injection-three-monthly",
      sixMonthly: "methylcobalamin-injection-six-monthly"
    },
    availability: "in_stock",
    type: "injection",
    category: "wellness",
    features: [
      "Vitamin B12 supplement",
      "Energy boost",
      "Neurological support",
      "Methylated form for better absorption",
      "Prescription required"
    ],
    quiz: null,
    order: 3
  }
];


export function getProductById(id: string): Product | undefined {
  return products.find((product) => product.id === id);
}

export function getPopularProducts(): Product[] {
  return products.filter((product) => product.popular);
}

