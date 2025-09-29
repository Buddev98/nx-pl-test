'use client';

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Heart, Star, StarHalf } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Premium Leather Backpack",
    price: 129.99,
    image: "https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Bags",
    rating: 4.5,
    reviews: 128,
    inStock: true,
    description: "Handcrafted from genuine leather with spacious compartments",
    discount: 15
  },
  {
    id: 2,
    name: "Wireless Noise-Canceling Headphones",
    price: 249.99,
    image: "https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Electronics",
    rating: 4.8,
    reviews: 256,
    inStock: true,
    description: "Premium sound quality with active noise cancellation",
    discount: 0
  },
  {
    id: 3,
    name: "Minimalist Stainless Steel Watch",
    price: 189.99,
    image: "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Accessories",
    rating: 4.6,
    reviews: 89,
    inStock: false,
    description: "Elegant timepiece with sapphire crystal glass",
    discount: 0
  },
  {
    id: 4,
    name: "Organic Cotton T-Shirt",
    price: 34.99,
    image: "https://images.pexels.com/photos/5698851/pexels-photo-5698851.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Clothing",
    rating: 4.3,
    reviews: 167,
    inStock: true,
    description: "100% organic cotton, ethically sourced and produced",
    discount: 20
  },
  {
    id: 5,
    name: "Smart Fitness Tracker",
    price: 99.99,
    image: "https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Electronics",
    rating: 4.7,
    reviews: 324,
    inStock: true,
    description: "Advanced health monitoring with 7-day battery life",
    discount: 0
  },
  {
    id: 6,
    name: "Handcrafted Ceramic Mug",
    price: 24.99,
    image: "https://images.pexels.com/photos/1566308/pexels-photo-1566308.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Home",
    rating: 4.4,
    reviews: 93,
    inStock: true,
    description: "Artisan-made ceramic with unique glazing technique",
    discount: 0
  }
];

const RatingStars = ({ rating }: { rating: number }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  
  return (
    <div className="flex items-center">
      {[...Array(fullStars)].map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
      ))}
      {hasHalfStar && <StarHalf className="w-4 h-4 fill-yellow-400 text-yellow-400" />}
      {[...Array(5 - Math.ceil(rating))].map((_, i) => (
        <Star key={i} className="w-4 h-4 text-gray-300" />
      ))}
    </div>
  );
};

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold text-gray-900">Featured Products</h1>
            <p className="text-gray-600 mt-2">Discover our handpicked selection of premium items</p>
          </div>
          <div className="flex gap-4">
            <Button variant="outline">Filter</Button>
            <Button variant="outline">Sort</Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card key={product.id} className="overflow-hidden group hover:shadow-lg transition-shadow duration-300">
              <div className="relative">
                <div className="relative h-72 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {product.discount > 0 && (
                    <Badge className="absolute top-2 left-2 bg-red-500 text-white">
                      {product.discount}% OFF
                    </Badge>
                  )}
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-2 right-2 bg-white/90 hover:bg-white shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <Heart className="h-5 w-5 text-gray-600 hover:text-red-500 transition-colors" />
                </Button>
              </div>
              
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between items-start mb-2">
                      <Badge variant="secondary" className="text-xs px-2 py-1">
                        {product.category}
                      </Badge>
                      <div className="text-right">
                        {product.discount > 0 ? (
                          <div className="space-x-2">
                            <span className="text-gray-400 line-through text-sm">
                              ${product.price.toFixed(2)}
                            </span>
                            <span className="text-xl font-bold text-red-500">
                              ${(product.price * (1 - product.discount / 100)).toFixed(2)}
                            </span>
                          </div>
                        ) : (
                          <span className="text-xl font-bold">
                            ${product.price.toFixed(2)}
                          </span>
                        )}
                      </div>
                    </div>
                    
                    <h2 className="font-semibold text-xl text-gray-900 mb-2">
                      {product.name}
                    </h2>
                    
                    <p className="text-gray-600 text-sm mb-4">
                      {product.description}
                    </p>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <RatingStars rating={product.rating} />
                      <div className="text-sm text-gray-500">
                        {product.rating} ({product.reviews} reviews)
                      </div>
                    </div>
                    
                    <Button 
                      className={`min-w-[140px] ${!product.inStock ? 'bg-gray-100 text-gray-500' : ''}`} 
                      disabled={!product.inStock}
                    >
                      <ShoppingCart className="mr-2 h-4 w-4" />
                      {product.inStock ? "Add to Cart" : "Out of Stock"}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
}
