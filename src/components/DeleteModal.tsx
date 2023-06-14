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
      <div className='fixed top-1/4 left-1 lg:left-1/4 h-1/2 lg:w-1/2 bg-red-400/80 rounded-lg z-40 w-80'>
        <div className='text-center text-black relative'>
          <div>
            <button onClick={really} className='p-2'>
              YES
            </button>
            <button onClick={() => setModal(false)} className='p-2'>
              NO
            </button>
          </div>
          <p className='mt-20 p-2'>Do you really want to delete this card? </p>
          <em className='p-2'>{card.title}</em>
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
