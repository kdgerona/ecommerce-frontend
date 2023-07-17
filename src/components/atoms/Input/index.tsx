import { Input as BaseInput } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { IProps } from './types';

const Input: React.FC<IProps> = (props) => {
  const { label = '', ...restProps } = props;

  return (
    <div className='grid w-full max-w-sm items-center gap-2'>
      <Label htmlFor='email'>{label}</Label>
      <BaseInput {...restProps} />
    </div>
  );
};

export default Input;
