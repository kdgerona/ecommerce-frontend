'use client';
import { Text, Input } from '@components/atoms';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import routes from '@resources/routes';

const Login: React.FC = () => {
  return (
    <div className='h-full w-full flex flex-col justify-center gap-5'>
      <div>
        <Text>WELCOME BACK 👋🏻</Text>
        <Text variant='h5'>Continue to your Account.</Text>
      </div>
      <div className='flex flex-col gap-3'>
        <Input type='email' label='Email' placeholder='Email' />
        <Input type='password' label='Password' placeholder='Password' />
        <div>
          <Button className='bg-orange-400' variant='default'>
            Login
          </Button>
        </div>
      </div>
      <Text>
        {"Don't have an account yet?"}{' '}
        <Link className='hover:underline' href={routes?.signup?.default}>
          {"GET STARTED - IT'S FREE"}
        </Link>
      </Text>
    </div>
  );
};

export default Login;
