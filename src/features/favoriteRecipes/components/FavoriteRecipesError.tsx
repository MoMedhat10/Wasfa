import { AlertTriangle, RefreshCcw } from 'lucide-react';
import { Button } from '@heroui/react';

interface FavoriteRecipesErrorProps {
    onRetry?: () => void;
    message?: string;
}

export default function FavoriteRecipesError({
    onRetry,
    message = "We couldn't load your favorite recipes. Please try again later."
}: FavoriteRecipesErrorProps) {
    return (
        <div className="container mx-auto h-screen px-4 py-16 flex flex-col items-center justify-center text-center">
            <div className="bg-red-50 p-6 rounded-full mb-6">
                <AlertTriangle className="w-12 h-12 text-red-500" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Oops! Something went wrong</h2>
            <p className="text-gray-600 max-w-md mb-8">
                {message}
            </p>
            {onRetry && (
                <Button
                    color="danger"
                    variant="flat"
                    onPress={onRetry}
                    startContent={<RefreshCcw className="w-4 h-4" />}
                    className="font-bold"
                >
                    Try Again
                </Button>
            )}
        </div>
    );
}
