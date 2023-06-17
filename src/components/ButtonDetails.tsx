import TextButton from './TextButton';

const ButtonDetails = ({
  cardUrl,
  removeCard,
  setShow,
}: {
  cardUrl: string;
  removeCard: () => void;
  setShow: (value: boolean) => void;
}) => {
  const deleteCard = () => {
    removeCard();
    setShow(false);
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setShow(false);
  };

  const openUrl = () => {
    window.open(cardUrl, '_blank');
    setShow(false);
  };
  return (
    <>
      <div
        className='absolute top-14 right-1 z-10 w-40 h-50 bg-white flex flex-wrap justify-center content-around rounded drop-shadow-xl'
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className='hover:bg-indigo-100 w-full p-3'
          onClick={() => copyToClipboard(cardUrl)}
        >
          <TextButton text='copyUrl' />
        </div>
        <div onClick={openUrl} className='hover:bg-indigo-100 w-full p-2'>
          <TextButton text='visitUrl' />
        </div>
        <div onClick={deleteCard} className='hover:bg-indigo-100 w-full p-3'>
          <TextButton text='remove' />
        </div>
      </div>
    </>
  );
};

export default ButtonDetails;
