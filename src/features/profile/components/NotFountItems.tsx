import { ChefHat } from 'lucide-react'

interface NotFountItemsProps {
    type: 'comments' | 'recipes';
}

function NotFountItems({ type }: NotFountItemsProps) {
  return (
   <div className="flex-1 flex flex-col items-center justify-center text-center py-10 opacity-60">
                <div className="bg-gray-100 p-4 rounded-full mb-4">
                    <ChefHat className="w-12 h-12 text-gray-300" />
                </div>
                <p className="text-gray-500 font-medium mb-1">You haven't left any {type} yet.</p>
                <p className="text-gray-400 text-sm">{type === 'comments' ? 'Start exploring recipes and share your thoughts!' : 'Start exploring recipes or upgrade your plan to  save your favorites!'}</p>
            </div>
  )
}

export default NotFountItems