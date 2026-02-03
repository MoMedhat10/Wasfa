import { CreditCard, Search } from 'lucide-react';
import FreePlanCard from './FreePlanCard';
import PremiumCardPlan from './PremiumCardPlan';
import { useNavigate } from 'react-router-dom';
import {  isAxiosError } from 'axios';
import { addToast } from '@heroui/react';
import api from '@/common/api';
import { useState } from 'react';

export default function SubscriptionCard({ isPremium }: { isPremium: boolean | null }) {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const handleUpgrade = async () => {
        if(!isPremium) {
            navigate('/plans');
            return;
        }
        
        try {
            setLoading(true);
            const response = await api.get("/payments/create-portal-session");
            window.location.href = response.data.url;
            
        } catch (error: unknown) {
            setLoading(false);
            console.log(error);
            if(isAxiosError(error)) {
                addToast({
                    title: "Error",
                    description: error.response?.data.message || "Something went wrong please try again later.",
                    color: "danger"
                })
            }
        }

    }

    return (
        <div className="bg-white rounded-[2rem] shadow-sm border border-gray-100 p-6 flex flex-col">
            <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-bold text-gray-900">Subscription</h3>
                <CreditCard className="w-5 h-5 text-orange-500" />
            </div>

            {isPremium ? <PremiumCardPlan /> : <FreePlanCard />}

            {
                isPremium && <div className="bg-orange-50 rounded-xl p-4 flex justify-between items-center mb-6 border border-orange-100">
                    <div className="flex items-center gap-3">
                        <div className="bg-orange-100 p-2 rounded-lg text-orange-600">
                            <Search className="w-4 h-4" />
                        </div>
                        <span className="font-medium text-gray-700 text-sm">Searches</span>
                    </div>
                    <span className="text-orange-600 font-bold text-sm">Unlimited</span>
                </div>
            }

            <button onClick={handleUpgrade} disabled={loading} className="w-full disabled:opacity-50 disabled:cursor-not-allowed bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-3 rounded-xl transition-colors mt-auto cursor-pointer">
                {isPremium ? "Manage Subscription" : "Upgrade to Premium"}
            </button>
        </div>
    );
}


