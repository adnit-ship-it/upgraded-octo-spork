import type { Product, ProductCategory } from "~/types/intake-form/checkout";

// --- PRODUCT DATA ---
// This is the master list of all available products.
// Products are sorted by their order field when accessed.
const productsData: Product[] = [
  {
    id: "mounjaro-injection",
    name: "Mounjaro Injection",
    description:
      "Weekly GLP-1 injection for weight loss and diabetes management",
    img: "/assets/images/products/mounjaro-injection.png",
    thumbnail: "/assets/images/products/mounjaro-injection.png",
    prices: {
      monthly: 399,
      threeMonthly: 349,
      sixMonthly: 349,
    },
    productBundleIds: {
      monthly: "mounjaro-injection-monthly",
      threeMonthly: "mounjaro-injection-three-monthly",
      sixMonthly: "mounjaro-injection-six-monthly",
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
      "Prescription required",
    ],
    quiz: null,
    order: 1,
  },
  {
    id: "ozempic-injection",
    name: "Ozempic Injection",
    description:
      "Weekly GLP-1 injection for weight loss and blood sugar control",
    img: "/assets/images/products/ozempic-injection.png",
    thumbnail: "/assets/images/products/ozempic-injection.png",
    prices: {
      monthly: 399,
        threeMonthly: 349,
      sixMonthly: 349,
    },
    productBundleIds: {
      monthly: "ozempic-injection-monthly",
      threeMonthly: "ozempic-injection-three-monthly",
      sixMonthly: "ozempic-injection-six-monthly",
    },
    availability: "in_stock",
    type: "injection",
    category: "weight-loss",
    features: [
      "Weekly subcutaneous injection",
      "GLP-1 receptor agonist",
      "Weight loss support",
      "Blood sugar control",
      "Prescription required",
    ],
    quiz: null,
    order: 2,
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
      sixMonthly: 349,
    },
    productBundleIds: {
      monthly: "methylcobalamin-injection-monthly",
      threeMonthly: "methylcobalamin-injection-three-monthly",
      sixMonthly: "methylcobalamin-injection-six-monthly",
    },
    availability: "in_stock",
    type: "injection",
    category: "wellness",
    features: [
      "Vitamin B12 supplement",
      "Energy boost",
      "Neurological support",
      "Methylated form for better absorption",
      "Prescription required",
    ],
    quiz: null,
    order: 3,
  }
];

/**
 * Sorts products by their order field (ascending).
 * Products without an order value will be placed at the end.
 * @param products Array of products to sort
 * @returns Sorted array of products
 */
export function sortProductsByOrder(products: Product[]): Product[] {
  return [...products].sort((a, b) => {
    const orderA = a.order ?? Number.MAX_SAFE_INTEGER;
    const orderB = b.order ?? Number.MAX_SAFE_INTEGER;
    return orderA - orderB;
  });
}

// Export sorted products array
export const products: Product[] = sortProductsByOrder(productsData);

export function getProductById(id: string): Product | undefined {
  return products.find((product) => product.id === id);
}

export function getPopularProducts(): Product[] {
  return sortProductsByOrder(products.filter((product) => product.popular));
}

// --- CATEGORY LABELS ---
// Mapping of category keys to display names
export const categoryLabels: Record<ProductCategory, string> = {
  "weight-loss": "Weight Loss",
  "sexual health": "Sexual",
  "wellness": "Wellness",
  "hair": "Hair",
  "skin": "Skin",
};

// --- UTILITY FUNCTION ---
/**
 * Gets all unique categories that have at least one product
 * @returns Array of category strings that exist in the products array
 */
export function getAvailableCategories(): ProductCategory[] {
  const categories = new Set<ProductCategory>();
  products.forEach((product) => {
    if (product.category) {
      categories.add(product.category as ProductCategory);
    }
  });
  return Array.from(categories);
}
