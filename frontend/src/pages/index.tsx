import { lazy } from 'react';

export const MainPage = lazy(() => import('./MainPage'));
export const LoginOnly = lazy(() => import('../components/LoginOnly'));
export const BooksBookingPage = lazy(() => import('./BooksBookingPage'));
export const BooksCreatePage = lazy(() => import('./BooksCreatePage'));
export const BooksDetailPage = lazy(() => import('./BooksDetailPage'));
export const BooksPage = lazy(() => import('./BooksPage'));
export const BooksRentalPage = lazy(() => import('./BooksRentalPage'));
export const BooksSearchPage = lazy(() => import('./BooksSearchPage'));
export const ChatsPage = lazy(() => import('./ChatsPage'));
export const HistoryPage = lazy(() => import('./HistoryPage'));
export const LoginPage = lazy(() => import('./LoginPage'));
export const MerchantPage = lazy(() => import('./MerchantPage'));
export const NoticePage = lazy(() => import('./NoticePage'));
export const ProfilePage = lazy(() => import('./ProfilePage'));
export const ProfileEditPage = lazy(() => import('./ProfileEditPage'));
export const ReviewCreatePage = lazy(() => import('./ReviewCreatePage'));
export const SignupPage = lazy(() => import('./SignupPage'));
