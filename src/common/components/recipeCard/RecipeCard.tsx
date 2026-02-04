import { Star, Clock, ChefHat, Lock, Users } from 'lucide-react';
import { Recipe } from '../../types/Recipe';
import { useNavigate } from 'react-router-dom';

interface RecipeCardProps {
  recipe: Recipe;
}

export default function RecipeCard({ recipe }: RecipeCardProps) {
  const navigate = useNavigate();

  const avgRating = recipe.comments?.length
    ? recipe.comments.reduce((acc, comment) => acc + (Number(comment.rating) || 0), 0) / recipe.comments.length
    : 0;

  const ratingValue = avgRating > 0 ? avgRating.toFixed(1) : 'New';
  const plan = recipe.premium ? 'Pro' : 'Free';

  return (
    <div
      onClick={() => navigate(`/recipe/${recipe.id}`)}
      className="group relative overflow-hidden rounded-2xl bg-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl border border-gray-100 dark:bg-gray-800 dark:border-gray-700 cursor-pointer"
    >
      {/* Image Overlay & Badge */}
      <div className="relative h-64 w-full overflow-hidden">
        <img
          src={recipe.image.url}
          alt={recipe.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />

        {/* Premium/Free Badge */}
        <div className={`absolute top-4 right-4 flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold text-white shadow-lg backdrop-blur-md ${recipe.premium ? 'bg-gradient-to-r from-amber-500 to-orange-600' : 'bg-gradient-to-r from-green-500 to-emerald-600'}`}>
          {recipe.premium ? <Lock className="h-3 w-3" /> : null}
          <span>{plan}</span>
        </div>
      </div>

      {/* Content */}
      <div className="absolute bottom-0 w-full p-4 text-white">
        <h3 className="mb-1 text-xl font-bold leading-tight tracking-wide truncate">{recipe.name}</h3>

        <div className="mb-3 flex items-center gap-2 text-sm text-gray-200">
          <ChefHat className="h-4 w-4 text-amber-400" />
          <span className="truncate">by Wasfa Chef</span>
        </div>

        <div className="grid grid-cols-3 gap-2 rounded-xl bg-white/10 p-2 backdrop-blur-sm">
          <div className="flex flex-col items-center justify-center border-r border-white/10">
            <div className="flex items-center gap-1 text-amber-400">
              <Star className="h-3 w-3 fill-current" />
              <span className="font-bold">{ratingValue}</span>
            </div>
            <span className="text-[10px] text-gray-300">Rating</span>
          </div>
          <div className="flex flex-col items-center justify-center border-r border-white/10">
            <div className="flex items-center gap-1 text-orange-400">
              <Clock className="h-3 w-3" />
              <span className="font-bold">{recipe.cookTime}</span>
            </div>
            <span className="text-[10px] text-gray-300">Mins</span>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="flex items-center gap-1 text-red-400">
              <Users className="h-3 w-3" />
              <span className="font-bold">{recipe.servings}</span>
            </div>
            <span className="text-[10px] text-gray-300">Servings</span>
          </div>
        </div>

      </div>
    </div>
  );
}
