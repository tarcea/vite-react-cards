const CardCounter = ({ counter }: { counter: number }) => {
  return (
    <div className='fixed bottom-12 right-12 w-16 h-16 bg-violet-400/60 rounded-full text-violet-600 flex items-center justify-center'>
      {counter}
    </div>
  );
};

export default CardCounter;
