export const productCatalog = [
  {
    name: "BlissCode T-Shirt",
    category: "clothing",
    subcategories: "t-shirts",
    description: "A comfortable cotton t-shirt",
    images: ["https://placeholder.com/classic-tshirt-black"],
    sizes: ["lg", "xl", "2xl"],
    colors: ["black", "white"],
    types: ["classic", "premium"],
    price: 19.99,
  },
  {
    name: "BlissCode Hoodie",

    category: "clothing",
    subcategories: "hoodies",
    description: "A comfortable hoodie",
    images: ["https://placeholder.com/hoodie-black"],
    sizes: ["lg", "xl", "2xl"],
    colors: ["black"],
    types: ["classic", "premium"],
    price: 59.99,
  },
  {
    name: "BlissCode Stickers",

    category: "merch",
    subcategories: "stickers",
    description: "A set of stickers",
    images: ["https://placeholder.com/stickers"],
    price: 9.99,
  },
];

export type StripeProduct = {
  name: string;
  description: string;
  images: string[];
  metadata: {
    size?: string;
    color?: string;
    type?: string;
    category: string;
    subcategories: string;
    price: number;
  };
};

export const stripeProducts = productCatalog.flatMap((product) => {
  // For products with sizes, colors and types, create all permutations
  if (product.sizes && product.colors && product.types) {
    return product.sizes.flatMap((size) =>
      product.colors.flatMap((color) =>
        product.types.map((type) => ({
          name: `${product.name} - ${type} ${color} ${size.toUpperCase()}`,
          description: product.description,
          images: product.images,
          metadata: {
            size,
            color,
            type,
            category: product.category,
            subcategories: product.subcategories,
            price: product.price,
          },
        }))
      )
    );
  }

  // For products without variations (like stickers), return single product
  return [
    {
      name: product.name,
      description: product.description,
      images: product.images,
      metadata: {
        category: product.category,
        subcategories: product.subcategories,
        price: product.price,
      },
    },
  ];
}) as StripeProduct[];
