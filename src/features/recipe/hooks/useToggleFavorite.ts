import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toggleFavorite as toggleFavoriteService } from "../services";
import { addToast } from "@heroui/react";


export const useToggleFavorite = (recipeId: string , userId: string) => {
    const queryClient = useQueryClient();
    const {mutate: toggleFavorite  , isPending } =  useMutation({
        mutationFn:   toggleFavoriteService,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['recipe' , recipeId] });
            queryClient.invalidateQueries({ queryKey: ['user' , userId] });
        },
        onError: (err: any) => {
            addToast({
                title: "Failed to add recipe to favorites",
                description: err.message || "Please try again",
                color: "danger",
            })
        } 
    })
    return { toggleFavorite  , isPending }
    
}