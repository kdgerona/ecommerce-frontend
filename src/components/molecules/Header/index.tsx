import { Text } from '@components/atoms';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Input } from '@/components/ui/input';
import { LuShoppingCart, LuSearch } from 'react-icons/lu';

const Header: React.FC = () => (
  <div className='w-full px-10 py-7 flex items-center justify-between'>
    <div className='w-full grid grid-cols-3'>
      <div className='flex w-full items-center justify-center gap-2'>
        <LuSearch size='20px' />
        <Input
          type='search'
          className='border-none'
          placeholder='Search for items, brands, and inspiration...'
        />
      </div>
      <div className='flex items-center justify-center gap-5 col-start-3 justify-self-end'>
        <LuShoppingCart size='20px' />
        <div className='flex items-center justify-center gap-2'>
          <Avatar>
            <AvatarImage src='https://github.com/shadcn.png' />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <Text variant='caption'>Kevin Dave</Text>
        </div>
      </div>
    </div>
  </div>
);

export default Header;
