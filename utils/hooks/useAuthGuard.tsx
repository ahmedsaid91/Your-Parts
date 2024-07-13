// utils/hooks/useAuthGuard.tsx
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '../state/AuthContext';

export const useAuthGuard = () => {
  const router = useRouter();
  const { isAuthorized } = useAuth();

  useEffect(() => {
    debugger
    if (!isAuthorized) {
      router.push('/login'); // Redirect to login page if not authorized
    }
  }, [isAuthorized, router]);

  return isAuthorized; // Return the authorization status if needed
};
