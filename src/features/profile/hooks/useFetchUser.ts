import { useQuery } from "@tanstack/react-query"
import { fetchUser as fetchUserService } from "../services"
import { Recipe } from "@/common/types/Recipe";
import { Review } from "@/features/admin/reviews/components/ReviewRow";

type SubscriptionType = {
    _id: string;
    user: string ;
    stripeSubscriptionId: string;
    stripePriceId: string;
    status: string;
}

interface QueryResponse {
    id: string;
    username: string;
    email: string;
    isBanned: boolean;
    subscription: SubscriptionType;
    favoriteRecipes: Recipe[];
    comments: Review[];
    createdAt: string;
}

export const useFetchUser = (userId: string) => {
    const { data:user , isPending } = useQuery<QueryResponse>({
        queryFn: () => fetchUserService(userId),
        queryKey: ['user' , userId],
    })
    return { user , isPending }
} 