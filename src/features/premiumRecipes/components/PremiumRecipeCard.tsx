
import { Star, Clock, Flame, ChefHat, Lock } from 'lucide-react';

interface PremiumRecipeCardProps {
    id: string;
    title: string;
    image: string;
    rating: number;
    time: string;
    calories: number;
    chef: string;
    plan: 'Basic' | 'Pro' | 'Free';
}

const PremiumRecipeCard = ({ title, image, rating, time, calories, chef, plan }: PremiumRecipeCardProps) => {
    return (
        <div className="group relative overflow-hidden rounded-2xl bg-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl border border-gray-100 dark:bg-gray-800 dark:border-gray-700">
            {/* Image Overlay & Batch */}
            <div className="relative h-64 w-full overflow-hidden">
                <img
                    src={image}
                    alt={title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />

                {/* Premium Badge */}
                <div className="absolute top-4 right-4 flex items-center gap-1.5 rounded-full bg-gradient-to-r from-amber-500 to-orange-600 px-3 py-1 text-xs font-bold text-white shadow-lg backdrop-blur-md">
                    <Lock className="h-3 w-3" />
                    <span>{plan}</span>
                </div>
            </div>

            {/* Content */}
            <div className="absolute bottom-0 w-full p-4 text-white">
                <h3 className="mb-1 text-xl font-bold leading-tight tracking-wide">{title}</h3>

                <div className="mb-3 flex items-center gap-2 text-sm text-gray-200">
                    <ChefHat className="h-4 w-4 text-amber-400" />
                    <span>by {chef}</span>
                </div>

                <div className="grid grid-cols-3 gap-2 rounded-xl bg-white/10 p-2 backdrop-blur-sm">
                    <div className="flex flex-col items-center justify-center border-r border-white/10">
                        <div className="flex items-center gap-1 text-amber-400">
                            <Star className="h-3 w-3 fill-current" />
                            <span className="font-bold">{rating}</span>
                        </div>
                        <span className="text-[10px] text-gray-300">Rating</span>
                    </div>
                    <div className="flex flex-col items-center justify-center border-r border-white/10">
                        <div className="flex items-center gap-1 text-orange-400">
                            <Clock className="h-3 w-3" />
                            <span className="font-bold">{time}</span>
                        </div>
                        <span className="text-[10px] text-gray-300">Mins</span>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <div className="flex items-center gap-1 text-red-400">
                            <Flame className="h-3 w-3" />
                            <span className="font-bold">{calories}</span>
                        </div>
                        <span className="text-[10px] text-gray-300">Cals</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PremiumRecipeCard;
