import RecipeCardSkeleton from "@/common/components/recipeSkeleton/RecipeCardSkeleton";

export default function FavoriteRecipesSkeleton() {
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col gap-2 mb-8 animate-pulse">
                <div className="h-10 w-64 bg-gray-200 rounded-lg"></div>
                <div className="h-5 w-96 bg-gray-100 rounded-lg"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[...Array(6)].map((_, i) => (
                    <RecipeCardSkeleton key={i} />
                ))}
            </div>
        </div>
    );
}
