'use client';
import { Text, Input } from '@components/atoms';
import { Button, buttonVariants } from '@/components/ui/button';
import Link from 'next/link';
import routes from '@resources/routes';

const Signup: React.FC = () => {
  return (
    <div className='h-full w-full flex flex-col justify-center gap-5'>
      <div>
        <Text>{'NICE TO HAVE YOU HERE 👋🏻'}</Text>
        <Text variant='h5'>Create an Account.</Text>
      </div>
      <div className='flex flex-col gap-3'>
        <Input type='text' label='First Name' placeholder='First Name' />
        <Input type='text' label='Last Name' placeholder='Last Name' />
        <Input type='email' label='Email' placeholder='Email' />
        <Input type='password' label='Password' placeholder='Password' />
        <div>
          <Button className='bg-orange-400' variant='default'>
            Sign Up
          </Button>
        </div>
      </div>
      <Text>
        {'Already have an account?'}{' '}
        <Link className='hover:underline' href={routes?.login?.default}>
          LOG IN
        </Link>
      </Text>
    </div>
  );
};

export default Signup;
