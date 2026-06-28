import { Product } from '../types';

export const products: Product[] = [
  {
    id: 1,
    name: "Wireless Bluetooth Headphones",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500",
    category: "Electronics",
    description: "Premium wireless headphones with noise cancellation and 30-hour battery life.",
    rating: 4.5,
    stock: 50
  },
  {
    id: 2,
    name: "Smart Watch Pro",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500",
    category: "Electronics",
    description: "Advanced smartwatch with health monitoring, GPS, and water resistance.",
    rating: 4.8,
    stock: 30
  },
  {
    id: 3,
    name: "Leather Laptop Bag",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=500",
    category: "Accessories",
    description: "Genuine leather laptop bag with multiple compartments and padded sleeve.",
    rating: 4.3,
    stock: 25
  },
  {
    id: 4,
    name: "Running Shoes",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500",
    category: "Footwear",
    description: "Lightweight running shoes with advanced cushioning technology.",
    rating: 4.7,
    stock: 40
  },
  {
    id: 5,
    name: "Minimalist Desk Lamp",
    price: 45.99,
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500",
    category: "Home",
    description: "Modern LED desk lamp with adjustable brightness and color temperature.",
    rating: 4.4,
    stock: 60
  },
  {
    id: 6,
    name: "Ceramic Coffee Mug Set",
    price: 34.99,
    image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=500",
    category: "Home",
    description: "Set of 4 handcrafted ceramic mugs in assorted colors.",
    rating: 4.6,
    stock: 45
  },
  {
    id: 7,
    name: "Portable Power Bank",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=500",
    category: "Electronics",
    description: "20000mAh power bank with fast charging and dual USB ports.",
    rating: 4.5,
    stock: 55
  },
  {
    id: 8,
    name: "Cotton T-Shirt",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500",
    category: "Clothing",
    description: "100% organic cotton t-shirt, comfortable and breathable.",
    rating: 4.2,
    stock: 100
  },
  {
    id: 9,
    name: "Wireless Mouse",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500",
    category: "Electronics",
    description: "Ergonomic wireless mouse with precision tracking and long battery life.",
    rating: 4.4,
    stock: 70
  },
  {
    id: 10,
    name: "Yoga Mat",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=500",
    category: "Sports",
    description: "Non-slip yoga mat with extra cushioning for comfort.",
    rating: 4.6,
    stock: 35
  },
  {
    id: 11,
    name: "Sunglasses",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500",
    category: "Accessories",
    description: "Polarized sunglasses with UV protection and lightweight frame.",
    rating: 4.3,
    stock: 40
  },
  {
    id: 12,
    name: "Backpack",
    price: 69.99,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500",
    category: "Accessories",
    description: "Durable backpack with laptop compartment and multiple pockets.",
    rating: 4.7,
    stock: 30
  }
];

export const categories = ["All", "Electronics", "Clothing", "Footwear", "Accessories", "Home", "Sports"];
