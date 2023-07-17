import { IRootLayoutProps } from '@app/layout';
import { AppLogo } from '@components/atoms';
import Image from 'next/image';
import OnlineShoppingTwo from '@assets/svg/OnlineShopping2.svg';

const LoginLayout: React.FC<IRootLayoutProps> = (props) => {
  const { children } = props;

  return (
    <main className='h-screen w-screen'>
      <div className='h-full w-full px-[131px] flex'>
        <div className='w-full p-10'>
          <AppLogo className='w-[250px]' />
          <div className='h-[80%] w-full'>{children}</div>
        </div>
        <div className='h-full w-full flex items-center justify-center'>
          <Image
            className='mt-32'
            src={OnlineShoppingTwo}
            alt='online-shopping'
          />
        </div>
      </div>
    </main>
  );
};

export default LoginLayout;
