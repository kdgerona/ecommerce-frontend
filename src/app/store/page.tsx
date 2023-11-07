'use client';
import { Text } from '@components/atoms';
import { EventsCalendar } from '@components/organisms';

const Store: React.FC = () => {
  return (
    <div className='w-full h-full flex flex-col gap-3'>
      <div className='bg-[#F68712] rounded-lg px-2 py-1 text-white'>
        <Text variant='body'>My Store</Text>
      </div>
      <div className='h-full'>
        <Text className='underline underline-offset-4' variant='caption'>
          Store Hours
        </Text>
        <EventsCalendar />
      </div>
    </div>
  );
};

export default Store;
