const DeleteModal = ({
  setModal,
  reallyRemoveCard,
}: {
  setModal: (value: boolean) => void;
  reallyRemoveCard: () => void;
}) => {
  const really = () => {
    setModal(false);
    reallyRemoveCard();
  };
  return (
    <div>
      <div className='fixed top-1/4 left-1/4 h-1/2 w-1/2 bg-red-400/60'>
        <div className=''>
          <h2>Modal Content</h2>
          <p>This is the content of the modal.</p>
          <button onClick={() => setModal(false)}>Close</button>
          <button onClick={really}>YES</button>
          <button onClick={() => setModal(false)}>NO</button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
