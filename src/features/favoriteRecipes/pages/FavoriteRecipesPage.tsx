import RecipeCard from "@/common/components/recipeCard/RecipeCard";
import FavoriteRecipesSkeleton from "../components/FavoriteRecipesSkeleton";
import FavoriteRecipesError from "../components/FavoriteRecipesError";
import FavoriteRecipesNotFound from "../components/FavoriteRecipesNotFound";
import useAuthStore from "@/features/auth/store/auth";
import { jwtDecode } from "jwt-decode";
import { JwtPayload } from "@/features/recipe/components/reviewForm/ReviewForm";
import { useFetchUser } from "@/features/profile/hooks/useFetchUser";
import { getUserPlan } from "@/features/admin/users/utils";
import { Navigate } from "react-router-dom";



export default function FavoriteRecipesPage() {
    const { accessToken } = useAuthStore();
    const { _id: userId } = jwtDecode<JwtPayload>(accessToken!);
    const { user, isError, isPending, refetch } = useFetchUser(userId);
    const currPlan = getUserPlan(user!);
    

    if(currPlan === "FREE"){
        return <Navigate to="/upgrade" replace />;
    }

    if (isPending) return <FavoriteRecipesSkeleton />;
    if (isError) return <FavoriteRecipesError onRetry={refetch} />;

    return (
        <div className="container mx-auto px-4 py-8">
            <header className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">My Favorite Recipes</h1>
                <p className="text-gray-600">Quickly access the recipes you love the most.</p>
            </header>

            {user?.favoriteRecipes?.length! > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {user?.favoriteRecipes?.map((recipe) => (
                        <RecipeCard key={recipe.id} recipe={recipe} />
                    ))}
                </div>
            ) : (
                <FavoriteRecipesNotFound />
            )}



        </div>
    );
}
