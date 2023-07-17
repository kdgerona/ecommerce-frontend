'use client';
import { Text } from '@components/atoms';

const Store: React.FC = () => (
  <div className='flex flex-col gap-3'>
    <div className='bg-[#F68712] rounded-lg px-2 py-1 text-white'>
      <Text variant='body'>My Store</Text>
    </div>
    <div>
      <Text className='underline underline-offset-4' variant='caption'>Store Hours</Text>
    </div>
  </div>
);

export default Store;
