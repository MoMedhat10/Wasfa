function CrownIcon({ className }: { className?: string }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
        >
            <path d="m2 4 3 12h14l3-12-6 7-4-13-4 13z" />
        </svg>
    );
}


function PremiumCardPlan() {
    return (
        <div className="bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl p-6 text-white mb-6 shadow-md relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <CrownIcon className="w-24 h-24 transform rotate-12" />
            </div>

            <p className="text-orange-100 text-xs font-medium uppercase tracking-wider mb-1">Current Plan</p>
            <h2 className="text-2xl font-bold mb-1">Premium</h2>
            <p className="text-orange-100 text-sm opacity-90">Active until 2024-12-31</p>
            <div className="absolute top-4 right-4">
                <div className="bg-white/20 p-1.5 rounded-lg backdrop-blur-sm">
                    <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                </div>
            </div>
        </div>
    )
}

export default PremiumCardPlan