'use client';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const RootPage: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    router.replace('/login');
  });

  return <div>Loading...</div>;
};

export default RootPage;
