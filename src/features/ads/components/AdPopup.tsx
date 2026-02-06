import { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { X, ExternalLink } from 'lucide-react';
import { MOCK_ADS, Ad } from '../data/mockAds';
import useAuthStore from '@/features/auth/store/auth';
import { jwtDecode } from 'jwt-decode';
import { JwtPayload } from '@/features/recipe/components/reviewForm/ReviewForm';
import { useFetchUser } from '@/features/profile/hooks/useFetchUser';
import { getUserPlan } from '@/features/admin/users/utils';

export default function AdPopup() {
    const [isOpen, setIsOpen] = useState(false);
    const [currentAd, setCurrentAd] = useState<Ad | null>(null);
    const location = useLocation();
    const firstRender = useRef(true);

    const { accessToken } = useAuthStore();
    const decoded = accessToken ? jwtDecode<JwtPayload>(accessToken) : null;
    const { user } = useFetchUser(decoded?._id!);
    const plan = getUserPlan(user!);
    
    

    useEffect(() => {

        if(plan === "PRO"){  
            return;
        } 

        if (firstRender.current) {
            firstRender.current = false;
            return;
        }

        if (location.pathname === '/login' 
            || location.pathname === '/register' 
            || location.pathname === '/auth/forgot-password'
            || location.pathname === '/users/:userId/verify/:token'
            || location.pathname === '/users/:userId/reset-password/:token'
            || location.pathname === '/admin' 
            || location.pathname === '/admin/users'
            || location.pathname === '/admin/recipes'
            || location.pathname === '/admin/reviews') {
        return;
    }

    
 
        const shouldShow = Math.random() < 0.5;

        if (shouldShow) {
            showRandomAd();
        }

    }, [location.pathname]);

    const showRandomAd = () => {
        const randomIndex = Math.floor(Math.random() * MOCK_ADS.length);
        setCurrentAd(MOCK_ADS[randomIndex]);
        setIsOpen(true);
    };

    const handleClose = () => {
        setIsOpen(false);
    };

    if (!isOpen || !currentAd) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-opacity animate-in fade-in duration-200">
            <div
                className="bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden relative transform transition-all animate-in zoom-in-95 duration-200"
                role="dialog"
                aria-modal="true"
            >
                {/* Close Button */}
                <button
                    onClick={handleClose}
                    className="absolute top-3 right-3 p-2 bg-black/10 hover:bg-black/20 rounded-full text-white/90 transition-colors z-10"
                    aria-label="Close Ad"
                >
                    <X size={20} />
                </button>

                {/* Ad Image */}
                <div className="relative h-48 sm:h-56 w-full">
                    <img
                        src={currentAd.imageUrl}
                        alt={currentAd.title}
                        onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            // Prevent infinite loop if fallback also fails
                            if (target.src !== currentAd.fallbackImage) {
                                target.src = currentAd.fallbackImage;
                            }
                        }}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute top-3 left-3 bg-yellow-400 text-yellow-900 text-xs font-bold px-2 py-1 rounded uppercase tracking-wider shadow-sm">
                        Sponsored
                    </div>
                </div>

                {/* Ad Content */}
                <div className="p-6 text-center">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {currentAd.title}
                    </h3>
                    <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                        {currentAd.description}
                    </p>

                    <a
                        href={currentAd.ctaLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors shadow-lg shadow-blue-600/20"
                    >
                        {currentAd.ctaText}
                        <ExternalLink size={16} />
                    </a>
                </div>
            </div>
        </div>
    );
}
