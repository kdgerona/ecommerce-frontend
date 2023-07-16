import { Text } from '@components/atoms';

const login: React.FC = () => {
  return (
    <div className='h-full w-full flex flex-col justify-center'>
      <Text>WELCOME BACK 👋🏻</Text>
      <Text variant='h5'>Continue to your Account.</Text>
      <Text>
        {"Don't have an account yet?"}{' '}
        <strong className='underline'>{"GET STARTED - IT'S FREE"}</strong>
      </Text>
    </div>
  );
};

export default login;
