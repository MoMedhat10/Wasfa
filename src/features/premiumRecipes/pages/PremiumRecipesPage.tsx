
import { Crown, Sparkles } from 'lucide-react';
import PremiumRecipeCard from '../components/PremiumRecipeCard';

const MOCK_PREMIUM_RECIPES = [
    {
        id: '1',
        title: 'Truffle & Wild Mushroom Risotto',
        image: 'https://images.unsplash.com/photo-1476124369491-e7addf5db371?auto=format&fit=crop&q=80&w=2070',
        rating: 4.9,
        time: '45',
        calories: 650,
        chef: 'Gordon Ramsey',
        plan: 'Pro' as const,
    },
    {
        id: '2',
        title: 'Wagyu Beef Burger with Gold Leaf',
        image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=1998',
        rating: 5.0,
        time: '30',
        calories: 950,
        chef: 'Salt Bae',
        plan: 'Pro' as const,
    },
    {
        id: '3',
        title: 'Lobster Thermidor',
        image: 'https://images.unsplash.com/photo-1551248429-40975aa6174e?auto=format&fit=crop&q=80&w=2037',
        rating: 4.8,
        time: '60',
        calories: 720,
        chef: 'Julia Child',
        plan: 'Basic' as const,
    },
    {
        id: '4',
        title: 'Saffron Paella w/ Fresh Seafood',
        image: 'https://images.unsplash.com/photo-1534080564583-6be3718c622c?auto=format&fit=crop&q=80&w=2070',
        rating: 4.7,
        time: '55',
        calories: 580,
        chef: 'Jamie Oliver',
        plan: 'Basic' as const,
    },
    {
        id: '5',
        title: 'Matcha Green Tea Soufflé',
        image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=80&w=1974',
        rating: 4.9,
        time: '40',
        calories: 320,
        chef: 'Nobu Matsuhisa',
        plan: 'Pro' as const,
    },
    {
        id: '6',
        title: 'Sous Vide Salmon with Asparagus',
        image: 'https://images.unsplash.com/photo-1467003909585-2f8a7270028d?auto=format&fit=crop&q=80&w=1974',
        rating: 4.6,
        time: '90',
        calories: 450,
        chef: 'Heston Blumenthal',
        plan: 'Basic' as const,
    },
];

const PremiumRecipesPage = () => {
    return (
        <div className="min-h-screen bg-gray-50/50 pb-20 pt-10 dark:bg-gray-900">
            <div className="container mx-auto px-6">
                {/* Header */}
                <div className="mb-12 flex flex-col items-center text-center">
                    <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-amber-100 px-4 py-1.5 text-sm font-bold text-amber-700 dark:bg-amber-900/30 dark:text-amber-400">
                        <Crown className="h-4 w-4" />
                        <span>Premium Collection</span>
                    </div>
                    <h1 className="mb-4 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-4xl font-black text-transparent dark:from-white dark:to-gray-400 md:text-5xl">
                        Exclusive Chef Recipes
                    </h1>
                    <p className="max-w-2xl text-lg text-gray-600 dark:text-gray-400">
                        Unlock the secrets of world-class cuisine. Curated recipes from top chefs,
                        available exclusively for our Basic and Pro members.
                    </p>
                </div>

                {/* Filters (Mock) */}
                <div className="mb-10 flex flex-wrap justify-center gap-4">
                    {['All Premium', 'Pro Exclusive', 'Basic Access', 'Under 30 Mins', 'Vegetarian'].map((filter, i) => (
                        <button
                            key={filter}
                            className={`rounded-full px-6 py-2.5 text-sm font-medium transition-all ${i === 0
                                    ? 'bg-gray-900 text-white shadow-lg shadow-gray-200/50 hover:bg-gray-800 dark:bg-white dark:text-gray-900'
                                    : 'bg-white text-gray-600 shadow-sm hover:bg-gray-50 hover:shadow dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
                                }`}
                        >
                            {filter}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
                    {MOCK_PREMIUM_RECIPES.map((recipe) => (
                        <PremiumRecipeCard key={recipe.id} {...recipe} />
                    ))}
                </div>

                {/* CTA for Upgrade (Mock, purely visual if user somehow sees this) */}
                <div className="mt-20 flex flex-col items-center justify-center rounded-3xl bg-gradient-to-br from-gray-900 to-gray-800 p-12 text-center text-white shadow-2xl dark:from-amber-900 dark:to-orange-900">
                    <Sparkles className="mb-6 h-12 w-12 text-amber-400" />
                    <h2 className="mb-4 text-3xl font-bold">Want Access to More?</h2>
                    <p className="mb-8 max-w-xl text-gray-300">
                        Upgrade to Pro to unlock our entire collection of 1,000+ premium recipes, masterclasses, and nutrition plans.
                    </p>
                    <button className="rounded-full bg-amber-500 px-8 py-3.5 font-bold text-white shadow-lg shadow-amber-500/25 transition-transform hover:scale-105 hover:bg-amber-600">
                        Upgrade Plan
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PremiumRecipesPage;
