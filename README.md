# ShopHub - E-Commerce Frontend

A modern, full-featured e-commerce frontend built with React, TypeScript, and TailwindCSS.

## Features

- **Product Catalog**: Browse and search through a variety of products
- **Product Filtering**: Filter products by category
- **Shopping Cart**: Add items to cart, update quantities, remove items
- **Checkout Flow**: Complete checkout with shipping and payment information
- **User Authentication**: Login and registration UI
- **Responsive Design**: Fully responsive across all devices
- **Modern UI**: Clean, professional design with smooth animations

## Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **TailwindCSS** - Styling
- **React Router** - Client-side routing
- **Lucide React** - Icon library

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── components/       # Reusable UI components
│   ├── Button.tsx
│   ├── Footer.tsx
│   ├── Header.tsx
│   └── ProductCard.tsx
├── context/         # React Context providers
│   └── CartContext.tsx
├── data/           # Mock data
│   └── products.ts
├── lib/            # Utility functions
│   └── utils.ts
├── pages/          # Page components
│   ├── About.tsx
│   ├── Cart.tsx
│   ├── Checkout.tsx
│   ├── Home.tsx
│   ├── Login.tsx
│   ├── OrderSuccess.tsx
│   ├── ProductDetail.tsx
│   └── Products.tsx
├── types/          # TypeScript type definitions
│   └── index.ts
├── App.tsx         # Main app component
├── main.tsx        # Entry point
└── index.css       # Global styles
```

## Features Overview

### Home Page
- Hero section with call-to-action
- Featured products showcase
- Newsletter subscription
- Feature highlights (free shipping, secure payment, quality)

### Products Page
- Product grid with filtering
- Search functionality
- Category filtering
- Product cards with ratings and prices

### Product Detail
- Large product images
- Product information and specifications
- Add to cart functionality
- Related products

### Shopping Cart
- Cart item management
- Quantity adjustment
- Remove items
- Order summary with totals

### Checkout
- Contact information form
- Shipping address form
- Payment information form
- Order review

### Authentication
- Login form
- Registration form
- Social login options

## Customization

### Adding Products

Edit `src/data/products.ts` to add or modify products:

```typescript
export const products: Product[] = [
  {
    id: 1,
    name: "Product Name",
    price: 99.99,
    image: "https://example.com/image.jpg",
    category: "Category",
    description: "Product description",
    rating: 4.5,
    stock: 10
  },
  // Add more products...
];
```

### Styling

The project uses TailwindCSS for styling. You can customize the theme in `tailwind.config.js`.

## License

This project is open source and available for personal and commercial use.
