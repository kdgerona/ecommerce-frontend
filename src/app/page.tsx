'use client';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import routes from '@resources/routes';

const RootPage: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    router.replace(routes?.login?.default);
  });

  return <div>Loading...</div>;
};

export default RootPage;
