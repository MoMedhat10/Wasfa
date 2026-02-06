import ProfileHeader from "../components/ProfileHeader";
import SubscriptionCard from "../components/SubscriptionCard";
import ActivityStats from "../components/ActivityStats";
import RecentComments from "../components/RecentComments";
import FavoriteRecipes from "../components/FavoriteRecipes";
import { useFetchUser } from "../hooks/useFetchUser";
import useAuthStore from "@/features/auth/store/auth";
import { jwtDecode } from "jwt-decode";
import { JwtPayload } from "@/features/recipe/components/reviewForm/ReviewForm";
import ProfilePageSkeleton from "./ProfilePageSkeleton";
import { getUserPlan } from "@/features/admin/users/utils";

export default function ProfilePage() {
    const { accessToken } = useAuthStore();
    const {_id: userId} = jwtDecode<JwtPayload>(accessToken!);
    const { user , isPending } = useFetchUser(userId);
    const currentPlan = getUserPlan(user!);

    if(isPending) {
        return <ProfilePageSkeleton />
    }

    return (
        <div className="bg-orange-50/30 min-h-screen py-8 md:py-12">
            <div className="container mx-auto px-4 max-w-7xl">
                <ProfileHeader email={user?.email!} name={user?.username!} joinedAt={user?.createdAt!} isPremium={user?.subscription?.status === 'active' || null} />

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left Column - Stats & Info */}
                    <div className="lg:col-span-1 space-y-8">
                        <SubscriptionCard isPremium={user?.subscription?.status === 'active' || null} />
                        <ActivityStats totalComments={user?.comments.length!} totalRecipes={user?.favoriteRecipes.length!} />
                    </div>

                    {/* Right Column - Content */}
                    <div className="lg:col-span-2 space-y-8">
                        <RecentComments comments={user?.comments!} />
                        <FavoriteRecipes plan={currentPlan} favoriteRecipes={user?.favoriteRecipes!} />
                    </div>
                </div>
            </div>
        </div>
    );
}
 