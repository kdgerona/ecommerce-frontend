import Image, { ImageProps } from 'next/image';
import Logo from '@assets/svg/KDLiveShoppingLogo.svg';

const AppLogo: React.FC<Partial<ImageProps>> = (props) => (
  <Image {...props} src={Logo} alt='logo'></Image>
);

export default AppLogo;
