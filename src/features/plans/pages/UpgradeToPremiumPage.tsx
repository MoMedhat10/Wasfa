
import { Crown, Lock } from 'lucide-react';
import { useNavigate } from "react-router-dom";

export default function UpgradeToPremiumPage() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-gray-50 font-sans pb-20">
            {/* Hero Section */}
            <section className="pt-24 min-h-screen pb-16 px-4 text-center bg-white border-b border-gray-100">
                <div className="inline-flex items-center justify-center p-3 bg-orange-100 rounded-full mb-6">
                    <Lock className="w-8 h-8 text-orange-600" />
                </div>
                <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6">
                    Premium Quality Awaits
                </h1>
                <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                    This recipe is part of our <span className="text-orange-600 font-bold">Premium Collection</span>.
                    Upgrade your plan today to unlock exclusive recipes, advanced features, and a better culinary experience.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                    <button
                        onClick={() => navigate("/")}
                        className="px-8 py-3 cursor-pointer rounded-full font-semibold border-2 border-gray-200 text-gray-600 hover:bg-gray-50 transition-all"
                    >
                        Go Back
                    </button>
                    <button
                        onClick={() => navigate("/plans")}
                        className="px-8 py-3 rounded-full font-semibold cursor-pointer bg-orange-500 text-white hover:bg-orange-600 transition-all shadow-lg shadow-orange-500/30 flex items-center justify-center gap-2"
                    >
                        <Crown className="w-5 h-5" />
                        View Plans
                    </button>
                </div>
            </section>
        </div>
    );
}
