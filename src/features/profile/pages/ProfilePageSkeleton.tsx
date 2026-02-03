
export default function ProfilePageSkeleton() {
    return (
        <div className="bg-orange-50/30 min-h-screen py-8 md:py-12">
            <div className="container mx-auto px-4 max-w-7xl animate-pulse">

                {/* Header Skeleton */}
                <div className="bg-white rounded-[2rem] shadow-sm overflow-hidden border border-gray-100 mb-6">
                    {/* Cover Image Placeholder */}
                    <div className="h-32 md:h-48 bg-gray-200" />

                    <div className="px-6 pb-6 relative">
                        {/* Avatar Placeholder */}
                        <div className="absolute -top-12 left-1/2 -translate-x-1/2 md:-translate-x-0 md:-top-16 md:left-10">
                            <div className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-white bg-gray-300"></div>
                        </div>

                        <div className="mt-14 md:mt-16 md:ml-40 flex flex-col md:flex-row items-center md:items-end justify-between gap-4">
                            <div className="w-full text-center md:text-left">
                                {/* Name Placeholder */}
                                <div className="h-8 w-48 bg-gray-300 rounded mx-auto md:mx-0 mb-3" />
                                {/* Meta Info Placeholders */}
                                <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
                                    <div className="h-4 w-40 bg-gray-200 rounded" />
                                    <div className="h-4 w-32 bg-gray-200 rounded" />
                                </div>
                            </div>
                            {/* Action Button Placeholder */}
                            <div className="h-10 w-32 bg-gray-300 rounded-xl" />
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left Column */}
                    <div className="lg:col-span-1 space-y-8">
                        {/* Subscription Skeleton */}
                        <div className="bg-white rounded-2xl p-6 shadow-sm border border-orange-100 space-y-4">
                            <div className="h-6 w-1/2 bg-gray-200 rounded" />
                            <div className="h-20 w-full bg-gray-100 rounded-xl" />
                        </div>

                        {/* Activity Stats Skeleton */}
                        <div className="bg-white rounded-2xl p-6 shadow-sm border border-orange-100">
                            <div className="h-6 w-1/3 bg-gray-200 rounded mb-6" />
                            <div className="grid grid-cols-2 gap-4">
                                <div className="h-24 bg-gray-50 rounded-xl" />
                                <div className="h-24 bg-gray-50 rounded-xl" />
                            </div>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* Recent Comments Skeleton */}
                        <div className="bg-white rounded-2xl p-6 shadow-sm border border-orange-100">
                            <div className="h-6 w-40 bg-gray-200 rounded mb-6" />
                            <div className="space-y-4">
                                {[1, 2, 3].map((i) => (
                                    <div key={i} className="h-24 bg-gray-50 rounded-xl w-full" />
                                ))}
                            </div>
                        </div>

                        {/* Favorites Skeleton */}
                        <div className="bg-white rounded-2xl p-6 shadow-sm border border-orange-100">
                            <div className="h-6 w-40 bg-gray-200 rounded mb-6" />
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {[1, 2].map((i) => (
                                    <div key={i} className="aspect-[4/5] bg-gray-50 rounded-xl" />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
