import useAuthStore from "@/features/auth/store/auth";
import { JwtPayload } from "@/features/recipe/components/reviewForm/ReviewForm";
import { jwtDecode } from "jwt-decode";
import { Navigate } from "react-router-dom";

interface Props {
    children: React.ReactNode;
    adminRoute?: boolean;
}
const ProtectedRoute = ({ children, adminRoute }: Props) => {
    const { accessToken } = useAuthStore();

    if(!accessToken){
        console.log("No access token");
        return <Navigate to="/login" />;
    }

    const { isAdmin } = jwtDecode<JwtPayload>(accessToken);
    
    if(adminRoute){
        console.log("Admin route");
        if(isAdmin){
            return children;
        }else{
            return <Navigate to="/login" />;
        }
    }

    console.log("User route");
    return children;

};

export default ProtectedRoute;