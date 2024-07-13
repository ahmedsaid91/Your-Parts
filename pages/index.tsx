// pages/protectedPage.tsx
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAuthGuard } from '../utils/hooks/useAuthGuard';

const ProtectedPage: React.FC = () => {
  const router = useRouter();
  const isAuthorized = useAuthGuard();

  
  useEffect(() => {
    if (!isAuthorized) {
      router.push('/login'); // Optional: Redirect if not authorized (double protection)
    }else{
        router.push('/dashboard');
        
    }
  }, [isAuthorized, router]);

  return (
  <div className='min-h-full'></div>
  );
};

export default ProtectedPage;
