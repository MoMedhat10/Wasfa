import { HeroUIProvider } from '@heroui/react'
import { ToastProvider } from "@heroui/toast";
import { Navigate, Route, Routes } from "react-router-dom"

import SignUp from "./features/auth/pages/SignUp";
import Login from "./features/auth/pages/Login";
import EmailConfirmation from "./features/auth/pages/EmailConfirmation";
import ForgotPassword from "./features/auth/pages/ForgotPassword";
import MainLayout from "./common/layout/MainLayout";
import Home from "./features/home/pages/index"
import ResetPassword from './features/auth/pages/ResetPassword';
import RecipePage from './features/recipe/pages/RecipePage';
import useAuthStore from './features/auth/store/auth';
import SearchPage from './features/search/pages/SearchPage';
import ProfilePage from './features/profile/pages/ProfilePage';
import PlansPage from './features/plans/pages/PlansPage';
import AdminLayout from './common/layout/AdminLayout';
import OverviewPage from './features/admin/overview/pages/OverviewPage';
import UsersPage from './features/admin/users/pages/UsersPage';
import RecipesPage from './features/admin/recipes/pages/RecipesPage';
import ReviewsPage from './features/admin/reviews/pages/ReviewsPage';
import SuccessPage from './features/plans/pages/SuccessPage';
import CancelPage from './features/plans/pages/CancelPage';
import ProtectedRoute from './routes/ProtectedRoute';
import FavoriteRecipesPage from './features/favoriteRecipes/pages/FavoriteRecipesPage';




function App() {
  const { accessToken } = useAuthStore();

  return (
    <HeroUIProvider>
      <ToastProvider />

      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path='recipe/:id' element={<RecipePage />} />
          <Route path='search' element={<SearchPage />} />
          <Route path='profile' element={<ProfilePage />} />
          <Route path='plans' element={<PlansPage />} />
          <Route path='favorites' element={<FavoriteRecipesPage />} />
          <Route path='success' element={<SuccessPage />} />
          <Route path='cancel' element={<CancelPage />} />
        </Route>

        <Route path='/admin' element={<AdminLayout />}>
          <Route index element={<OverviewPage />} />
          <Route path='users' element={<UsersPage />} />
          <Route path='recipes' element={<RecipesPage />} />
          <Route path='reviews' element={<ReviewsPage />} />
        </Route>

        <Route element={accessToken ? <Navigate to="/" /> : <SignUp />} path="/register" />
        <Route element={accessToken ? <Navigate to="/" /> : <Login />} path="/login" />
        <Route element={<EmailConfirmation />} path="/users/:userId/verify/:token" />
        <Route element={<ForgotPassword />} path="/auth/forgot-password" />
        <Route element={<ResetPassword />} path="/users/:userId/reset-password/:token" />
      </Routes>
    </HeroUIProvider>
  );
}

export default App;
