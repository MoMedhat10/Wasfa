import { HeartOff } from 'lucide-react';
import { Button } from '@heroui/react';
import { useNavigate } from 'react-router-dom';

export default function FavoriteRecipesNotFound() {
    const navigate = useNavigate();

    return (
        <div className="container mx-auto px-4 py-24 flex flex-col items-center justify-center text-center">
            <div className="bg-orange-50 p-6 rounded-full mb-6">
                <HeartOff className="w-12 h-12 text-orange-500" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">No Favorites Yet</h2>
            <p className="text-gray-600 max-w-md mb-8">
                You haven't added any recipes to your favorites. Explore our delicious recipes and save the ones you love!
            </p>
            <Button
                color="warning"
                variant="solid"
                onPress={() => navigate('/search')}
                className="font-bold text-white bg-orange-500 hover:bg-orange-600"
            >
                Explore Recipes
            </Button>
        </div>
    );
}
