
const FreePlanCard = () => {
  return (
    <div className="bg-gradient-to-br from-zinc-500 to-slate-700 rounded-2xl p-6 text-white mb-6 shadow-md relative overflow-hidden group">
      <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          className="w-24 h-24 transform rotate-12"
        >
          <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>
      </div>

      <p className="text-zinc-200 text-xs font-medium uppercase tracking-wider mb-1">
        Current Plan
      </p>
      <h2 className="text-2xl font-bold mb-1">Free Tier</h2>
      <p className="text-zinc-200 text-sm opacity-90">Basic Access</p>

      <div className="absolute top-4 right-4">
        <div className="bg-white/20 p-1.5 rounded-lg backdrop-blur-sm">
          <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default FreePlanCard;