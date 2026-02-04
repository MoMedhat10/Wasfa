import RecipeCard from "@/common/components/recipeCard/RecipeCard";
import { Recipe } from "@/common/types/Recipe";
import { Heart } from 'lucide-react';
import NotFountComments from "./NotFountItems";


interface FavoriteRecipesProps {
    favoriteRecipes: Recipe[];
}

export default function FavoriteRecipes({ favoriteRecipes }: FavoriteRecipesProps) {

    return (
        <div className="bg-white rounded-[2rem] shadow-sm border border-gray-100 p-6">
            <h3  className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2 ">
                <Heart className="w-5 h-5 text-orange-500" />
                Favorite Recipes
            </h3>

            {
                favoriteRecipes?.length === 0 ? (
                    <NotFountComments type="recipes" />
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {favoriteRecipes?.slice(0, 2)?.map(recipe => (
                            <div key={recipe.id} className="transform transition hover:scale-[1.01]">
                                <RecipeCard recipe={recipe} />
                            </div>
                        ))}
                    </div>
                )
            }
        </div>
    );
}
