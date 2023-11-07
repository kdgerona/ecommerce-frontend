import { IRootLayoutProps } from '@app/layout';
import { Header } from '@components/molecules';
import { AppLogo, Text } from '@components/atoms';

const StoreLayout: React.FC<IRootLayoutProps> = (props) => {
  const { children } = props;

  return (
    <main className='h-screen w-screen'>
      <div className='w-full h-full flex'>
        <div className='w-[20%] h-full flex flex-col px-10 py-2 gap-10'>
          <AppLogo className='w-[160px]' />
          <div className='flex flex-col gap-5'>
            <Text variant='h6'>Explore</Text>
            <div className='flex flex-col gap-3'>
              <Text variant='caption'>My Store</Text>
              <Text variant='caption'>Clothing</Text>
              <Text variant='caption'>Shoes</Text>
              <Text variant='caption'>Gadgets</Text>
              <Text variant='caption'>Luxury</Text>
            </div>
          </div>
        </div>
        <div className='w-full'>
          <Header />
          <div className='w-full h-full max-h-[80%] px-10 py-7'>{children}</div>
        </div>
      </div>
    </main>
  );
};

export default StoreLayout;
