import { IProps } from './types';
import cn from 'classnames';

const Text: React.FC<IProps> = (props) => {
  const { variant, children, className } = props;

  switch (variant) {
    case 'h1': {
      return (
        <h1
          className={cn(
            'text-[76.29px] font-bold leading-[91.55px]',
            className
          )}
        >
          {children}
        </h1>
      );
    }
    case 'h2': {
      return (
        <h2
          className={cn(
            'text-[61.64px] font-medium leading-[73.96px]',
            className
          )}
        >
          {children}
        </h2>
      );
    }
    case 'h3': {
      return (
        <h3
          className={cn(
            'text-[43.83px] font-medium leading-[52.6px]',
            className
          )}
        >
          {children}
        </h3>
      );
    }
    case 'h4': {
      return (
        <h4
          className={cn(
            'text-[39.06px] font-medium leading-[46.87px]',
            className
          )}
        >
          {children}
        </h4>
      );
    }
    case 'h5': {
      return (
        <h3
          className={cn(
            'text-[31.25px] font-medium leading-[37.5px]',
            className
          )}
        >
          {children}
        </h3>
      );
    }
    case 'h6': {
      return (
        <h6 className={cn('text-[25px] font-medium leading-[44px]', className)}>
          {children}
        </h6>
      );
    }
    case 'body': {
      return (
        <span
          className={cn('text-[20px] font-normal leading-[35.2px]', className)}
        >
          {children}
        </span>
      );
    }
    case 'caption': {
      return (
        <span
          className={cn('text-[16px] font-normal leading-[28.16px]', className)}
        >
          {children}
        </span>
      );
    }
    default: {
      return (
        <span
          className={cn(
            'text-[12.8px] font-medium leading-[22.53px]',
            className
          )}
        >
          {children}
        </span>
      );
    }
  }
};

export default Text;
