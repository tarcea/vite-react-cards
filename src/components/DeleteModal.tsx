import { FiCheck, FiX } from 'react-icons/fi';

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
      <div className='fixed top-1/4 left-1 lg:left-1/4 lg:h-1/2 lg:w-1/2 bg-violet-200/80 rounded-lg z-40 w-full ml-0.5 '>
        <div className='text-center text-black relative'>
          <p className='mt-10 p-2 text-xl'>
            Do you really want to delete this card?{' '}
          </p>
          <em className='p-2 text-l'>{card.title}</em>
        </div>
        <div className='flex justify-around mt-10 lg:mt-40'>
          <div
            onClick={really}
            className='p-2 text-5xl text-red-700 cursor-pointer'
          >
            <FiCheck />
          </div>
          <div
            onClick={() => setModal(false)}
            className='p-2 text-5xl text-green-700 cursor-pointer'
          >
            <FiX />
          </div>
        </div>
        <button
          onClick={() => setModal(false)}
          className='absolute top-5 right-5 text-2xl cursor-pointer'
        >
          <FiX />
        </button>
      </div>
    </div>
  );
};

export default DeleteModal;
