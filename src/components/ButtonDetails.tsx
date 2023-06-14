const ButtonDetails = ({ cardUrl }: { cardUrl: string }) => {
  return (
    <div className='absolute top-14 right-1 z-40 w-20 h-20 bg-white flex flex-wrap justify-center content-around rounded drop-shadow-xl'>
      <a
        href={cardUrl}
        target='_blank'
        className='text-sm hover:shadow-indigo-800'
      >
        visit Url
      </a>
      <p className='text-sm cursor-pointer hover:shadow-indigo-800'>remove</p>
    </div>
  );
};

export default ButtonDetails;
