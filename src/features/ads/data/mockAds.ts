export interface Ad {
    id: string;
    title: string;
    description: string;
    imageUrl: string;
    fallbackImage: string;
    ctaText: string;
    ctaLink: string;
}

export const MOCK_ADS: Ad[] = [
    {
        id: '1',
        title: 'Fresh Organic Vegetables',
        description: 'Get farm-fresh organic vegetables delivered to your doorstep. Use code FRESH20 for 20% off!',
        imageUrl: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&q=80&w=800',
        fallbackImage: 'https://images.unsplash.com/photo-1466637574441-749b8f19452f?auto=format&fit=crop&q=80&w=800',
        ctaText: 'Shop Now',
        ctaLink: 'https://example.com/shop',
    },
    {
        id: '2',
        title: 'Premium Kitchen Knives',
        description: 'Upgrade your culinary skills with our professional-grade chef knives. Sharpness guaranteed.',
        imageUrl: 'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?auto=format&fit=crop&q=80&w=800',
        fallbackImage: 'https://images.unsplash.com/photo-1466637574441-749b8f19452f?auto=format&fit=crop&q=80&w=800',
        ctaText: 'Buy Now',
        ctaLink: 'https://example.com/knives',
    },
    {
        id: '3',
        title: 'Mastering Italian Cuisine',
        description: 'Join our online masterclass and learn to cook authentic Italian pasta from scratch.',
        imageUrl: 'https://images.unsplash.com/photo-1498579150354-977475b7ea0b?auto=format&fit=crop&q=80&w=800',
        fallbackImage: 'https://images.unsplash.com/photo-1466637574441-749b8f19452f?auto=format&fit=crop&q=80&w=800',
        ctaText: 'Enroll Today',
        ctaLink: 'https://example.com/course',
    },
    {
        id: '4',
        title: 'Sustainable Food Storage',
        description: 'Keep your leftovers fresh longer with our eco-friendly glass containers.',
        imageUrl: 'https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&q=80&w=800',
        fallbackImage: 'https://images.unsplash.com/photo-1466637574441-749b8f19452f?auto=format&fit=crop&q=80&w=800',
        ctaText: 'View Collection',
        ctaLink: 'https://example.com/storage',
    },
    {
        id: '5',
        title: 'Exotic Spices Set',
        description: 'Travel the world from your kitchen with our curated collection of rare spices.',
        imageUrl: 'https://images.unsplash.com/photo-1532336414038-cf19250cce50?auto=format&fit=crop&q=80&w=800',
        fallbackImage: 'https://images.unsplash.com/photo-1466637574441-749b8f19452f?auto=format&fit=crop&q=80&w=800',
        ctaText: 'Spice It Up',
        ctaLink: 'https://example.com/spices',
    },
    {
        id: '6',
        title: 'Healthy Meal Prep Service',
        description: 'Too busy to cook? Let us handle it. Healthy, delicious meals ready in minutes.',
        imageUrl: 'https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&q=80&w=800',
        fallbackImage: 'https://images.unsplash.com/photo-1466637574441-749b8f19452f?auto=format&fit=crop&q=80&w=800',
        ctaText: 'Get Started',
        ctaLink: 'https://example.com/meals',
    },
    {
        id: '7',
        title: 'Artisan Coffee Beans',
        description: 'Start your morning right with our ethically sourced, freshly roasted coffee beans.',
        imageUrl: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=800',
        fallbackImage: 'https://images.unsplash.com/photo-1466637574441-749b8f19452f?auto=format&fit=crop&q=80&w=800',
        ctaText: 'Brew Now',
        ctaLink: 'https://example.com/coffee',
    },
    {
        id: '8',
        title: 'Smart Kitchen Scale',
        description: 'Precision baking made easy. Connects to your phone for perfect recipes every time.',
        imageUrl: 'https://images.unsplash.com/photo-1595431637774-609b5527db32?auto=format&fit=crop&q=80&w=800',
        fallbackImage: 'https://images.unsplash.com/photo-1466637574441-749b8f19452f?auto=format&fit=crop&q=80&w=800',
        ctaText: 'Order Yours',
        ctaLink: 'https://example.com/scale',
    },
    {
        id: '9',
        title: 'Culinary Travel Adventure',
        description: 'Book a foodie tour to Japan. Taste the best ramen and sushi in Tokyo.',
        imageUrl: 'https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&q=80&w=800',
        fallbackImage: 'https://images.unsplash.com/photo-1466637574441-749b8f19452f?auto=format&fit=crop&q=80&w=800',
        ctaText: 'Book Trip',
        ctaLink: 'https://example.com/travel',
    },
    {
        id: '10',
        title: 'Gourmet Chocolate Box',
        description: 'The perfect gift for any occasion. Handcrafted chocolates with unique flavors.',
        imageUrl: 'https://images.unsplash.com/photo-1549007994-cb92caebd54b?auto=format&fit=crop&q=80&w=800',
        fallbackImage: 'https://images.unsplash.com/photo-1466637574441-749b8f19452f?auto=format&fit=crop&q=80&w=800',
        ctaText: 'Send Gift',
        ctaLink: 'https://example.com/chocolate',
    },
];
