import TextButton from './TextButton';

const ButtonDetails = ({
  cardUrl,
  removeCard,
}: {
  cardUrl: string;
  removeCard: () => void;
}) => {
  const deleteCard = () => {
    removeCard();
  };
  return (
    <>
      <div
        className='absolute top-14 right-1 z-10 w-30 h-20 bg-white flex flex-wrap justify-center content-around rounded drop-shadow-xl'
        onClick={(e) => e.stopPropagation()}
      >
        <div
          onClick={() => window.open(cardUrl, '_blank')}
          className='hover:bg-indigo-100 w-full p-1'
        >
          <TextButton text='visitUrl' />
        </div>
        <div onClick={deleteCard} className='hover:bg-indigo-100 w-full p-1'>
          <TextButton text='remove' />
        </div>
      </div>
    </>
  );
};

export default ButtonDetails;
