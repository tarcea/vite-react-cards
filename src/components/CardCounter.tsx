const CardCounter = ({ counter }: { counter: number }) => {
  return (
    <>
      {counter > 0 && (
        <div className='fixed bottom-12 left-12 w-16 h-16 bg-violet-400/70 rounded-full text-violet-800 flex items-center justify-center'>
          {counter}
        </div>
      )}
    </>
  );
};

export default CardCounter;
