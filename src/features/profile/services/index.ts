import api from "@/common/api";
import { AxiosError } from "axios";




export const fetchUser = async (userId: string) => {
    try {
        const response = await api.get(`/profile/${userId}`)
        return response.data
    }
    catch (err: unknown)
    {
        console.log(err);
        if(err instanceof AxiosError)
        {
            throw new Error(err.response?.data.message)
        }
        throw new Error("Failed to fetch user")
    }
}