import { Review } from '@/features/admin/reviews/components/ReviewRow';
import { MessageCircle } from 'lucide-react';
import NotFountComments from './NotFountItems';
import { useNavigate } from 'react-router-dom';

interface RecentCommentsProps {
    comments: Review[];
}

export default function RecentComments({ comments }: RecentCommentsProps) {
    const navigate = useNavigate()

    const handleNavigateToRecipe = (recipeId: unknown) => {
        navigate(`/recipe/${recipeId}`)
    }

    return (
        <div className="bg-white rounded-[2rem] shadow-sm border border-gray-100 p-6 flex flex-col">
            <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
                <MessageCircle className="w-5 h-5 text-orange-500" />
                Recent Comments
            </h3>

            {comments?.length === 0 ? (
                <NotFountComments type="comments" />
            ) : (
                <div className="space-y-3">
                    {comments?.slice(0, 4)?.map(comment => (
                        <div onClick={() => handleNavigateToRecipe(comment.recipe)} key={comment.id} className="flex items-center justify-between p-4 bg-orange-50 rounded-xl border border-orange-100 hover:bg-orange-100 transition-colors cursor-pointer group">
                            <div className="flex items-center gap-3">
                                <div className="bg-white p-2 rounded-lg text-orange-500 shadow-sm">
                                    <MessageCircle className="w-5 h-5" />
                                </div>
                                <span className="font-medium text-gray-600 group-hover:text-gray-800 transition-colors">{comment?.body}</span>
                            </div>
                            <span className="text-xl font-bold text-orange-600">{comment?.rating}</span>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
