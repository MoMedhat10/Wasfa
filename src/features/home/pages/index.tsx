import HeroSection from "../components/Hero"
import RecipeGallery from '../../../common/components/recipeGallery/RecipeGallery';
import HowItWorks from '../components/HowItWorks';
import { useSearchParams } from "react-router-dom";
import { RecipeDefaults } from "../services";
import { filterType, limit, sortByType, sortType } from "../types";
import useAuthStore from "@/features/auth/store/auth";
import { useFetchUser } from "@/features/profile/hooks/useFetchUser";
import { jwtDecode } from "jwt-decode";
import { JwtPayload } from "@/features/recipe/components/reviewForm/ReviewForm";


export default function Home() {
    const [searchParams] = useSearchParams();
    const { accessToken } = useAuthStore();
    const decoded = accessToken ? jwtDecode<JwtPayload>(accessToken) : null;
    const { user } = useFetchUser(decoded?._id!);

    const isPremiumUser = user?.subscription?.status === "active" ? "" : "free";

    const sortBy = (searchParams.get('sortBy') as sortByType) || 'name';
    const sortType = (searchParams.get('sort') as sortType) || 'asc';
    const filterBy = (searchParams.get('filter') as filterType) || 'all';
    const limit = (parseInt(searchParams.get('limit') || '6')) as limit;
    const page = (parseInt(searchParams.get('page') || '1')) as number;

    const queryParams: RecipeDefaults = {
        sortBy,
        sortType,
        filterBy,
        limit,
        ingredients: [],
        page,
        type: isPremiumUser
    };

    

    return (
        <div>
            <HeroSection />
            <RecipeGallery  queryParams={queryParams} />
            <HowItWorks />
        </div>
    )
}
