import { IUsers } from "../hooks/useUsers";




export const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });
};



export const getUserPlan = (user: IUsers) => {
       if(user.subscription.status === "active"){
          if(user.subscription.stripePriceId === import.meta.env.VITE_STRIPE_PRO_PLAN_PRICE_ID){
            return "PRO"
          }else if(user.subscription.stripePriceId === import.meta.env.VITE_STRIPE_BASIC_PLAN_PRICE_ID){
            return "BASIC"
          }
       }
       return "FREE"
    }

    export const getPlanColor = (user: IUsers) => {
        if(user.subscription.status === "active"){
           if(user.subscription.stripePriceId === import.meta.env.VITE_STRIPE_PRO_PLAN_PRICE_ID){
             return "bg-purple-100 text-purple-700"
           }else if(user.subscription.stripePriceId === import.meta.env.VITE_STRIPE_BASIC_PLAN_PRICE_ID){
             return "bg-blue-100 text-blue-700"
           }
        }
        return "bg-gray-100 text-gray-700"
    }