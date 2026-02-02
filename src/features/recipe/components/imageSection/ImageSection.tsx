import RecipeRating from '@/common/components/recipeRating/RecipeRating'
import { ChefHat, Clock, Users, Heart } from 'lucide-react';
import { Recipe } from '@/common/types/Recipe';
import { useToggleFavorite } from '../../hooks/useToggleFavorite';
import useAuthStore from '@/features/auth/store/auth';


interface ImageSectionProps {
    recipe: Recipe;
    isFavorite: boolean | undefined;
    userId: string;
}

function ImageSection({ recipe , isFavorite , userId }: ImageSectionProps) {
    const { toggleFavorite , isPending } = useToggleFavorite(recipe.id , userId);
    const { accessToken } = useAuthStore();

 
    const recipeInfo = [
        { icon: <Clock className="w-5 h-5" />, text: `${recipe.cookTime} mins` },
        { icon: <Users className="w-5 h-5" />, text: `${recipe.servings} servings` },
        { icon: <ChefHat className="w-5 h-5" />, text: recipe.level },
    ];

    return (
        <div
            style={{ backgroundImage: `url(${recipe.image.url})` }}
            className="relative bg-cover bg-center h-72 md:h-96 flex items-end"
        >

            <div className="absolute inset-0 bg-black/40 md:bg-black/30"></div>

           {
            accessToken && (
                <button
                disabled={isPending}
                onClick={() => toggleFavorite(recipe.id)}
                className="absolute top-4 right-4 p-2 rounded-full bg-black/20 hover:bg-black/40 transition backdrop-blur-sm"
            >
                <Heart
                    className={`w-7 h-7 cursor-pointer transition-colors duration-200 ${isFavorite ? 'text-red-500 fill-red-500' : 'text-white'
                        }`}
                        
                />
            </button>
            )
           }

            <div className="relative container mx-auto px-6 py-6 space-y-3">
                <h1 className="text-3xl md:text-5xl font-bold text-white drop-shadow-lg">
                    {recipe.name}
                </h1>

                <div className="flex flex-wrap items-center gap-6 text-white text-lg font-medium">
                    <RecipeRating rating={recipe.rating} />
                    {recipeInfo.map((item, i) => (
                        <div key={i} className="flex items-center gap-2">
                            {item.icon}
                            <span>{item.text}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ImageSection