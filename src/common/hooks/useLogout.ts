import useAuthStore from "@/features/auth/store/auth";
import { useState } from "react";
import api from "../api";
import { addToast } from "@heroui/react";
import { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";



export const useLogout = () => {
    const [loading , setLoading] = useState<boolean>(false);
    const { setAccessToken } = useAuthStore();
    const navigate = useNavigate();

    async function handleLogout() {
        try {
            setLoading(true);
            await api.post<{message: string}>("/auth/logout");
               setAccessToken(null!);
               useAuthStore.persist.clearStorage();
            addToast({
                title: "Logout Successful!",
                description: "You have been logged out successfully.",
                color: "success",
            });
            navigate("/");
        } catch (error: unknown) {
            if(error instanceof AxiosError)
            {
                addToast({
                    title: "Logout Failed!",
                    description: error.response?.data.message || "Something went wrong! please try again",
                    color: "danger",
                })
            }
        }
        finally {
            setLoading(false);
        }
    }

    return [ handleLogout , loading ] as const;
}