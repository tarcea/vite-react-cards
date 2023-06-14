const DeleteModal = ({
  setModal,
  reallyRemoveCard,
  card,
}: {
  setModal: (value: boolean) => void;
  reallyRemoveCard: () => void;
  card: Card;
}) => {
  const really = () => {
    setModal(false);
    reallyRemoveCard();
  };
  return (
    <div>
      <div className='fixed top-1/4 left-1 lg:left-1/4 lg:h-1/2 lg:w-1/2 bg-red-400/80 rounded-lg z-40 w-full ml-0.5 '>
        <div className='text-center text-black relative'>
          <p className='mt-10 p-2 text-xl'>
            Do you really want to delete this card?{' '}
          </p>
          <em className='p-2 text-l'>{card.title}</em>
        </div>
        <div className='flex justify-around mt-10 lg:mt-40'>
          <button onClick={really} className='p-2'>
            YES
          </button>
          <button onClick={() => setModal(false)} className='p-2'>
            NO
          </button>
        </div>
        <button
          onClick={() => setModal(false)}
          className='absolute top-5 right-5'
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default DeleteModal;
