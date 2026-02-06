import api from '@/common/api';
import { getUserPlan } from '@/features/admin/users/utils';
import useAuthStore from '@/features/auth/store/auth';
import { useFetchUser } from '@/features/profile/hooks/useFetchUser';
import { JwtPayload } from '@/features/recipe/components/reviewForm/ReviewForm';
import { addToast } from '@heroui/react';
import { isAxiosError } from 'axios';
import { jwtDecode } from 'jwt-decode';
import { Check, Star, Zap, Crown } from 'lucide-react';
import { useState } from 'react';


interface PricingCardProps {
    title: "Free" | "Basic" | "Pro";
    price: string;
    period: string;
    searches: string;
    features: string[];
    buttonText: string;
    variant: 'free' | 'basic' | 'pro';
    isPopular?: boolean;
}




export default function PricingCard({
    title,
    price,
    period,
    searches,
    features,
    buttonText,
    variant,
    isPopular = false,
}: PricingCardProps) {

    const getThemeStyles = () => {
        switch (variant) {
            case 'free':
                return {
                    headerBg: 'bg-gray-600',
                    icon: <Star className="w-8 h-8 text-white mb-4" />,
                    buttonBg: 'bg-gray-600 hover:bg-gray-700 text-white',
                    borderColor: 'border-gray-200',
                    textColor: 'text-gray-900',
                };
            case 'basic':
                return {
                    headerBg: 'bg-blue-500',
                    icon: <Zap className="w-8 h-8 text-white mb-4" />,
                    buttonBg: 'bg-blue-500 hover:bg-blue-600 text-white',
                    borderColor: 'border-blue-100',
                    textColor: 'text-blue-900',
                };
            case 'pro':
                return {
                    headerBg: 'bg-gradient-to-br from-orange-400 to-red-500',
                    icon: <Crown className="w-8 h-8 text-white mb-4" />,
                    buttonBg: 'bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white shadow-lg',
                    borderColor: 'border-orange-100',
                    textColor: 'text-orange-900',
                    popularBorder: 'border-orange-500 ring-4 ring-orange-500/20',
                };
        }
    };

    const styles = getThemeStyles();
    const { accessToken } = useAuthStore();
    const decoded = accessToken ? jwtDecode<JwtPayload>(accessToken) : null;
    const { user } = useFetchUser(decoded?._id!);
    const priceId = title === "Basic" ? import.meta.env.VITE_STRIPE_BASIC_PLAN_PRICE_ID : title === "Pro" ? import.meta.env.VITE_STRIPE_PRO_PLAN_PRICE_ID : null;
    const [loading , setLoading] = useState(false);
    
     const currentPlan = title.toLocaleUpperCase() === getUserPlan(user!);


    const handleSubscribe = async (priceId: string) => {
        
        if (!accessToken) {
            addToast({
                title: 'Please login first',
                description: 'Please login first to access this feature',
                color: 'danger',
            })
            return
        }
         
        if(!priceId) return;

        try {
            setLoading(true);
            const response = await api.post("/payments/checkout-session" , {
                priceId,
            })

            const session = response.data;
            window.location.href = session.url;
        } catch (error:unknown) {
            console.log(error)
            if(isAxiosError(error)){
                addToast({
                    title: 'Error',
                    description: error.response?.data?.message || "Something went wrong",
                    color: 'danger',
                })
            }
        } finally {
            setLoading(false);
        }
    };

    

    return (
        <div className={`flex flex-col relative bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl h-full ${isPopular ? styles.popularBorder : ''}`}>
            {isPopular && (
                <div className="bg-red-500 text-white text-xs font-bold uppercase tracking-widest py-1 text-center absolute top-0 w-full z-10">
                    Most Popular
                </div>
            )}

            {/* Header Section */}
            <div className={`${styles.headerBg} p-8 text-center text-white relative flex flex-col items-center justify-center pt-12`}>
                {styles.icon}
                <h3 className="text-2xl font-bold mb-2">{title}</h3>
                <div className="flex items-baseline justify-center gap-1">
                    <span className="text-4xl font-extrabold">{price}</span>
                    <span className="text-sm opacity-80">{period}</span>
                </div>
                <p className="mt-2 font-medium opacity-90">{searches}</p>
            </div>

            {/* Features Section */}
            <div className="p-8 flex-1 flex flex-col">
                <ul className="space-y-4 mb-8 flex-1">
                    {features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-3">
                            <div className={`mt-0.5 rounded-full p-0.5 ${variant === 'pro' ? 'text-orange-500' : 'text-green-500'}`}>
                                <Check className="w-4 h-4" strokeWidth={3} />
                            </div>
                            <span className="text-gray-600 text-sm leading-relaxed">{feature}</span>
                        </li>
                    ))}
                </ul>

                <button disabled={loading || currentPlan} onClick={() => handleSubscribe(priceId)}  className={`w-full text-center py-4 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer rounded-xl font-bold transition-all transform active:scale-[0.98] ${styles.buttonBg}`}>
                    {currentPlan ? "Current Plan" : buttonText}
                </button>
            </div>
        </div>
    );
}
