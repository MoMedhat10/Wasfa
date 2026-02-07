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

    if (!accessToken) {
        return <Navigate to="/" replace />;
    }

    const { isAdmin } = jwtDecode<JwtPayload>(accessToken);
    
    if (adminRoute) {
        if (isAdmin) {
            return children;
        } else {
            return <Navigate to="/" replace />;
        }
    }

    return children;

};

export default ProtectedRoute;